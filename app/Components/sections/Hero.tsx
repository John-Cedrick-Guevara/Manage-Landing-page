import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section id="hero" className="relative h-[70vh] max-w-6xl mx-auto">
      {/* bg image */}
      <Image
        priority={true}
        className="absolute -top-30 -right-18 z-0"
        src={"images/bg-tablet-pattern.svg"}
        alt={"bg"}
        height={500}
        width={500}
      />

      {/* main hero page */}
      <div className="flex max-md:mt-20 md:flex-row-reverse flex-col items-center justify-center h-full">
        <Image
          className="z-20 mx-auto"
          src={"images/illustration-intro.svg"}
          alt={"illustration bg"}
          height={370}
          width={370}
        />

        {/* intro texts */}
        <div className="max-mdtext-center space-y-5 z-20 w-full max-w-xs mx-auto">
          <h1 className="text-blue-950 text-4xl font-bold leading-11">
            Bring everyone together to build better projects.
          </h1>
          <p className="text-slate-400 px-2">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view
          </p>

          <Button theme={"orange"}>Get Started</Button>
        </div>
      </div>
      {/* bg image */}
      <Image
        className="absolute -bottom-20 -right-40 z-0"
        src={"images/bg-tablet-pattern.svg"}
        alt={"bg"}
        height={300}
        width={300}
      />
    </section>
  );
};

export default Hero;
