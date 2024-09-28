"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context";
import { EventType } from "@/types";
import { eventDetails } from "@/data/events";
import { ThreeDCardDemo } from "@/components/events/details";
import api from "@/api/api";

const EventDetailsPage = () => {
  const params = useParams();
  const id = params.id;

  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [combos, setCombos] = useState<any[]>([]);

  const { events } = useAuth();

  useEffect(() => {
    const combo = events.filter((item) => item.id === Number(id));
    if (combo[0]) {
      setCombos(combo[0].offers);
    }
  }, [events]);

  const fetchEventDetails = async () => {
    try {
      const response = await api.get(`/events/${id}`);
      setEvent(response.data.events);
    } catch (err: any) {
      console.log("Error: ", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventDetails();
  }, [id]);

  return (
    <div className="md:relative">
      <div className="md:absolute md:top-20 md:mx-auto w-full overflow-hidden">
        {loading ? (
          <div className="">Loading...</div>
        ) : (
          <ThreeDCardDemo event={event} combos={combos} />
        )}
      </div>
    </div>
  );
};

export default EventDetailsPage;
