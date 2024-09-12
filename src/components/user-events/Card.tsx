import React from "react";
import Image from 'next/image';
import ticket from "../../../public/assets/user-events/l.png"

import { Item } from "@/app/user-events/page";

const Card = ({ id, date, name, amount, status }: Item) => {
  //Card design
    // Header
    //Body
      //date
      //eventName
      //amount
  //Status
  
  return (

      <div className="relative w-[300px] h-[300px] my-10 md:mx-28 min-[320px]:max-[375px]:ml-[20px] min-[320px]:max-[374px]:mr-[15px] min-[375px]:max-[425px]:ml-[50px] min-[376px]:max-[424px]:mr-[20px] min-[425px]:max-[768px]:ml-[70px] min-[426px]:max-[768px]:mr-[30px]"> {/* Parent div with 300px by 300px */}
        <Image
          src={ticket}
          alt="Hollow Border"
          layout="fill"
          objectFit="cover"  
        />

        {/* Content overlay on the image */}
        <div className="absolute w-[270px] flex flex-col items-center pt-4">
          <div className="my-1">
            <div className="text-textColor">Transaction ID</div>
            <div className="text-textColor flex justify-center">{id}</div>
          </div>   
          <hr  className="w-[90%]"/>
          <div className="mt-4 mb-4 w-full flex flex-col justify-start text-textColor">
            <div className="flex justify-between pl-3 pr-3 my-2">
              <span>Date:</span>
              <span>{date}</span>
            </div>
            <div className="pl-3 pr-3 my-2">{name}</div>
            <div className="flex justify-between pl-3 pr-7 my-2">
              <span>Amount:</span>
              <span>{amount}/-</span>
            </div>
          </div>
  
          <div className="my-6">
            <div className="text-statusColor">Status: {status}</div>
          </div>
        </div>
      </div>
    );
};

export default Card;


 