import Image from "next/image";
import "../../styles/font.css";
import Particles from "../magicui/particles";
import React from "react";

import sponser from "../../../public/assets/landing/sponsers/image.png";

const sponsors = [sponser, sponser, sponser, sponser, sponser];

const Sponsors: React.FC = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center relative overflow-x-hidden">
      <Particles
        className="absolute inset-0 z-10"
        quantity={200}
        size={1.0}
        ease={80}
        color="#ffffff"
        refresh
      />
      <div className="flex flex-col justify-center items-center mx-auto py-8 relative z-20">
        <h1 className="text-center mb-12 text-[#cfc36d] text-2xl md:text-6xl">
          Our Sponsors
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 mt-8 max-w-6xl mx-auto px-4 lg:px-0">
          {sponsors.map((imagePath, index) => (
            <div
              key={index}
              className="relative w-[250px] h-[250px] lg:w-[320px] lg:h-[320px] mx-auto overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-full h-full rounded-full border-r-[4px] border-primary animate-spin-slow z-20 border-x-emerald-400"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-[90%] h-[90%] rounded-full border-l-[4px] border-secondary animate-reverse-spin z-0 border-yellow-300"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center z-30">
                <Image
                  src={imagePath}
                  alt="sponsors image"
                  height={200}
                  width={200}
                  quality={100}
                  className="rounded-full"
                  layout="fixed"
                  priority // Preloads the images to avoid flicker
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
