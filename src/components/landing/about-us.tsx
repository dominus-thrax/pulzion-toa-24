"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import card from "../../../public/assets/landing/about-us/card.png";
import NumberTicker from "../magicui/number-ticker";
import Meteors from "../magicui/meteors";
import { CardSpotlight } from "../ui/card-spotlight";

const sixtyfour = localFont({
  src: "../../../public/font/OriginTech personal use.ttf",
});

const font = localFont({
  src: "../../../public/font/BDSupperRegular.ttf",
});

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("animated-circles");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pb-8 md:py-16 relative min-h-screen w-full flex flex-col justify-center items-center bg-black overflow-hidden">
      {/* Heading */}
      <h1
        className={`${sixtyfour.className} text-4xl md:text-5xl lg:text-6xl text-[#cfc36d] text-center mb-8 pt-32 glowing-text`}
      >
        ABOUT US
      </h1>

      {/* Content Section */}
      <div className="mx-auto flex flex-col lg:flex-row items-center lg:items-start w-full relative z-10">
        {/* Right Section: Text */}
        <div
          className={`${font.className} p-4 md:p-2 w-full text-center text-[#88B788] text-sm md:text-xl lg:text-2xl  space-y-6 mt-8 lg:mt-0 flex items-center justify-center md:px-14 lg:px-44 `}
        >
          <div className="flex flex-col items-center space-y-6 ">
            <div
              className={`${font.className} md:p-6 w-full text-center text-[#88B788] text-sm md:text-xl lg:text-2xl  space-y-6 mt-8 lg:mt-0 flex items-center justify-center`}
              style={{ height: "100%" }}
            >
              <div className="flex flex-col items-center lg:p-5 p-2 space-y-6 ring-1 ring-[#ADCC8B] rounded-2xl">
                <div className="w-full flex flex-col md:flex-row lg:flex-row mx-auto gap-10 items-center justify-center p-5">
                  <div className="w-44 text-5xl ring-1 ring-[#ADCC8B] rounded-2xl p-2 mb-4">
                    <NumberTicker value={13} className="text-[#CFC36D]" />
                    <p className="text-2xl">Events</p>
                  </div>
                  <div className="w-44 text-5xl ring-1 ring-[#ADCC8B] rounded-2xl p-2 mb-4">
                    <NumberTicker value={300} className="text-[#CFC36D]" />
                    <p className="text-2xl">Volunteers</p>
                  </div>
                  <div className="w-44 text-5xl ring-1 ring-[#ADCC8B] rounded-2xl p-2 mb-4">
                    <NumberTicker value={8000} className="text-[#CFC36D]" />
                    <p className="text-2xl">Footfall</p>
                  </div>
                </div>

                <p className="text-lg text-justify px-2">
                  Pulzion is the annual flagship event organized by PICT ACM
                  Student Chapter (PASC). Pulzion consists of multiple events in
                  technical as well as non-technical domains includes coding
                  competitions, mock placement interviews, business
                  management-based events, design and development-based
                  contests, and quizzing events.
                </p>
                <p className="text-lg text-justify">
                  It is one of the most anticipated events taking place at PICT.
                  This year, Pulzion is going global to encourage students of
                  varied backgrounds to participate and compete. With sincerity,
                  dedication, and high aspirations, our chapter hopes to add
                  value to our college and the community.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 z-20 p-4 lg:w-full lg:justify-center lg:mx-auto md:-mb-64">
        {/* Card 1 */}
        <div className="relative max-w-sm w-full mx-auto">
          <div className="relative">
            <div className="relative border-[#ADCC8B] rounded-xl flex h-56 w-full flex-col items-center justify-center bg-black overflow-hidden border bg-background md:shadow-xl">
              <Meteors number={30} />
              <div
                className={`${font.className} absolute inset-0 flex flex-col justify-center items-center z-10 text-white p-6`}
              >
                <h2 className="text-3xl font-semibold">PASC</h2>
                <p className="text-sm text-center">
                  PICT ACM Student&apos;s Chapter (PASC) is the most active ACM
                  chapter in India. #UnitedWeStand At PASC, we all work
                  together, as a team. We take utmost efforts for the success of
                  each and every member of PASC.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative max-w-sm w-full mx-auto">
          <div className="relative">
            <div className="relative border-[#ADCC8B] rounded-xl flex h-56 w-full flex-col items-center justify-center bg-black overflow-hidden border bg-background md:shadow-xl">
              <Meteors number={30} />
              <div
                className={`${font.className} absolute inset-0 flex flex-col justify-center items-center z-10 text-white p-6`}
              >
                <h2 className="text-3xl font-semibold">ACM-W</h2>
                <p className="text-sm text-center">
                  With the objective to support and celebrate the full
                  engagement of women in all aspects of computing field, we
                  conducted an event ACM Pune &apos;Celebration of Women in
                  Computing&apos; (APCWIC-2018) in association with ACM-W India
                  and ACM Pune Professional Chapter.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative max-w-sm w-full mx-auto">
          <div className="relative">
            <div className="relative border-[#ADCC8B] rounded-xl flex h-56 w-full flex-col items-center justify-center bg-black overflow-hidden border bg-background md:shadow-xl">
              <Meteors number={30} />
              <div
                className={`${font.className} absolute inset-0 flex flex-col justify-center items-center z-10 text-white p-6`}
              >
                <h2 className="text-3xl font-semibold">ACM</h2>
                <p className="text-sm text-center">
                  The Association for Computing Machinery (ACM) is the
                  world&apos;s largest educational and scientific society
                  uniting professionals, educators and researchers in the field
                  of computer science to inspire dialogue, share resources and
                  address the challenges in the domain.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image
          src={card}
          alt="Card Background Image"
          width={350}
          height={200}
          style={{ objectFit: "contain" }}
          className="opacity-0"
        />
      </div>
    </div>
  );
};

export default About;