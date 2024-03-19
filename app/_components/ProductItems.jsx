import Image from "next/image";

export default function ProductItems({ Product }) {
  return (
    <div className="m-2 cursor-pointer duration-400 rounded-lg hover:shadow-md hover:opacity-80 ">
      <Image
        src={Product?.attributes?.image?.data?.attributes?.url}
        alt="image-card"
        width={300}
        height={300}
        priority={true}
        className="w-[100%] h-[200px] rounded-t-lg object-cover"
      />
      <div className=" flex justify-between items-center rounded-b-lg bg-gray-50 p-2">
        <div>
          <h1 className="text-[18px] line-clamp-1">
            {Product?.attributes?.title}
          </h1>
          <h3 className="text-gray-400 text-[15px] gap-1 flex items-center capitalize">
            <i className="fa-solid fa-list "></i>
            {Product?.attributes?.category}
          </h3>
        </div>
        <h3 className="text-[18px] text-primary">
          {Product?.attributes?.price} $
        </h3>
      </div>
    </div>
  );
}
