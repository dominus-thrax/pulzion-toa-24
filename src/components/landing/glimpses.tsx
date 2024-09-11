import React from "react";
import CarouselComponent from "../ui/CarouselComponent";
import Particles from "@/components/magicui/particles";
import { useState } from "react";
import localFont from "next/font/local"

const sixtyfour = localFont({
  src: "../../../public/font/Sixtyfour-Regular-VariableFont_BLED,SCAN.ttf"
})

const Glimpses: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center text-center p-8 relative bg-black">
      <Particles
        className="absolute inset-0"
        quantity={200}
        size={1.0}
        ease={80}
        color="#ffffff"
        refresh
      />
      {/* Background Image */}
      {/* <img
        src="/Glimpses/bg.png"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] bg-black"
        alt="Background"
      /> */}

      {/* Glimpses Title */}
      <h1
        className={`${sixtyfour.className} text-center mb-12 text-[#cfc36d] text-6xl`}>
        Glimpses
      </h1>

      {/* Carousel Container */}
      <div className="flex-grow w-full  flex justify-center items-center relative z-20">
            {/* <div
              className="w-full h-full flex items-center justify-center relative overflow-hidden"
              style={{ borderRadius: "3rem" }}
            > */}
              {/* Background Video (optional) */}
              {/* <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
              >
                <source src="/assets/bgvideo.mp4" type="video/mp4" />
              </video> */}

              {/* Carousel Component */}
              <CarouselComponent/>
            {/* </div> */}
        </div>
      </div>
  );
};

export default Glimpses;
