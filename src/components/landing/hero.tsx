"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "../../styles/font.css";
import Particles from "@/components/magicui/particles";
import RetroGrid from "@/components/magicui/retro-grid";

import left from "../../../public/assets/landing/hero/mountain-left.png";
import right from "../../../public/assets/landing/hero/mountain-right.png";
import logo from "../../../public/assets/landing/hero/logo.png";
import tagline from "../../../public/assets/landing/hero/tagline.png";

const Hero = () => {
  const logoRef = useRef<HTMLImageElement>(null);
  const tagRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollValue = window.scrollY;

          // Parallax for Logo
          if (logoRef.current) {
            logoRef.current.style.transform = `translateY(${
              scrollValue * 0.5
            }px)`;
            const newOpacity = 1 - scrollValue * 0.003;
            logoRef.current.style.opacity = (
              newOpacity >= 0 ? newOpacity : 0
            ).toString();
          }
          //Parallax for Tagline
          if (tagRef.current) {
            tagRef.current.style.transform = `translateY(${
              scrollValue * 0.5
            }px)`;
            const newOpacity = 1 - scrollValue * 0.005;
            tagRef.current.style.opacity = (
              newOpacity >= 0 ? newOpacity : 0
            ).toString();
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
    <div className="relative h-screen overflow-hidden bg-black border-b border-b-green-500">
      {/* Main Content */}
      <Particles
        className="absolute inset-0"
        quantity={200}
        size={1.0}
        ease={80}
        color="#ffffff"
        refresh
      />
      <div className="relative mt-10 flex flex-col h-[500px] w-full justify-center">
        <div className="flex justify-center items-center relative z-10">
          <Particles
            className="absolute inset-0"
            quantity={100}
            size={1.0}
            ease={80}
            color="#ffffff"
            refresh
          />
          <div className="flex flex-col justify-center items-center w-full">
            <div>
              <Image
                ref={logoRef}
                src={logo}
                alt="Main Logo"
                width={700}
                height={300}
                quality={100}
                layout="fixed"
                className=""
              />
            </div>
            <div className="flex items-center h-full">
              <Image
                ref={tagRef}
                src={tagline}
                alt="Main Logo"
                width={600}
                quality={100}
                layout="fixed"
                height={150}
                className="flex justify-center items-start"
              />
            </div>
          </div>
        </div>

        <Image
          src={left}
          alt="left-mountain"
          height={400}
          width={400}
          quality={100}
          layout="fixed"
          className="z-10 absolute left-0 bottom-24"
        />
        <Image
          src={right}
          alt="right-mountain"
          height={400}
          width={400}
          quality={100}
          layout="fixed"
          className="z-10 absolute right-0 bottom-24"
        />
        <RetroGrid className="mt-96" />
      </div>
      {/* </div> */}
    </div>
  );
};

export default Hero;
