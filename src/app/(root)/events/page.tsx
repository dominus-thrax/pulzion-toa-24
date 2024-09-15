"use client";

import React, { useEffect, useState } from "react";
import localFont from "next/font/local";
import EventCard from "@/components/events/event-details";
import EventBanner from "@/components/events/event-banner";
import api from "@/api/api";
import { EventType } from "@/types";
import { useAuth } from "@/context";
import { CardSpotlightDemo } from "@/components/events/event-card";
import { CardSpotlight } from "@/components/ui/card-spotlight";
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
  const [filter, setFilter] = useState<string>("All");

  // Function to handle category change
  const handleFilterChange = (category: string) => {
    setFilter(category);
  };

  // Filter the events based on the selected filter
  const filteredEvents = events.filter((event: EventType) => {
    if (filter === "All") return true;
    return event.type === filter;
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1
        className={`${sixtyfour.className} text-xl md:text-5xl font-diary font-bold mb-8 text-white`}
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
        </CardSpotlight>
        <CardSpotlight onClick={() => handleFilterChange("Non Technical")}>
          <div className="cursor-pointer text-center z-20 relative px-6 text-xl text-white py-4 my-auto">
            Non-Technical
          </div>
        </CardSpotlight>
        <CardSpotlight onClick={() => handleFilterChange("All")}>
          <div className="cursor-pointer text-center z-20 relative px-10 text-xl text-white py-4 my-auto">
            All
          </div>
        </CardSpotlight>
      </div>
      <div className="flex justify-center items-center my-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:p-0 justify-items-center">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <CardSpotlightDemo key={index} event={event} />
              ))
            ) : (
              <p>No events available for this category.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
