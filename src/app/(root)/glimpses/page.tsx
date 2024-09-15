"use client";
import images from "../../../../public/assets/data/glimpses.json";
import { useEffect } from "react";
import Image from "next/image";
import localFont from "next/font/local";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mx-auto mt-4 p-4 justify-items-center items-center">
        {images.map((image, index) => {
          return (
            <Image
              key={index}
              src={image.thumbnail}
              className="rounded-lg"
              height={300}
              width={400}
              alt="image"
            />
          );
        })}
      </div>
    </>
  );
}
