import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { FaCartPlus, FaUsers, FaPhone } from "react-icons/fa";

interface ThreeDCardDemoProps {
  id: number;
  title: string | string[];
  mode: string;
  price: string;
  rules: string;
  rounds: string;
  teamDistribution: string;
  eventLeads: { name: string; phone: string }[];
}

export function ThreeDCardDemo({
  id,
  title,
  mode,
  price,
  rules,
  rounds,
  teamDistribution,
  eventLeads,
}: ThreeDCardDemoProps) {
  return (
    <div className="w-full px-4 md:px-24">
      <CardContainer className="inter-var w-full border-white/[0.5] border-2 rounded-md">
        <CardBody className="bg-transparent relative group dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] w-full h-auto rounded-xl p-2 overflow-hidden grid grid-cols-12">
          {/* Left Card */}
          <div className="col-span-4 flex flex-col justify-center items-center mx-auto text-current">
            <div className=" rounded-md">
              <img
                src="/assets/add-to-cart/Codex.png"
                alt=""
                className="bg-yellow-400"
              />
            </div>

            <p className="text-2xl font-bold text-white text-center">{title}</p>
            <div className="flex gap-2 text-white text-center">
              <p>{mode}</p>
              <p>|</p>
              <p>₹{price}</p>
            </div>
            <button className="bg-yellow-500 rounded-md text-black p-2 px-3">
              Add to Cart
            </button>
            <div className="text-white mt-4">
              {eventLeads &&
                eventLeads.map((lead, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 font-bold"
                  >
                    <span>{lead.name}</span>
                    <FaPhone />
                    <span>{lead.phone}</span>
                  </div>
                ))}
            </div>
            <div className="mt-2">
              <p className="text-white flex gap-2 text-sm">
                <FaUsers className=" my-auto" /> Team Distribution:{" "}
                {teamDistribution}
              </p>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="col-span-1 flex items-center justify-center">
            <div className="border-l-2 h-full border-white/[0.5]"></div>
          </div>

          {/* Right Card */}
          <div className="col-span-7 text-white ml-2">
            <p className="text-xl font-semibold mt-2">Rounds</p>
            <hr />
            <div>
              {rounds.split("\n").map((round, index) => (
                <p key={index} className="mb-2 text-sm">
                  {round}
                </p>
              ))}
            </div>
            <p className="text-xl font-semibold mt-2">Rules</p>
            <hr />
            <div>
              {rules.split("\n").map((rule, index) => (
                <p key={index} className="mb-2 text-sm">
                  {rule}
                </p>
              ))}
            </div>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
