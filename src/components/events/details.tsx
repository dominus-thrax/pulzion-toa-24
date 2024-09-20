"use client";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCartPlus, FaUsers } from "react-icons/fa";
import { BackgroundGradient } from "../ui/background-gradient";
import { BorderBeam } from "@/components/magicui/border-beam";
import { toast, Toaster } from "sonner";
import api from "@/api/api";
import { FaPhone } from "react-icons/fa6";
import { Button } from "../ui/button";
import localFont from "next/font/local";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
interface EventLead {
  name: string;
  phone: string;
}

interface EventData {
  id: number;
  mode: string;
  price: string;
  rules: string;
  rounds: string;
  teamDistribution: string;
  eventLeads: EventLead[];
}

interface ThreeDCardDemoProps {
  event: EventData;
  title: string;
}
const font = localFont({
  src: "../../../public/font/BDSupperRegular.ttf",
});
export function ThreeDCardDemo({ event, title }: ThreeDCardDemoProps) {
  const [eventData, setEventData] = useState<EventData>({
    id: 0,
    mode: "",
    price: "",
    rules: "No details available.",
    rounds: "",
    teamDistribution: "",
    eventLeads: [],
  });

  useEffect(() => {
    if (event) {
      setEventData({
        id: event.id,
        mode: event.mode || "",
        price: event.price || "",
        rules: event.rules || "No details available.",
        rounds: event.rounds || "",
        teamDistribution: event.teamDistribution || "",
        eventLeads: event.eventLeads || [],
      });
    }
  }, [event]);

  const addToCart = async () => {
    try {
      const response = await api.post("/cart", {
        event_id: eventData.id,
      });

      toast.success("Event Added to Cart");
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message;
      toast.error(errorMessage);
    }
  };

  return (
    <div className="w-full flex justify-center items-center md:px-24 mb-7 mt-16 px-3">
      <Toaster
        position="top-right"
        richColors
        closeButton
        duration={2000}
        pauseWhenPageIsHidden
        visibleToasts={1}
      />
      <div
        className={`${font.className} w-full border-white/[0.2] border-2 rounded-xl max-w-6xl`}
      >
        <div className="bg-transparent  w-full relative rounded-xl p-4 md:grid grid-cols-12">
          <div className="col-span-4 md:ml-2 flex flex-col justify-between items-center mx-auto w-full ">
            <div className="rounded-md">
              <img
                src={
                  title === "fandom-tmkoc" ||
                  title === "fandom-cricket" ||
                  title === "fandom-football" ||
                  title === "fandom-sitcom" ||
                  title === "fandom-anime"
                    ? `/assets/EventDetail/fandom.png`
                    : `/assets/EventDetail/${title}.png`
                }
                alt=""
                className=" w-20 md:w-36"
              />
            </div>
            <div className=" w-full  text-center">
              <p
                className={`${font.className} text-xl md:text-3xl font-bold mt-2  text-white text-center  capitalize`}
              >
                {title}
              </p>
              <div className={`${font.className} flex items-center mt-4`}>
                <div className="flex-1 text-center">
                  <p className="text-white text-lg">{eventData.mode}</p>
                  <p className="text-slate-300 text-xs">Location</p>
                </div>

                <div className="h-16 border-l-2 border-white/[0.2] mx-4"></div>

                <div className="flex-1 text-white text-center">
                  <p className="text-white text-lg">{eventData.price}</p>
                  <p className="text-slate-300 text-xs">Price</p>
                </div>
              </div>
            </div>
            <Button
              className="bg-[#E8AF49] rounded-xl hover:text-black hover:bg-yellow-600 my-2"
              onClick={addToCart}
            >
              Add to Cart
            </Button>

            {/* Event Leads */}
            <div className="text-white flex-col justify-center items-center flex gap-3 md:gap-6 mt-4 mb-1 ">
              {eventData.eventLeads.length > 0 &&
                eventData.eventLeads.map((lead, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center text-xs md:text-sm gap-2 "
                  >
                    <span className={`${font.className}`}>
                      {lead.name}
                      {":"}
                    </span>
                    <FaPhone />
                    <span>{lead.phone}</span>
                  </div>
                ))}
            </div>

            {/* Team Distribution */}
            <div className="mt-2 text-white w-full ">
              <hr className="  border-white/[0.2] my-2 mt-4" />
              <p className={`${font.className}text-white flex gap-2 text-sm`}>
                <FaUsers className="my-auto text-xl font-bold " /> Team
                Distribution:{" "}
              </p>
              <div className="text-white mt-2">
                {eventData.teamDistribution.split("\n").map((team, index) => (
                  <p key={index} className="mb-2 text-xs">
                    {team}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-1 flex items-center justify-center ">
            <div className="border-l-2 h-full border-white/[0.2]"></div>
          </div>

          {/* Rounds and Rules */}
          <div className="col-span-7 text-white md:ml-2">
            <p className="text-xl font-semibold mt-2 mb-1">Rounds</p>
            <hr className=" text-white/[0.2]" />
            <div>
              {eventData.rounds.length > 0 &&
                eventData.rounds.split("\n").map((round, index) => (
                  <p key={index} className="mb-2 mt-2 text-xs md:text-[13px]">
                    {round}
                  </p>
                ))}
            </div>
            <p className="text-xl font-semibold mt-4 mb-1">Rules</p>
            <hr className=" text-white/[0.2]" />
            <div className=" mt-1">
              {eventData.rules.length > 0 &&
                eventData.rules.split("\n").map((rule, index) => (
                  <p key={index} className="mb-2 text-xs md:text-[13px]">
                    {rule}
                  </p>
                ))}
            </div>
            {/* <div className="mt-4">
              <p className="text-white flex gap-2 ">
                <FaUsers className="my-auto text-xl font-bold" />
                <p className=" text-xl text-white">Team Distribution: </p>
              </p>
              <hr />
              <p className=" text-xs text-white">
                {eventData.teamDistribution}
              </p>
            </div> */}
          </div>
          <BorderBeam size={600} duration={12} delay={5} />
        </div>
      </div>
    </div>
  );
}
