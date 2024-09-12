import React from "react";
import Image from "next/image";
import MarioJumping from "@/components/GameEvo/MarioJumping"; // Import the MarioJumping component

interface GameCardProps {
  year: number;
  title: string;
  description: string;
  imageUrl: string;
  isReversed: boolean;
  marquee: string;
}

const GameCard: React.FC<GameCardProps> = ({
  year,
  title,
  description = "no description",
  imageUrl,
  isReversed,
  marquee,
}) => {
  return (
    <div className="bg-grey-100 shadow-lg rounded-lg overflow-hidden mb-10">
      {/* Infinite Scroll Div */}
      <div className="w-full h-content overflow-hidden mb-10">
        {title === "Super Mario Bros" ? (
          <div className="h-[220px] hidden lg:block">
            <MarioJumping />
          </div>
        ) : (
          <div className="w-full animate-marquee">
            <Image src={marquee} alt="Loading" width={100} height={20} />
          </div>
        )}
      </div>

      {/* Layout alternates based on isReversed prop */}
      <div
        className={`flex flex-col md:flex-row ${
          isReversed ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Game Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={imageUrl}
            alt="Cropped Image"
            width={500}
            height={100}
            layout="fixed"
            quality={100}
            className=""
          />
        </div>

        {/* Game Information */}
        <div className="p-6 w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-white">
            {title} ({year})
          </h2>
          <p
            className={`mt-4 text-white ${
              title === "Pong"
                ? 'bg-[url("/path-to-your-gif.gif")] bg-cover'
                : ""
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
