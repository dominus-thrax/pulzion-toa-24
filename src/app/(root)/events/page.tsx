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
  src: "../../../../public/font/BDSupperRegular.ttf",
});


const originText = localFont({
  src: "../../../../public/fonts/OriginTech personal use.ttf",
});

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
    <>
      <div className="grid grid-cols-1 md:grid-cols-6  gap-9  mt-24 md:mx-36">
        {events.length > 0 &&
          events.map((event, index) => (
            <div key={index} className={` ${font.className}`}>
              <CardSpotlightDemo event={event} />
            </div>
          ))}
      </div>
    </>
  );
};

export default EventsPage;
