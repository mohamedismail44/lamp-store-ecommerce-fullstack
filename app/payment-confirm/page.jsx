import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Lamp Store || Payment Confirm",
};


export default function page() {
  return (
    <div className="flex flex-col items-center gap-4 my-12">
      <Image
        src={"/verified.gif"}
        width={180}
        height={180}
        alt="verified sucsses"
        priority={true}
      />

      <h1 className="text-2xl">Payment Sucssesful !</h1>
      <p className="text-gray-500 ">
        we sent an email with your order confirmation along with Digital Content
      </p>
      <Link
        href={"/"}
        className="bg-primary text-white rounded-md p-2 duration-500 hover:bg-teal-500"
      >
        Go To Home
      </Link>
    </div>
  );
}
