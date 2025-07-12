"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../ui/Button";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="flex items-center justify-between h-14 px-6 gap-3 z-10">
      <Image
        className="cursor-pointer"
        src={"images/logo.svg"}
        alt="Logo"
        width={100}
        height={100}
      />

      <Image
        onClick={() => setIsActive((prev) => !prev)}
        className="cursor-pointer z-40 md:hidden"
        src={`${
          isActive ? "images/icon-close.svg" : "images/icon-hamburger.svg"
        }`}
        alt="hamburger"
        width={20}
        height={20}
      />

      {/* active state */}
      <div
        className={`md:flex max-md:absolute transition-all z-30 bottom-0 right-0 top-0 max-md:h-[100vh] w-full max-md:bg-black/10 ${
          isActive ? "flex" : "hidden"
        } flex-col items-center gap-2 `}
      >
        <ul className=" max-md:bg-white max-md:mt-20 max-md:shadow-2xs w-xs sm:w-md flex max-md:flex-col items-center justify-center gap-6 py-10 rounded-md text-blue-950 font-semibold text-md">
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Community</a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:block z-20 w-xs">
        <Button theme="orange">Get Started</Button>
      </div>
    </nav>
  );
};

export default NavBar;
