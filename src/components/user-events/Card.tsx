import React from "react";
import Image from "next/image";
import ticket from "../../../public/assets/user-events/l.png";

import { Transaction } from "@/app/(root)/orders/page";
import Meteors from "../magicui/meteors";

const Card = ({
  id,
  transaction_id,
  name,
  amount,
  events,
  status,
}: Transaction) => {
  return (
    <div className="relative border-[#ADCC8B] rounded-xl flex h-[300px] w-full flex-col items-center justify-center bg-black overflow-hidden border bg-background md:shadow-xl">
      <Meteors number={30} />
      <div className="flex flex-col justify-center items-center">
        <Image
          src={`/assets/landing/events/${name
            .toLowerCase()
            .replace(/ /g, "-")}.png`}
          height={100}
          width={100}
          alt="event_image"
          quality={100}
          layout="fixed"
          className=""
        />
        <div className="flex justify-center text-xl md:text-3xl  font-vt323 text-[#CFC36D] my-2">
          {name}
        </div>
        <div className="flex justify-between pl-8 pr-7 my-2">
          <span className="font-vt323 text-xl md:text-2xl text-[#8BFFCE]">
            Amount:
          </span>
          <span className="font-vt323 text-xl md:text-2xl text-[#8BFFCE]">
            {amount}/-
          </span>
        </div>
      </div>
      <div className="py-1">
        <div className="font-vt323 text-xl md:text-2xl text-[#8BFFCE]">
          Status: {status}
        </div>
      </div>
    </div>
  );
};

export default Card;
