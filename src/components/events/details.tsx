"use client";

import Image from "next/image";
import React from "react";
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
    <div className="w-full px-4 md:px-64">
      <CardContainer className="inter-var w-full border-white/[0.5] border-2 rounded-md">
        <CardBody className="bg-transparent relative group dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] w-full h-auto rounded-xl p-6 overflow-hidden">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-white group-hover:scale-105 transition-transform duration-300"
          >
            {title}
          </CardItem>
          <CardItem translateZ="60" className="w-full mt-4 flex justify-center">
            <Image
              src="/photo.png"
              alt=""
              width={200}
              height={200}
              className="object-cover rounded-xl"
            />
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-white text-sm max-w-sm mt-2 font-bold"
          >
            Mode: {mode} - Price: ${price}
          </CardItem>
          <CardItem as="p" translateZ="60" className="text-white text-sm mt-2">
            {rules.split("\n")}
          </CardItem>
          <CardItem as="p" translateZ="60" className="text-white text-sm mt-2">
            {rounds}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-white text-sm mt-2 font-bold flex items-center gap-2"
          >
            <FaUsers /> Team Distribution: {teamDistribution}
          </CardItem>

          {/* Event Leads Section */}
          <CardItem
            as="div"
            translateZ="60"
            className="text-white text-sm mt-4 flex flex-col gap-2"
          >
            {eventLeads.map((lead, index) => (
              <div key={index} className="flex items-center gap-2 font-bold">
                <span>{lead.name}</span>
                <FaPhone />
                <span>{lead.phone}</span>
              </div>
            ))}
          </CardItem>

          <div className="mt-20">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-yellow-500 text-white text-xs font-bold flex items-center gap-2"
            >
              <FaCartPlus /> Add to Cart
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
