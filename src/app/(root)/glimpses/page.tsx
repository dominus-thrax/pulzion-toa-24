"use client";
import { useEffect } from "react";
import localFont from "next/font/local";
import items from "../../../../public/assets/data/glimpses.json";
import { BentoGrid, BentoGridItem } from "../../../components/ui/bento-grid";
import { BorderBeam } from "@/components/magicui/border-beam";

const originText = localFont({
  src: "../../../../public/fonts/OriginTech personal use.ttf",
});
export default function Page() {
  useEffect(() => {
    console.log("first");
  }, []);
  return (
    <>
      <div className="mt-5">
        <h1
          className={` ${originText.className} text-[#cfc36d] text-2xl md:text-6xl text-center mt-20`}
        >
          GLIMPSES
        </h1>
      </div>
      <BentoGrid className="max-w-4xl mx-auto my-20">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            className={item.className}
            original={item.original}
          />
        ))}
      </BentoGrid>
    </>
  );
}
