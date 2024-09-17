"use client";

import React from "react";
import localFont from "next/font/local";
import { useAuth } from "@/context";
import { CardSpotlightDemo } from "@/components/events/event-card";
import SliderCard from "@/components/events/sliderCards";
import MobileSliderCard from "@/components/events/mobileSliderCard";
const sixtyfour = localFont({
  src: "../../../../public/fonts/Sixtyfour-Regular-VariableFont_BLED,SCAN.ttf",
});

const font = localFont({
  src: "../../../../public/font/BDSupperRegular.ttf",
});

const originText = localFont({
  src: "../../../../public/fonts/OriginTech personal use.ttf",
});

const EventsPage: React.FC = () => {
  const { events }: { events: any } = useAuth();

  const technicalEvents = events.filter(
    (event: any) => event.type === "Technical"
  );
  const nonTechnicalEvents = events.filter(
    (event: any) => event.type === "Non Technical"
  );

  return (
    <>
      <div className="mt-2 mb-4 md:mb-10">
        <h1
          className={` ${originText.className} text-[#cfc36d] text-2xl md:text-6xl text-center mt-20`}
        >
          EVENTS
        </h1>
      </div>

      <div className={` ${font.className} hidden md:block mt-6 `}>
        <SliderCard events={events} />
      </div>
      <div className={`${font.className} mt-6 md:hidden mx-24`}>
        <MobileSliderCard events={events} />
      </div>

      <div className="mt-24  mb-20">
        {/* Technical Events */}
        <div>
          <h2
            className={` ${originText.className} text-[#cfc36d] text-xl mb-3 md:text-4xl text-center`}
          >
            Technical
          </h2>
          <div className="flex flex-wrap gap-9 justify-center">
            {technicalEvents.length > 0 &&
              technicalEvents.map((event: any, index: number) => (
                <div key={index} className={` ${font.className}`}>
                  <CardSpotlightDemo event={event} />
                </div>
              ))}
          </div>
        </div>

        {/* Non-Technical Events */}
        <div className="mt-12">
          <h2
            className={` ${originText.className} text-[#cfc36d] text-xl mb-2 md:text-4xl text-center`}
          >
            Non-Technical
          </h2>
          <div className="flex flex-wrap gap-9 justify-center">
            {nonTechnicalEvents.length > 0 &&
              nonTechnicalEvents.map((event: any, index: number) => (
                <div key={index} className={` ${font.className}`}>
                  <CardSpotlightDemo event={event} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
