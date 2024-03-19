export const metadata = {
  title: "Lamp Store || About",
};
import Laoding from "../_components/Laoding";
export default function about() {
  return (
    <div className="w-[70%] mx-auto my-24">
      <p className="font-bold text-3xl text-center m-4">About Us</p>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu
      </p>
      <div className="flex items-center justify-center">
        <div className="text-3xl text-primary duration-500 cursor-pointer m-2 md:text-5xl md:mt-7 hover:text-teal-500">
          <i className=" fa-brands fa-facebook"></i>
        </div>
        <div className="text-3xl text-primary duration-500 cursor-pointer m-2 md:text-5xl md:mt-7 hover:text-teal-500">
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div className="text-3xl text-primary duration-500 cursor-pointer m-2  md:text-5xl md:mt-7 hover:text-teal-500">
          <i className=" fa-brands fa-twitter"></i>
        </div>
        <div className="text-3xl text-primary duration-500 cursor-pointer m-2 md:text-5xl md:mt-7 hover:text-teal-500">
          <i className=" fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
  );
}
