"use client";
import React from "react";
import Image from "next/image";
import GameCard from "@/components/GameEvo/Gamecard"; // Import the generalized game component
import { games } from "@/data/data";


const GameEvolution = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      <div className="flex justify-center items-center h-96 bg-black text-white">
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
      <div className="space-y-10 p-10 bg-black">
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
      </div>
    </div>
  );
};

export default GameEvolution;
