import Image from "next/image";
import SkeletonImage from "./skeletonImage";
import SkeletonInfo from "./SkeletonInfo";
import { useContext } from "react";
import CartApis from "../../_utils/CartApi";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { carts } from "../../_Context/CartContext";

export default function Details({ Product }) {
  const { user } = useUser();
  const router = useRouter();
  const { Cart, setCart } = useContext(carts);
  const handeleAddToCarts_ = () => {
    if (user) {
      // logic add to cart
      const data = {
        data: {
          username: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          products: [Product?.id],
        },
      };
      CartApis.addToCart(data)
        .then((res) => {
          // console.log("sucsess get request", res.data.data.id);
          setCart((oldCart) => [
            ...oldCart,
            { id: res?.data?.data?.id, Product },
          ]);
          alert("Product Added To Cart");
        })
        .catch((erorr) => console.log("erorr request", erorr));
    } else {
      // login To Add carts
      router.push("/sign-in");
    }
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 px-14 py-8">
      {Product?.attributes?.image?.data?.attributes?.url ? (
        <div>
          <Image
            src={Product?.attributes?.image?.data?.attributes?.url}
            alt="image-card"
            width={300}
            height={300}
            className="w-[80%] rounded-lg m-auto "
          />
        </div>
      ) : (
        <SkeletonImage />
      )}
      {Product?.id ? (
        <div className="my-auto">
          <div>
            <h1 className="text-3xl line-clamp-1">
              {Product?.attributes?.title}
            </h1>
            <p className="my-2 text-[17px]">
              {Product?.attributes?.description[0]?.children[0]?.text}
            </p>
            <h2 className="flex items-center text-sm ">
              {Product?.attributes?.instantDelivery ? (
                <i className="text-green-600 mr-2 text-2xl fa-solid fa-truck-fast"></i>
              ) : (
                <i className="text-gray-500 mr-2 text-2xl fa-solid fa-truck-fast"></i>
              )}
              Eligible For Instant Delivery
            </h2>
            <h3 className="text-gray-400 text-sm gap-1 flex items-center my-2">
              <i className="fa-solid fa-list "></i>
              Category : {Product?.attributes?.category}
            </h3>
          </div>
          <h3 className="text-3xl text-primary">
            {Product?.attributes?.price} $
          </h3>
          <button
            onClick={() => handeleAddToCarts_()}
            className="bg-primary text-xl py-2 px-5 duration-500 rounded-md mt-2 hover:bg-teal-500"
          >
            Add to Cart
          </button>
        </div>
      ) : (
        <SkeletonInfo />
      )}
    </div>
  );
}
