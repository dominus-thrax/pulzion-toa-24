"use client";
import React from "react";
import Image from "next/image";
import TechCard from '@/components/TechEvo/TechCard' 
import { techs } from "@/data/data";
import localFont from "next/font/local";

const font = localFont({
  src: "../../../../public/font/SairaStencilOne-Regular.ttf",
});

const GameEvolution = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      <div className="flex justify-center items-center h-44 lg:h-96  text-white">
        <Image
          src='/assets/Tech-Evolution/TechEvolution.png'
          alt="game evolution"
          width={850}
          height={50}
          layout="fixed"
          quality={100}
        />
      </div>
      {/* Game Cards Section */}
      <div className={`${font.className} space-y-10 p-10`}>
        {techs.map((game: any, index: number) => (
          <TechCard
            key={index}
            title={game.title}
            description={game.description}
            imageUrl={game.imageUrl}
            isReversed={index % 2 === 1} // Reverse layout for odd indices
          />
        ))}
      </div>
    </div>
  );
};

export default GameEvolution;
