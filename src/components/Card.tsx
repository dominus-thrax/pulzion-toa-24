import React from "react";
import Image from 'next/image';
import ticket from "./../../public/assets/l.png"

import { Item } from "../app/feature/user-events/myorders/page";

const Card = ({ id, date, event, amount, status }: Item) => {
  //Card design
  // Header
  //Body
  //date
  //eventName
  //amount
  //Status
 
  return (

      <div className="relative w-[300px] h-[300px]"> {/* Parent div with 300px by 300px */}
        
        <Image
          src={ticket}
          alt="Hollow Border"
          layout="fill"
          objectFit="cover"  
        />
  
        {/* Content overlay on the image */}
        <div className="absolute w-[270px] flex flex-col items-center pt-4">
          <div>
            <div className="text-textColor">Transaction ID</div>
            <div className="text-textColor">{id}</div>
          </div>   
          <hr  className="w-[80%] " />
          <div className="mt-4 mb-4 w-full flex flex-col justify-start text-textColor   ">
            <div className="flex justify-between pl-3 pr-3">
              <span>Date:</span>
              <span>{date}</span>
            </div>
            <div className="pl-3 pr-3">{event}</div>
            <div className="flex justify-between pl-3 pr-7">
              <span>Amount:</span>
              <span>{amount}/-</span>
            </div>
          </div>
  
          <div className="mt-[80px]">
            <div className="text-statusColor">Status: {status}</div>
          </div>
        </div>
      </div>
    );
};

export default Card;
