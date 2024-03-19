import Link from "next/link";

export default function Category() {
  return (
    <div className="">
      <h1 className="text-2xl text-gray-900 text-center m-10 capitalize">product category</h1>
      <div className="w-[70%] mx-auto my-4 grid grid-cols-3 gap-6  md:grid-cols-6 md:gap-2">
        <Link
          href="/category/laptop"
          className="flex flex-col items-center text-orange-500  hover:opacity-80"
        >
          <i className="text-7xl lg:text-8xl fa-solid fa-laptop"></i>laptop
        </Link>
        <Link
          href="/category/mobile"
          className="flex flex-col items-center text-red-500  hover:opacity-80"
        >
          <i className="text-7xl lg:text-8xl fa-solid fa-mobile-screen"></i>
          mobile
        </Link>
        <Link
          href="/category/watch"
          className="flex flex-col items-center text-yellow-500  hover:opacity-80"
        >
          <i className="text-7xl lg:text-8xl fa-regular fa-clock"></i>watch
        </Link>
        <Link
          href="/category/printer"
          className="flex flex-col items-center text-lime-500  hover:opacity-80"
        >
          <i className="text-7xl lg:text-8xl fa-solid fa-print"></i>printer
        </Link>
        <Link
          href="/category/ink"
          className="flex flex-col items-center text-sky-500  hover:opacity-80"
        >
          <i className="text-7xl lg:text-8xl fa-solid fa-paint-roller"></i>ink
        </Link>
        <Link
          href="/category/speakers"
          className="flex flex-col items-center text-indigo-500 hover:opacity-80"
        >
          <i className="text-7xl lg:text-8xl fa-solid fa-headphones-simple"></i>
          speaker
        </Link>
      </div>
    </div>
  );
}
