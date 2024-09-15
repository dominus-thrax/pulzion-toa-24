"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "../../styles/font.css";
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
    <div className="relative overflow-hidden bg-black">
      {/* Main Content */}
      <div className="relative mt-10 flex flex-col h-[500px] w-full justify-center">
        <div className="flex justify-center items-center relative z-10">
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
      </div>
      {/* </div> */}
    </div>
  );
};

export default Hero;
