"use client";
import Image from "next/image";
import "../../styles/font.css";
import logo from "../../../public/assets/landing/hero/logo.png";
import tagline from "../../../public/assets/landing/hero/tagline.png";
import localFont from "next/font/local";

const sixtyfour = localFont({
  src: "../../../public/font/OriginTech personal use.ttf",
});

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-black">
      {/* Main Content */}
      <div className="relative flex flex-col pt-[5rem] md:pt-[14rem] w-full justify-center">
        <div className="flex flex-col justify-center items-center relative z-10 space-y-[5rem] p-10 md:p-0">
          <div className="flex flex-col justify-center items-center w-full">
              <Image
                src={logo}
                alt="Main Logo"
                width={700}
                height={300}
                quality={100}
                layout="fixed"
                className=""
              />
              <Image
                src={tagline}
                alt="Main Logo"
                width={600}
                quality={100}
                layout="fixed"
                height={150}
                className="flex justify-center items-start"
              />
          </div>
          <div
            className={`${sixtyfour.className} pb-10 md:pb-[3rem] text-[#CFC36D] space-y-4 text-center text-xl md:text-3xl`}
          >
            <div>The annual techfest of PICT ACM Student Chapter </div>
            <div className="">4th, 5th & 6th October</div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Hero;
