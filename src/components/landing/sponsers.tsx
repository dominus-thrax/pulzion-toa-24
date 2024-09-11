import Image from "next/image";
import "../../styles/font.css";
import Particles from "../magicui/particles";
import React from "react";

const sponsors = [
  "/Sponsers/budhani2.svg",
  "/Sponsers/budhani2.svg",
  "/Sponsers/budhani2.svg",
  "/Sponsers/budhani2.svg",
  "/Sponsers/budhani2.svg",
  // Add more image paths if needed
];

const Sponsors: React.FC = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center relative">
      <Particles
        className="absolute inset-0 z-10" // Increased z-index
        quantity={200}
        size={1.0}
        ease={80}
        color="#ffffff"
        refresh
      />
      <div className="container mx-auto py-8 relative z-20">
        <h1
          className="text-center mb-12 text-[#cfc36d] text-6xl"
        >
          Our Sponsors
        </h1>

        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {sponsors.map((imagePath, index) => (
            <div
              key={index}
              className="flex justify-center relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-full h-full rounded-full border-r-[4px] border-primary animate-spin-slow z-20 border-x-emerald-400"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-[90%] h-[90%] rounded-full border-l-[4px] border-secondary animate-reverse-spin z-0 border-yellow-300"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-30">
                <img
                  src={imagePath}
                  className="w-[70%] h-[70%] rounded-full"
                  alt={`Sponsor ${index + 1}`}
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
