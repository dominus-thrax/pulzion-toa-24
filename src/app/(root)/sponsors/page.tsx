"use client";
import Sponsors from "@/components/landing/sponsers";
import localFont from "next/font/local";
import React from "react";

import { BorderBeam } from "@/components/magicui/border-beam";

const originText = localFont({
  src: "../../../../public/fonts/OriginTech personal use.ttf",
});

const Sponsers = () => {
  return (
    <>
      <div className={`${originText.className} text-[#CFC36D] text-3xl mt-12`}>
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

      {/* Add the text block below */}
      <div className={`${originText.className} text-[#CFC36D] my-4 mb-6`}>
        <h1
          className={`${originText.className} text-center font-bold mb-4 mt-10`}
        >
          We are open for sponsorships!
        </h1>
        <h2 className="text-center font-semibold mb-6">Contact Us:</h2>
        <div className="text-center space-y-5">
          <h3>
            Manasi Waghe:
            <a
              className="underline hover:text-yellow-400"
              href="tel:+919511997999"
            >
              +91 95119 97999
            </a>
          </h3>
          <h3>
            Anish Khachane:
            <a
              className="underline hover:text-yellow-400"
              href="tel:+919028256928"
            >
              +91 90282 56928
            </a>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Sponsers;
