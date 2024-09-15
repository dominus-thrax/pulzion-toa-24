"use client";

import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import EventCard from "@/components/events/event-details";
import EventBanner from "@/components/events/event-banner";
import api from "@/api/api";
import { EventType } from "@/types";
import { useAuth } from "@/context";
// import Particles from "@/components/magicui/particles";
//import Ellipse from '@/components/ui/Ellipse';

const sixtyfour = localFont({
  src: "../../../../public/fonts/Sixtyfour-Regular-VariableFont_BLED,SCAN.ttf",
});

const font = localFont({
  src: "../../../../public/font/SairaStencilOne-Regular.ttf",
});

const originText = localFont({src:"../../../../public/fonts/OriginTech personal use.ttf"})

const EventsPage: React.FC = () => {
  const { events, setEvents } = useAuth();

  console.log(events);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1
        className={`${originText.className} text-2xl md:text-6xl font-diary font-bold mb-8 text-white`}
        style={{
          marginTop: "50px",
          color: "#CFC36D",
        }}
      >
        EVENTS
      </h1>

      {/* Container for the banners and ellipses */}
      <div
        className="relative w-full flex justify-center items-center mb-16"
        style={{
          marginBottom: "25px",
          marginTop: "30px",
        }}
      >
        {/* Event Banners */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-4xl"
          style={{
            marginBottom: "0px",
            marginRight: "120px",
          }}
        >
          <div
            style={{ marginRight: "50px", position: "relative", left: "-20px" }}
          >
            {" "}
            {/* Space between the two banners */}
            <EventBanner title="TECHNICAL EVENTS" />
          </div>
          <div style={{ marginLeft: "25px" }}>
            {" "}
            {/* Space between the two banners */}
            <EventBanner title="NON-TECHNICAL EVENTS" />
          </div>
        </div>
      </div>

      {/* Event Cards */}
      <div
        className="flex max-w-5xl"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "50px",
        }}
      >
        {/* Column 1 with 6 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10rem] p-8 md:p-0">
          {events.length > 0 &&
            events.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col gap-10 ${font.className}`}
                style={{
                  marginTop: "0px",
                  marginRight: "100px",
                }}
              >
                <EventCard event={event} />
              </div>
            ))}
        </div>

        {/* Column 2 with 6 cards */}
        <div
          className="flex flex-col gap-10"
          style={{
            marginTop: "0px",
          }}
        >
          {/* <EventCard
            title="Hire Hustle"
            quote="Prove Your Edge in the Ultimate Hiring Test"
          />
          <EventCard
            title="Dextrous"
            quote="Shape your Future with a Thrilling Test of Skills!"
          />
          <EventCard
            title="Fandom"
            quote="Think you're a true Fan? Put it to the Test!"
          />
          <EventCard
            title="Insight"
            quote="Let your Words Sparkle and Shine!"
          />
          <EventCard
            title="Freeze the Second"
            quote="Snap the Magic and Shine with your Unique Shots!"
          />
          <EventCard
            title="Paper Presentation"
            quote="Showcase your Research and Ignite Curiosity!"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
