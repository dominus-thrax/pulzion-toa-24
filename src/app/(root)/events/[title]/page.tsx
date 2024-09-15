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

  const { events } = useAuth();
  const [event, setEvent] = useState<EventType | null>(null);

  useEffect(() => {
    if (events.length > 0 && title) {
      const formattedTitle = title.toLowerCase().replace(/ /g, "-");
      const eventDetail = events.find((event) => {
        const eventName = event.name.toLowerCase().replace(/ /g, "-");
        return eventName === formattedTitle;
      });

      if (eventDetail) {
        setEvent(eventDetail);
      }
    }
  }, [events, title]);

  const eventData = event
    ? {
        id: event.id,
        mode: event.mode,
        price: event.price.toString(), // Ensure price is a string
        rules: event.rules,
        rounds: event.rounds,
        teamDistribution: event.teams,
        eventLeads: [], // Assuming eventLeads might be an empty array or you can handle it accordingly
      }
    : eventDetails[title as keyof typeof eventDetails] || {
        id: 0,
        mode: "N/A",
        price: "N/A",
        rules: "No details available.",
        rounds: "N/A",
        teamDistribution: "N/A",
        eventLeads: [],
      };

  return (
    <div className="md:relative">
      <div className="md:absolute md:top-20 md:left-20">
        <ThreeDCardDemo
          id={eventData.id}
          title={title}
          mode={eventData.mode}
          price={eventData.price}
          rules={eventData.rules}
          rounds={eventData.rounds}
          teamDistribution={eventData.teamDistribution}
          eventLeads={eventData.eventLeads}
        />
      </div>
    </div>
  );
};

export default EventDetailsPage;
