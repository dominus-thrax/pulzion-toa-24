"use client";
import Sponsors from "@/components/landing/sponsers";
import localFont from "next/font/local";
import React from "react";
import ShineBorder from "@/components/magicui/shine-border";
import { BorderBeam } from "@/components/magicui/border-beam";

const originText = localFont({
  src: "../../../../public/fonts/OriginTech personal use.ttf",
});

const Sponsers = () => {
  return (
    <>
      <div className={`${originText.className} text-[#CFC36D] text-3xl my-12`}>
        <h1 className="text-center font-bold mb-4 mt-10 md:mt-24 text-xl md:text-2xl">
          Our Sponsors
        </h1>
      </div>
      <div className="flex flex-wrap justify-center md:justify-evenly items-center mx-6 md:mx-14 h-auto md:h-[300px] space-y-6 md:space-y-0">
        <div className="relative w-40 h-40 md:w-60 md:h-60 p-4 md:p-6">
          <img
            src="/assets/sponsers/campus.png"
            alt="Sponsor Logo"
            className="w-full h-full object-contain"
          />
          <BorderBeam
            size={600}
            duration={12}
            delay={5}
            className="absolute inset-0 hidden md:block"
          />
        </div>

        <div className="relative w-40 h-40 md:w-60 md:h-60 p-4 md:p-6">
          <img
            src="/assets/sponsers/imperial.png"
            alt="Sponsor Logo"
            className="w-full h-full object-contain"
          />
          <BorderBeam
            size={600}
            duration={12}
            delay={5}
            className="absolute inset-0 hidden md:block"
          />
        </div>

        <div className="relative w-40 h-40 md:w-60 md:h-60 p-4 md:p-6">
          <img
            src="/assets/sponsers/workhat.png"
            alt="Sponsor Logo"
            className="w-full h-full object-contain"
          />
          <BorderBeam
            size={600}
            duration={12}
            delay={5}
            className="absolute inset-0 hidden md:block"
          />
        </div>
      </div>
    </>
  );
};

export default Sponsers;
