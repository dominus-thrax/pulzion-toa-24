"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('animated-circles');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-black">
      {/* Heading */}
      <h1
        className="text-4xl md:text-5xl lg:text-6xl text-[#cfc36d] text-center mb-8 pt-32 glowing-text"
        style={{ fontFamily: 'PulzionFont1' }}
      >
        ABOUT US
      </h1>

      {/* Content Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start w-full">

        {/* Left Robot Section */}
        <div className="h-96 w-32 animate-bounce">
          <Image
            src="/About Us/r1.svg"
            alt="robots"
            width={500}
            height={200}
            className="left-0 h-full"
          />
        </div>

        {/* Left Section: Circles */}
        <div id="animated-circles" className={`relative w-full lg:w-1/2 flex justify-center lg:justify-start transition-all duration-1000 ease-in-out transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
          <div className="grid grid-cols-2 gap-0 place-items-center">
            {/* Top Left Circle */}
            <div className="relative w-[225px] h-[225px]">
              <Image
                src="/About Us/circle.svg"
                alt="10 Events"
                fill
                style={{ objectFit: 'contain' }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                <span className="text-lg font-semibold">10 EVENTS</span>
              </div>
            </div>

            {/* Top Right Circle */}
            <div className="relative w-[225px] h-[225px]">
              <Image
                src="/About Us/circle.svg"
                alt="300 Volunteers"
                fill
                style={{ objectFit: 'contain' }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                <span className="text-lg font-semibold">300 VOLUNTEERS</span>
              </div>
            </div>

            {/* Bottom Center Circle */}
            <div className="relative col-span-2 w-[225px] h-[225px]">
              <Image
                src="/About Us/circle.svg"
                alt="8000 Footfall"
                fill
                style={{ objectFit: 'contain' }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                <span className="text-lg font-semibold">8000 FOOTFALL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Text */}
        <div className="w-full lg:w-1/2 text-[#88B788] text-justify text-lg md:text-xl lg:text-2xl max-w-lg space-y-6 mt-8 lg:mt-0">
          <p className="text-lg" style={{ fontFamily: 'Wallpoet' }}>
            Pulzion is the annual flagship event organized by PICT ACM Student Chapter (PASC). Pulzion consists of multiple events in technical as well as non-technical domains including coding competitions, mock placement interviews, business management-based events, design and development-based contests, and quizzing events.
          </p>
          <p className="text-lg" style={{ fontFamily: 'Wallpoet' }}>
            It is one of the most anticipated events taking place at PICT. This year, Pulzion is going global to encourage students of varied backgrounds to participate and compete. With sincerity, dedication, and high aspirations, our chapter hopes to add value to our college and the community.
          </p>
        </div>

        {/* Right Robot Section */}
        <div className="h-96 w-32 animate-bounce">
          <Image
            src="/About Us/r2.svg"
            alt="robots"
            width={500}
            height={200}
            className="left-0 h-full"
          />
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 ">
        {/* Card 1 */}
        <div className="relative max-w-sm w-full opacity-80 animate-pulse ">
          <div className="relative">
            <Image
              src="/About US/card.svg"
              alt="Card Background Image"
              width={350}
              height={200}
              style={{ objectFit: 'contain' }}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white p-6">
              <h2 style={{ fontFamily: 'PulzionFont1' }}>PASC</h2>
              <p className="text-xs" style={{ fontFamily: 'Wallpoet' }}>
                PICT ACM Student's Chapter (PASC) is the most active ACM chapter in India. #UnitedWeStand At PASC, we all work together, as a team. We take utmost efforts for the success of each and every member of PASC.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative max-w-sm w-full opacity-80 animate-pulse">
          <div className="relative">
            <Image
              src="/About US/card.svg"
              alt="Card Background Image"
              width={350}
              height={200}
              style={{ objectFit: 'contain' }}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white p-6">
              <h2 style={{ fontFamily: 'PulzionFont1' }}>ACM-W</h2>
              <p className="text-xs" style={{ fontFamily: 'Wallpoet' }}>
                With the objective to support and celebrate the full engagement of women in all aspects of computing field, we conducted an event ACM Pune ‘Celebration of Women in Computing’ (APCWIC-2018) in association with ACM-W India and ACM Pune Professional Chapter.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative max-w-sm w-full opacity-80 animate-pulse">
          <div className="relative">
            <Image
              src="/About US/card.svg"
              alt="Card Background Image"
              width={350}
              height={200}
              style={{ objectFit: 'contain' }}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white p-6">
              <h2 style={{ fontFamily: 'PulzionFont1' }}>ACM</h2>
              <p className="text-xs" style={{ fontFamily: 'Wallpoet' }}>
                The Association for Computing Machinery (ACM) is the world’s largest educational and scientific society uniting professionals, educators and researchers in the field of computer science to inspire dialogue, share resources and address the challenges in the domain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
