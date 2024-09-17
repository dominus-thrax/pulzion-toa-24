import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../../components/ui/bento-grid";
import items from "../../../../public/assets/data/glimpses.json";
import localFont from "next/font/local";

const originText = localFont({
  src: "../../../../public/fonts/OriginTech personal use.ttf",
});

export default function BentoGridDemo() {
  return (
    <div className="">
      <div className="">
        <h1
          className={` ${originText.className} text-[#cfc36d] text-2xl md:text-6xl text-center mt-20`}
        >
          GLIMPSES
        </h1>
      </div>
      <BentoGrid className="max-w-[60rem] mx-auto mt-10 p-4 md:p-0">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            className={item.className}
            original={item.original}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

// const items = [
//   {
//     title: "The Dawn of Innovation",
//   },
//   {
//     title: "The Digital Revolution",
//   },
//   {
//     title: "The Art of Design",
//   },
//   {
//     title: "The Power of Communication",
//   },
//   {
//     title: "The Pursuit of Knowledge",
//   },
//   {
//     title: "The Joy of Creation",
//   },
//   {
//     title: "The Spirit of Adventure",
//   },
// ];
