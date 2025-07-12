"use client";
import Image from "next/image";
import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Button from "../ui/Button";

const Review = () => {
  // const [sliderRef, instanceRef] = useKeenSlider({
  //   loop: true,
  //   breakpoints: {
  //     "(min-width: 500px)": {
  //       loop: false,
  //     },
  //   },
  // });

  const [slide, setSlide] = useState(0);

  const reviews = [
    {
      name: "Anisha Li",
      profile: "/images/avatar-anisha.png",
      review:
        "Manage has supercharged out team's workflow. The maintain visibility on larger milestones at all time skeepe everyone motivated.",
    },
    {
      name: "Ali Bravo",
      profile: "/images/avatar-ali.png",
      review:
        "We have been abe to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
    },
    {
      name: "Richard Watts",
      profile: "/images/avatar-richard.png",
      review:
        "Manage allows us to provide structure and progress. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!",
    },
  ];

  return (
    <section className="text-center space-y-10 ">
      <h1 className="text-blue-950 text-2xl md:3xl font-bold text-center ">
        What they've said
      </h1>

      {/* review container */}
      <div
        // ref={sliderRef}
        className=" w-full flex items-center justify-start gap-4 mt-18 lg:max-w-6xl mx-auto"
      >
        {reviews.map((item, index) => (
          <div
            className={`lg:block ${
              slide === index ? "block" : "hidden "
            } relative  transition-all shadow-xl h-full max-h-80 bg-gray-50 w-full max-w-sm mx-auto rounded-md text-center p-10 pt-16 space-y-4`}
            key={index}
          >
            <Image
              className="absolute right-0 left-0 mx-auto -top-10"
              src={String(item.profile)}
              alt="pfp"
              width={70}
              height={70}
            />
            <h3 className="text-lg text-blue-950 font-semibold ">
              {item.name}
            </h3>
            <p className=" text-slate-400">"{item.review}"</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 lg:hidden">
        {" "}
        {reviews.map((item, index) => (
          <span
            onClick={() => setSlide(index)}
            className={` w-3 h-3 transition-all ${
              slide === index ? "bg-orange-400" : "border-2 border-orange-400"
            } rounded-full mt-6 cursor-pointer`}
            key={index}
          ></span>
        ))}
      </div>

      <Button theme="orange">Get Started</Button>
    </section>
  );
};

export default Review;
