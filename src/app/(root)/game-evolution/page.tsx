"use client";
import React from "react";
import Image from "next/image";
import GameCard from "@/components/GameEvo/Gamecard"; // Import the generalized game component
// import { games } from "@/data/data";
import localFont from "next/font/local";
import Timeline from "@/components/TechEvo/Timeline";
import { games } from "@/data/data";
import { SiNintendo3Ds } from "react-icons/si";

const font = localFont({
  src: "../../../../public/font/BDSupperRegular.ttf",
});

const GameEvolution = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      <div className="flex justify-center items-center h-44 lg:h-96 text-white">
        <Image
          src='/assets/Game-Evolution/GameEvolution.png'
          alt="game evolution"
          width={850}
          height={50}
          layout="fixed"
          quality={100}
        />
      </div>
      {/* Game Cards Section */}
      {/* <div className={`${font.className} space-y-10 p-10`}>
        {games.map((game: any, index: number) => (
          <GameCard
            key={index}
            year={game.year}
            title={game.title}
            description={game.description}
            imageUrl={game.imageUrl}
            isReversed={index % 2 === 1} // Reverse layout for odd indices
            marquee={game.marquee}
          />
        ))}
      </div> */}
      <Timeline datas={games} icon={SiNintendo3Ds}/>
    </div>
  );
};

export default GameEvolution;
