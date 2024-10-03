"use client";
import React from "react";
import localFont from "next/font/local";

const originText = localFont({
  src: "../../../../public/fonts/OriginTech personal use.ttf",
});

const font = localFont({
  src: "../../../../public/font/BDSupperRegular.ttf",
});

// Define the sponsor type
interface Sponsor {
  imgSrc: string;
  alt: string;
  title: string;
}

// Array of sponsors data
const sponsors: Sponsor[] = [
  { imgSrc: "/assets/sponsers/imperial.png", alt: "Imperial Overseas Education", title: "Education Partner" },
  { imgSrc: "/assets/sponsers/workhat.png", alt: "WorqHat", title: "Development Partner" },
  { imgSrc: "/assets/sponsers/plutoai.png", alt: "PlutoAI", title: "Productivity Partner" },
  { imgSrc: "/assets/sponsers/campus.png", alt: "Campus Times Pune", title: "Online Media Partner" },
  { imgSrc: "/assets/sponsers/parle.jpg", alt: "Parle Agros", title: "Official Hydration Partner" },
  { imgSrc: "/assets/sponsers/certificate.png", alt: "GiveMyCertificate", title: "Certificate Partner" },
  { imgSrc: "/assets/sponsers/burglars.jpg", alt: "Burglars", title: "Food Partner" },
  { imgSrc: "/assets/sponsers/goodluck-cafe.jpg", alt: "Goodluck", title: "Food Partner" },
  { imgSrc: "/assets/sponsers/marus.png", alt: "Maaru's Bakers", title: "Food Partner" },
  { imgSrc: "/assets/sponsers/legendary-burger.jpg", alt: "Legendary Burger", title: "Food Partner" },
  { imgSrc: "/assets/sponsers/brew.png", alt: "Brew Culture", title: "Food Partner" },
  { imgSrc: "/assets/sponsers/nagpals.png", alt: "Nagpal's Chole Bhature", title: "Food Partner" },
];

const Sponsers = () => {
  return (
    <>
      <div
        className={`${originText.className} text-[#CFC36D] text-3xl mt-12 overflow-y-hidden`}
      >
        <h1 className="text-center font-bold mb-4 mt-10 md:mt-5 text-xl md:text-4xl">
          Our Sponsors
        </h1>
      </div>

      {/* Sponsor Grid with BorderBeam */}
      <div className="relative mb-20">
        <div className="grid grid-cols-1 gap-6 md:gap-20 md:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center items-center mx-6 md:mx-14 h-auto space-y-6 md:space-y-0 relative z-10 ">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full border-[0.3px] border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.6)] pb-5 rounded-xl"
            >
              {/* Responsive image container */}
              <div className="relative w-32 h-32 md:w-60 md:h-60 p-4 md:p-6">
                <img
                  src={sponsor.imgSrc}
                  alt={sponsor.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Sponsor title with responsive margin */}
              <h3 className={`${font.className} text-center mt-2 md:mt-4 text-base md:text-lg font-semibold text-[#CFC36D]`}>
                {sponsor.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sponsers;
