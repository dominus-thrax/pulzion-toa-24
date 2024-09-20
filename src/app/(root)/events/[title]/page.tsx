"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context";
import { EventType } from "@/types";
import { eventDetails } from "@/data/events";
import { ThreeDCardDemo } from "@/components/events/details";

const EventDetailsPage = () => {
  const params = useParams();
  const title = Array.isArray(params.title) ? params.title[0] : params.title;

  const [event, setEvent] = useState<any>(null);

  useEffect(() => {
    if (title) {
      const formattedTitle = title.toLowerCase().replace(/ /g, "-");

      const eventDetail =
        eventDetails[formattedTitle as keyof typeof eventDetails];

      if (eventDetail) {
        setEvent(eventDetail);
      }
    }
  }, [title]);

  console.log("event[title]", event);

  return (
    <div className="md:relative">
      <div className="md:absolute md:top-20 md:mx-auto w-full overflow-hidden">
        <ThreeDCardDemo event={event} title={title} />
      </div>
    </div>
  );
};

export default EventDetailsPage;
