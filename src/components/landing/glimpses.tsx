import React from "react";
import CarouselComponent from "../ui/CarouselComponent";
import Particles from "@/components/magicui/particles";
import localFont from "next/font/local";

const sixtyfour = localFont({
  src: "../../../public/font/Sixtyfour-Regular-VariableFont_BLED,SCAN.ttf",
});

const Glimpses: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center text-center p-8 relative bg-black">
      {/* Glimpses Title */}
      <h1
        className={`${sixtyfour.className} text-center mb-12 text-[#cfc36d] text-2xl md:text-6xl`}
      >
        Glimpses
      </h1>

      <div className="flex-grow w-full  flex justify-center items-center relative z-20">
        <CarouselComponent />
      </div>
    </div>
  );
};

export default Glimpses;
