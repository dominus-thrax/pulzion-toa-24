"use client";
import React, { useState } from "react";
import Image from "next/image";

interface TechCardProps {
  title: string;
  description: string;
  imageUrl: string;
  isReversed: boolean;
}

const TechCard: React.FC<TechCardProps> = ({
  title,
  description = "no description",
  imageUrl,
  isReversed,
}) => {
  // State to handle the read more toggle
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => setIsReadMore(!isReadMore);

  // Define the character limit for mobile view
  const mobileCharLimit = 150;

  return (
    <div className="bg-grey-100 shadow-lg rounded-lg overflow-hidden  mb-10">
      {/* Layout alternates based on isReversed prop */}
      <div
        className={`flex flex-col md:flex-row ${
          isReversed ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Tech Card Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={imageUrl}
            alt="Cropped Image"
            width={500}
            height={100}
            layout="fixed"
            quality={100}
          />
        </div>

        {/* Tech Information */}
        <div className="p-6 w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-white">{title}</h2>

          {/* Show partial text in mobile view, full text in desktop */}
          <p className="mt-4 text-white">
            {/* On small screens show truncated text, on larger screens show full text */}
            <span className="block md:hidden">
              {isReadMore
                ? description
                : `${description.slice(0, mobileCharLimit)}...`}
            </span>

            {/* On larger screens, show full description without "Read More" */}
            <span className="hidden md:block">{description}</span>
          </p>

          {/* Read More Button on small screens */}
          <button
            onClick={toggleReadMore}
            className={`${
              isReadMore ? "hidden" : "block"
            } text-blue-500 mt-2 text-sm underline md:hidden`}
          >
            {isReadMore ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
