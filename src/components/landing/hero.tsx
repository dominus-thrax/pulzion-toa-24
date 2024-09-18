"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "../../styles/font.css";
import logo from "../../../public/assets/landing/hero/logo.png";
import tagline from "../../../public/assets/landing/hero/tagline.png";
import localFont from "next/font/local";
import MatrixRain from "./MatrixRain";
import { RxSpeakerLoud } from "react-icons/rx";
import { Button } from "../ui/button";

const sixtyfour = localFont({
  src: "../../../public/font/OriginTech personal use.ttf",
});

const font = localFont({
  src: "../../../public/font/BDSupperRegular.ttf",
});

const Hero = () => {
  const [videoEnded, setVideoEnded] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (videoRef.current && audioRef.current) {
      const videoElement = videoRef.current;
      const audioElement = audioRef.current;

      const handleVideoEnd = () => {
        setVideoEnded(true);
        setTimeout(() => setContentVisible(true), 0); // Adjust delay as needed
      };

      const syncAudioWithVideo = () => {
        audioElement.currentTime = videoElement.currentTime;
      };

      videoElement.addEventListener("ended", handleVideoEnd);
      videoElement.addEventListener("timeupdate", syncAudioWithVideo);

      return () => {
        videoElement.removeEventListener("ended", handleVideoEnd);
        videoElement.removeEventListener("timeupdate", syncAudioWithVideo);
      };
    }
  }, []);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setAudioPlaying(true);
    }
  };

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
          <audio
            ref={audioRef}
            autoPlay
            preload="auto"
            src="/assets/landing/hero/animation.mp3" // Provide your audio file
          />
        </>
      )}

      {/* Main Content Wrapper */}
      <div
        className={`relative flex flex-col pt-[3rem] md:pt-[9rem] w-full justify-center transition-transform duration-500 ease-in-out ${
          contentVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        <MatrixRain></MatrixRain>
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
            <Image
              src={tagline}
              alt="Tagline"
              width={600}
              height={150}
              quality={100}
              layout="fixed"
              className="flex justify-center items-start"
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

      {/* Play Audio Button */}
      <div className="absolute bottom-10 w-full flex justify-end pr-4 md:pr-12">
        {!audioPlaying && (
          <button
            onClick={handlePlayAudio}
            className="bg-[#ECAA43] text-black p-4 rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <RxSpeakerLoud />
          </button>
        )}
      </div>
      <div className="w-full flex justify-center">
        <a
          href="/register"
          className={`${font.className} z-10 hover:cursor-pointer text-black bg-[#ECAA43] px-4 py-2 rounded-2xl mx-auto block text-center absolute`}
        >
          Participate Now
        </a>
      </div>
    </div>
  );
};

export default Hero;
