"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "../../styles/font.css";
import logo from "../../../public/assets/landing/hero/logo.png";
import localFont from "next/font/local";
import MatrixRain from "./MatrixRain";
import { useAuth } from "@/context";

const sixtyfour = localFont({
  src: "../../../public/font/OriginTech personal use.ttf",
});

const font = localFont({
  src: "../../../public/font/BDSupperRegular.ttf",
});

const Hero = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  const { authState: user } = useAuth();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      const videoElement = videoRef.current;

      const handleVideoEnd = () => {
        setVideoEnded(true);
        setTimeout(() => setContentVisible(true), 0); // Adjust delay as needed
      };

      videoElement.addEventListener("ended", handleVideoEnd);

      return () => {
        videoElement.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, []);

  return (
    <div className="relative overflow-hidden bg-black w-full h-screen">
      {/* Video Player - Visible until video ends */}
      {!videoEnded && (
        <>
          <video
            ref={videoRef}
            className="w-full h-screen object-cover md:object-contain sm:object-fill scale-110  transition-transform duration-500 ease-in-out"
            autoPlay
            muted
            playsInline
            preload="none"
          >
            <source src="/assets/landing/hero/animation.mp4" type="video/mp4" />
          </video>
        </>
      )}

      {/* Main Content Wrapper */}
      <div
        className={`relative flex flex-col pt-[3rem] md:pt-[9rem] w-full justify-center transition-transform duration-500 ease-in-out ${
          contentVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        {/* <div className="w-full"> */}
        <MatrixRain></MatrixRain>
        {/* </div> */}

        <div className="flex flex-col justify-center items-center relative z-10 space-y-[5rem] p-10 md:p-0">
          {/* Logo and Tagline */}
          <div className="flex flex-col justify-center items-center w-full">
            <Image
              src={logo}
              alt="Main Logo"
              width={700}
              height={300}
              quality={100}
              layout="fixed"
              className="mt-28"
            />
          </div>
          <div
            className={`${sixtyfour.className} pb-10 md:pb-[3rem] text-[#CFC36D] space-y-4 text-center text-xl md:text-3xl`}
          >
            <div>The annual techfest of PICT ACM Student Chapter</div>
            <div className="">3rd, 4th & 5th October</div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        {user.token ? (
          <a
            href="/events"
            className={`${font.className} z-10 hover:cursor-pointer text-black bg-[#ECAA43] px-4 py-2 rounded-2xl mx-auto block text-center absolute`}
          >
            Explore Events
          </a>
        ) : (
          <a
            href="/register"
            className={`${font.className} z-10 hover:cursor-pointer text-black bg-[#ECAA43] px-4 py-2 rounded-2xl mx-auto block text-center absolute`}
          >
            Participate Now
          </a>
        )}
      </div>
    </div>
  );
};

export default Hero;
