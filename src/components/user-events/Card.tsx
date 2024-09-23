import React from "react";
import Image from "next/image";
import ticket from "../../../public/assets/user-events/l.png";

import { Transaction } from "@/app/(root)/orders/page";
import Meteors from "../magicui/meteors";
import { BackgroundGradient } from "../ui/background-gradient";

const Card = ({ id, transaction_id, amount, events, status }: Transaction) => {
  return (
    <BackgroundGradient className="rounded-[22px] p-4 border border-[#ADCC8B] bg-black text-white h-full">
      <div className="relative flex flex-col items-center p-4 ">
        {/* Display transaction ID */}
        <p className="text-xl text-[#8BFFCE] mb-2">
          Transaction ID: {transaction_id}
        </p>

        {/* Display amount */}
        <p className="text-2xl text-[#CFC36D] mb-2">Amount: {amount}/-</p>

        {/* Display events */}
        <div className="my-2 space-y-4">
          <h3 className="text-2xl text-center w-full text-[#8BFFCE] mb-1">Events:</h3>
          <ul className="list-disc pl-5 text-sm text-neutral-300 grid grid-cols-1 md:grid-cols-2">
            {events.map((event, index) => (
              <li key={index} className="mb-1">
                {event}
              </li>
            ))}
          </ul>
        </div>

        {/* Display status */}
        <p className="text-lg text-[#8BFFCE] mt-2">Status: {status}</p>
      </div>
    </BackgroundGradient>
  );
};

export default Card;
