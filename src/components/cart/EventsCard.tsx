import React from "react";
import { FaHeart } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

interface CardProps {
  image: string;
  title: string;
  price: number;
  isLast?: boolean; // Optional prop to indicate if it's the last card
}

function Card({ image, title, price, isLast }: CardProps) {
  return (
    <div className="m-1 md:m-4">
      <div className="flex justify-between font-vt323">
        <div className="flex gap-3 md:gap-4">
          <img src={image} alt={title} className="  w-16 md:w-20" />
          <p className="my-auto text-[#8BFFCE] text-xl md:text-3xl">{title}</p>
        </div>
        <div className="my-auto">
          <p className="text-[#8BFFCE] my-auto ml-auto flex justify-end text-lg md:text-3xl">
            {price}/-
          </p>
          <p className="text-white text-sm md:text-xl flex gap-2 my-2">
            <span className="my-auto">
              <RiDeleteBin6Fill />
            </span>
            Delete
          </p>
        </div>
      </div>
      {!isLast && <hr className=" my-2" />}
    </div>
  );
}

export default Card;
