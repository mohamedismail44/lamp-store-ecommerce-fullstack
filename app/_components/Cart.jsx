import { useContext } from "react";
import { carts } from "../_Context/CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { Cart } = useContext(carts);

  const TotalPrice = () => {
    let amountPrice = 0;
    Cart.forEach((ele) => {
      amountPrice = amountPrice + Number(ele?.products?.attributes?.price);
    });
    return amountPrice;
  };
  const router = useRouter();
  return (
    <div className="">
      {Cart.map((ele) => (
        <div key={ele.id} className="mt-4 space-y-6">
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <img
                src={ele?.products?.attributes?.image?.data?.attributes?.url}
                alt="cart Image"
                className="size-16 rounded object-cover"
              />

              <div>
                <h3 className="text-sm text-gray-900">
                  {ele?.products?.attributes?.title}
                </h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Price:</dt>
                    <dd className="inline">
                      {ele?.products?.attributes?.price}
                    </dd>
                  </div>

                  <div>
                    <dt className="inline">Category:</dt>
                    <dd className="inline">
                      {ele?.products?.attributes?.category}
                    </dd>
                  </div>
                </dl>
              </div>
            </li>
          </ul>
        </div>
      ))}

      <div className="space-y-4 text-center">
        <a
          href="/cart"
          className="block rounded border mt-4 border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
        >
          View my cart ({Cart?.length})
        </a>

        {/* {Cart.length > 0 && (
          <button
            onClick={() => router.push(`/checkout?amount=${TotalPrice()}`)}
            className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
          >
            Checkout
          </button>
        )} */}

        <a
          href="/"
          className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
        >
          Continue shopping
        </a>
      </div>
    </div>
  );
}
