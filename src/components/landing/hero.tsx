"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "../../styles/font.css";

const Hero = () => {
  const logoRef = useRef<HTMLImageElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLImageElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollValue = window.scrollY;

          // Parallax for Logo
          if (logoRef.current) {
            logoRef.current.style.transform = `translateY(${scrollValue * 0.5}px)`; 
          }
          //Parallax for Tagline
          if (tagRef.current) {
            tagRef.current.style.transform = `translateY(${scrollValue * 0}px)`;
          }
          // Parallax for Left Mountain
          if (leftRef.current) {
            leftRef.current.style.transform = `translateX(-${scrollValue * 5}px)`; 
          }

          // Parallax for Right Mountain
          if (rightRef.current) {
            rightRef.current.style.transform = `translateX(${scrollValue * 5}px)`; 
          }

            // Parallax for Right Mountain
            if (rightRef.current) {
              rightRef.current.style.transform = `translateX(${scrollValue * 5}px)`; 
            }
  

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Main Content */}
      <div className="relative h-full">
        {/* Green Grid Lines Image */}
        <div
          ref={gridRef}
          className="absolute top-[-10%] sm:top-[-5%] md:top-[-2%] bottom-0 w-full z-20 pt-[20rem] sm:pt-[20rem] md:pt-[25rem]"
        >
          <Image
            src="/Hero/lines.png"
            alt="Green Grid Lines"
            width={1920}
            height={200}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="w-full flex justify-between px-4 md:px-10 lg:px-20 relative">

          
  {/* Left-Mountain */}
  <div
    ref={leftRef}
    className="absolute top-[18vh] left-0 w-[65%] z-30"
  >
    <Image
      src="/Hero/left.png"
      alt="Left Mountain"
      width={1920}
      height={200}
      className="w-full h-auto object-cover"
    />
  </div>

  {/* Right-Mountain */}
  <div
    ref={rightRef}
    className="absolute top-[14vh] right-[-100px] w-[70%] z-40"
  >
    <Image
      src="/Hero/right1.png"
      alt="Right Mountain"
      width={1920}
      height={200}
      className="w-full h-auto object-cover"
    />
  </div>
</div>


        {/* Logo */}
        <div className="flex justify-center items-center pt-40 relative z-10">
          <Image
            ref={logoRef}
            src="/Hero/Main logo.png"
            alt="Main Logo"
            width={500}
            height={200}
            className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[45%] transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-[#26d241]"
          />
        </div>

        {/* Tagline */}
        <div className="flex justify-center items-center  relative z-10">
          <Image
            ref={tagRef}
            src="/Hero/tagline.png"
            alt="Main Logo"
            width={500}
            height={200}
            className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[45%] transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-[#26d241]"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
