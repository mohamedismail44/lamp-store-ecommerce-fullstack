"use client";

import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { carts } from "../_Context/CartContext";
import CartApis from "../_utils/CartApi";
import CartPage from "./Cart";

export default function Headrer() {
  const { user } = useUser();
  // const [ItemsShowLogin, setItemsShowLogin] = useState();
  const { Cart, setCart } = useContext(carts);
  const [CartBox, setCartBox] = useState(false);

  const getUserCartItems_ = () => {
    CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress).then(
      (res) => {
        // console.log("user data cart", res?.data?.data);
        res?.data?.data.forEach((cItems) => {
          setCart((oldCart) => [
            ...oldCart,
            {
              id: cItems.id,
              products: cItems?.attributes?.products?.data[0],
            },
          ]);
        });
      }
    );
  };
  // useEffect(() => {
  //   setItemsShowLogin(window.location.href.toString().includes("/sign-in"));
  // }, []);
  useEffect(() => {
    user && getUserCartItems_();
  }, [user]);
  // const ItemsShowLogin = window.location.href.toString().includes('/sign-in')

  return (
    <header className="bg-slate-50">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-8 px-4 sm:px-6 lg:px-8 shadow-md">
        <Link href={"/"} className="flex items-center gap-1 md:mr-6 md:ml-4">
          <Image
            src={"/logo.png"}
            alt={"logo"}
            width={70}
            height={70}
            priority={true}
          />
          <h1 className="font-mono text-2xl font-bold ">Lamp Store</h1>
        </Link>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-gray-500 transition hover:text-teal-500"
                  href="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-teal-500"
                  href="/projects"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-teal-500"
                  href="/about"
                >
                  About us
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-teal-500"
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {!user ? (
              <div className="sm:flex sm:gap-4">
                <Link
                  className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-500"
                  href="/sign-in"
                >
                  Login
                </Link>

                <Link
                  className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-500/75 sm:block"
                  href="/sign-up"
                >
                  Register
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-6">
                <span>
                  <i
                    onClick={() => setCartBox(!CartBox)}
                    className="text-3xl cursor-pointer text-black fa-solid fa-cart-plus"
                  ></i>
                  ({Cart?.length})
                  {CartBox && (
                    <div
                      className=" absolute overflow-auto h-96 top-12 right-24 z-10 md:w-80 w-56 max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
                      aria-modal="true"
                      role="dialog"
                      tabIndex="-1"
                    >
                      <button
                        onClick={() => setCartBox(false)}
                        className="absolute end-4 top-4 text-gray-600 transition hover:scale-110"
                      >
                        <span className="sr-only">Close cart</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      <CartPage />
                    </div>
                  )}
                </span>
                <UserButton />
              </div>
            )}

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
