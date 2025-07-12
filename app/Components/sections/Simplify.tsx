import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

const Simplify = () => {
  return (
    <section className="bg-orange-400 relative ">
      {/* image bg kasi di nagana sa css */}
      <Image
        priority={true}
        className="absolute left-0"
        src={"images/bg-simplify-section-mobile.svg"}
        alt={"bg"}
        height={80}
        width={180}
      />
      <div className="max-lg:text-center h-full space-y-10 py-20 lg:max-w-5xl lg:flex justify-between items-center mx-auto ">
        <h1 className="text-white text-4xl font-bold w-2xs lg:w-lg max-lg:mx-auto ">
          Simplify how your team works today.
        </h1>

        <Button theme="white"> Get Started</Button>
      </div>
    </section>
  );
};

export default Simplify;
