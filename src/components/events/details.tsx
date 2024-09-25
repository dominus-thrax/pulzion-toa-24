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
import { MdCurrencyRupee } from "react-icons/md";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Image from "next/image";
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
  timeline: string | null;
}

interface ThreeDCardDemoProps {
  event: EventData;
  title: string;
}
const font = localFont({
  src: "../../../public/font/BDSupperRegular.ttf",
});
export function ThreeDCardDemo({ event, title }: ThreeDCardDemoProps) {
  const [combos, setCombos] = useState([]);
  const [eventData, setEventData] = useState<EventData>({
    id: 0,
    mode: "",
    price: "",
    rules: "No details available.",
    rounds: "",
    teamDistribution: "",
    eventLeads: [],
    timeline: "",
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
        timeline: event.timeline || "",
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

  const handleRegister = async () => {
    try {
      const response = await api.post("/user_events", {
        event_id: eventData.id,
      });

      toast.success("Event Regsitered!");
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.response?.data?.msg;
      toast.error(errorMessage);
    }
  };

  const handleAddCombo = async (combo: any) => {
    try {
      const response = await api.post(`/cart/combo/${combo.id}`);

      console.log(response);

      toast.success("Combo successfully added to cart");
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message;
      toast.error(errorMessage);
    }
  };

  const fetchCombos = async () => {
    try {
      const response = await api.get("/events");

      console.log("get all combo res -> ", response);

      const data = response.data.events;
      const comboEvents = data.forEach((event: any) => {
        if (event.name.toLowerCase().replace(/ /g, "-") === title) {
          setCombos(event.offers);
        }
      });
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.response?.data?.msg;
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    fetchCombos();
  }, []);

  console.log("object -> ", combos);

  return (
    <div className="w-full flex justify-center items-center md:px-24 mb-7 mt-16 px-3  ">
      <Toaster
        position="top-right"
        richColors
        closeButton
        duration={2000}
        pauseWhenPageIsHidden
        visibleToasts={1}
      />
      <div
        className={`${font.className} w-full md:border-white/[0.2] rounded-xl border-[0.4px] border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.6)]`}
      >
        <div className="bg-transparent  w-full relative rounded-xl p-4 md:grid grid-cols-12">
          <div className="col-span-4 md:ml-2 flex flex-col justify-start items-center mx-auto w-full  text-white">
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
            {title === "codelicious" ? (
              <Button
                className="bg-[#E8AF49] rounded-xl hover:text-black hover:bg-yellow-600 my-2"
                onClick={handleRegister}
              >
                Register
              </Button>
            ) : (
              <Button
                className="bg-[#E8AF49] rounded-xl hover:text-black hover:bg-yellow-600 my-2"
                onClick={addToCart}
              >
                Add to Cart
              </Button>
            )}

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

            {eventData?.timeline && eventData?.timeline.length > 0 && (
              <div className="mt-2 text-white w-full ">
                <hr className="  border-white/[0.2] my-2 mt-4" />
                <p className={`${font.className}text-white flex gap-2 text-sm`}>
                  Timeline :
                </p>
                <div className="text-white mt-2">
                  {eventData.timeline.split("\n").map((item, index) => (
                    <p key={index} className="mb-2 text-xs">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {eventData.id === 6 && (
              <div className=" w-full">
                <hr className="  border-white/[0.2] my-2 mt-4 " />
                <div className=" w-full ">
                  <div className="flex gap-1 items-center">
                    <p
                      className={`${font.className} text-sm font-medium text-white
              `}
                    >
                      Problem Statements:
                    </p>
                    <a
                      href="https://drive.google.com/file/d/17-Dik95hKYFmPLq_c4k3vmIalf730m3O/view"
                      className="text-blue-500 hover:underline text-sm"
                    >
                      Click here to view
                    </a>
                  </div>
                  <div className="flex gap-2 items-center">
                    <p
                      className={`${font.className} text-sm font-medium text-white
              `}
                    >
                      PPT Template:
                    </p>
                    <a
                      href="https://docs.google.com/presentation/d/1QFPxKNzQJ2wadGIoqBpN_2fEKvz_BC6ewyBrxS9MY8k/edit#slide=id.p1"
                      className="text-blue-500 hover:underline text-sm"
                    >
                      Click here to view
                    </a>
                  </div>
                </div>
              </div>
            )}
            {eventData.id === 12 && (
              <div className=" w-full">
                <hr className="  border-white/[0.2] my-2 mt-4 " />
                <div className=" w-full ">
                  <div className="flex gap-1 items-center">
                    <p
                      className={`${font.className} text-sm font-medium text-white
              `}
                    >
                      Themes:
                    </p>
                    <a
                      href="https://drive.google.com/file/d/15RX1rIMiQUCiqmHLaMxS7niPei1sdNBc/view?usp=sharing"
                      className="text-blue-500 hover:underline text-sm"
                    >
                      Click here to view
                    </a>
                  </div>
                </div>
              </div>
            )}
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

            <div className="">
              <p className="text-xl font-semibold my-4 mb-1">Events Combos</p>
              <hr className=" text-white/[0.2]" />
              <div
                className={`${font.className} w-full flex flex-col lg:flex-row gap-10 justify-between items-start`}
              >
                {combos?.length > 0 ? (
                  combos?.map((combo: any, index) => (
                    <div
                      key={index}
                      className="w-full py-4 space-y-4 border-white/[0.2] border rounded-xl p-2 mt-4 flex flex-col justify-between items-center"
                    >
                      <div className="text-center text-xl text-[#CFC]">
                        {combo.combo_name}
                      </div>
                      <div className="grid grid-cols-2 gap-10">
                        {combo.array_of_evname.map(
                          (eve: any, index: number) => (
                            <div key={index} className="">
                              <div className="flex flex-col justify-center items-center text-xs">
                                <Image
                                  src={eve.logo}
                                  alt="combo_image"
                                  height={50}
                                  width={50}
                                  className="pb-2"
                                />
                                {eve.name}
                              </div>
                            </div>
                          )
                        )}
                      </div>

                      <div className="flex flex-col justify-center items-center">
                        <Button
                          className="bg-[#E8AF49] rounded-xl hover:text-black hover:bg-yellow-600 my-2"
                          onClick={() => handleAddCombo(combo)}
                        >
                          Add Combo to Cart
                        </Button>
                        <div className="flex justify-center items-center gap-1">
                          <div className="text-2xl flex justify-center items-center">
                            <MdCurrencyRupee size={30} />{" "}
                            {combo.discounted_price}
                          </div>
                          <div className="text-xs flex justify-center line-through text-gray-500 items-center">
                            <MdCurrencyRupee size={15} />
                            {combo.total_price}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-[#FFF] text-sm">
                    No combos available for the event
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
