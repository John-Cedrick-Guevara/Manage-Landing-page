import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

const Footer = () => {
  const socials = [
    "images/icon-facebook.svg",
    "images/icon-youtube.svg",
    "images/icon-twitter.svg",
    "images/icon-pinterest.svg",
    "images/icon-instagram.svg",
  ];

  return (
    <footer className="bg-gray-950">
      <div className="px-5 py-14 max-lg:space-y-10 lg:grid grid-cols-3  place-items-start  max-w-sm lg:max-w-5xl mx-auto">
        {/* search bar */}
        <div className="flex items-center justify-center gap-2 col-start-3 mx-auto">
          <input
            placeholder="Updates in your inbox..."
            className="rounded-full w-full max-w-xs bg-white border-none outline-none py-2 px-4"
            type="text"
          />
          <Button theme="orange">Go</Button>
        </div>

        {/* navs */}
        <div className="grid grid-cols-2 text-white gap-4 max-w-xs mx-auto max-lg:my-10 col-start-2 row-start-1">
          <h5>Home</h5>
          <h5>Pricing</h5>
          <h5>Products</h5>
          <h5>About us</h5>
          <h5>Careers</h5>
          <h5>Community</h5>
          <h5>Privacy Policy</h5>
        </div>

        {/* icons */}
        <div className="flex items-center justify-center gap-7 mx-auto">
          {socials.map((item, index) => (
            <Image
              key={index}
              priority={true}
              className=""
              src={item}
              alt={"bg"}
              width={30}
              height={30}
            />
          ))}
        </div>

        {/* logo */}
        <Image
          priority={true}
          className="invert max-lg:mx-auto col-start-1 row-start-1"
          src={"images/logo.svg"}
          alt={"bg"}
          color="white"
          width={100}
          height={100}
        />

        <p className="text-slate-400 text-center col-start-3 col-end-3 mx-auto">
          Copyright 2020. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
