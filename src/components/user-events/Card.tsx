import React from "react";
import Image from "next/image";
import ticket from "../../../public/assets/user-events/l.png";

import { Transaction } from "@/app/(root)/orders/page";
import Meteors from "../magicui/meteors";
import { BackgroundGradient } from "../ui/background-gradient";

const Card = ({
  id,
  transaction_id,
  amount,
  events,
  status,
}: Transaction) => {
  return (
    // <div className="relative border-[#ADCC8B] rounded-xl flex h-[300px] w-full flex-col items-center justify-center bg-black overflow-hidden border bg-background md:shadow-xl">
    //   <Meteors number={30} />
    //   <div className="flex flex-col justify-center items-center">
    //     <Image
    //       src={`/assets/landing/events/${name
    //         .toLowerCase()
    //         .replace(/ /g, "-")}.png`}
    //       height={100}
    //       width={100}
    //       alt="event_image"
    //       quality={100}
    //       layout="fixed"
    //       className=""
    //     />
    //     <div className="flex justify-center text-xl md:text-3xl text-[#CFC36D] my-2">
    //       {name}
    //     </div>
    //     <div className="flex justify-between pl-8 pr-7 my-2">
    //       {/* <span className=" text-xl md:text-2xl text-[#8BFFCE]">
    //         Amount:
    //       </span>
    //       <span className=" text-xl md:text-2xl text-[#8BFFCE]">
    //         {amount}/-
    //       </span> */}
    //     </div>
    //   </div>
    //   <div className="py-1">
    //     <div className=" text-xl md:text-2xl text-[#8BFFCE]">
    //       Status: {status}
    //     </div>
    //   </div>
    // </div>
  // );
  <BackgroundGradient className="rounded-[22px] p-4 border border-[#ADCC8B] bg-black text-white h-full">
  <div className="relative flex flex-col items-center p-4 ">
    {/* Display transaction ID */}
    <p className="text-2xl text-[#8BFFCE] mb-2">Transaction ID: {transaction_id}</p>

    {/* Display amount */}
    <p className="text-2xl text-[#CFC36D] mb-2">Amount: {amount}/-</p>

    {/* Display events */}
    <div className="my-2">
      <h3 className="text-2xl text-[#8BFFCE] mb-1">Events:</h3>
      <ul className="list-disc pl-5 text-sm text-neutral-300">
        {events.map((event, index) => (
          <li key={index} className="mb-1">{event}</li>
        ))}
      </ul>
    </div>

    {/* Display status */}
    <p className="text-lg text-[#8BFFCE] mt-2">Status: {status}</p>
  </div>
</BackgroundGradient>

  )

};

export default Card;
