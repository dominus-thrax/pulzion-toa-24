"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import EventDetailsCard from "@/components/events/event-details-card";
import { useAuth } from "@/context";
import { EventType } from "@/types";
import { eventDetails } from "@/data/events";


const EventDetailsPage = () => {
  const params = useParams();
  const title = params.title;

  console.log(title);

  const { events } = useAuth();
  const [event, setEvent] = useState<EventType>({
    id: 0,
    price: 0,
    name: "",
    tagline: "",
    description: "",
    rounds: "",
    rules: "",
    teams: "",
    notes: "",
    mode: "",
    type: "",
    logo: "",
  });

  useEffect(() => {
    if (events.length > 0) {
      const eventDetail = events.filter((event) => {
        const name = event.name.toLowerCase().replace(/ /g, "-");
        return name === event.name.toLowerCase();
      });

      if (eventDetail.length > 0) {
        setEvent(eventDetail[0]);
      }
    }
  }, [events]);

  // Fallback event details in case the title doesn't match any event
  const eventData = eventDetails[title as keyof typeof eventDetails] || {
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
        {/* Pass the extracted event data to the EventDetailsCard component */}
        <EventDetailsCard
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
