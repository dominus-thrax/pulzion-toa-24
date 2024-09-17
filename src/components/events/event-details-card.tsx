"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import localFont from "next/font/local";
import api from "@/api/api";
import { toast } from "sonner";

const font = localFont({
  src: "../../../public/font/BDSupperRegular.ttf",
});

interface EventDetailsCardProps {
  id: number;
  title: string | string[];
  mode: string;
  price: string;
  rules: string;
  rounds: string;
  teamDistribution: string;
  eventLeads: { name: string; phone: string }[];
}

const EventDetailsCard: React.FC<EventDetailsCardProps> = ({
  id,
  title,
  mode,
  price,
  rules,
  rounds,
  teamDistribution,
  eventLeads,
}) => {
  const handleAddToCart = async (id: number) => {
    try {
      const response = await api.post("/cart", {
        event_id: id,
      });
      const data = response.data;
      console.log(data);
      toast.success("Event successfully added to cart");
    } catch (err: any) {
      console.log("Error:", err);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/assets/events/cardbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "1050px",
        height: "510px",
        top: "35px",
        left: "120px",
        position: "absolute",
        boxShadow: "0px 0px 20px rgba(0,0,0,0.5)",
        borderRadius: "48.51px",
        padding: "20px",
        opacity: 1,
      }}
    >
      {/* Top-left image container */}
      <div
        style={{
          position: "absolute",
          top: "50.5px",
          left: "130.5px",
          width: "170.89px",
          height: "170.7px",
          backgroundImage: "url('/assets/events/OrangeEllipse.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <img
          src="/assets/events/BigCam.png"
          alt="BigCam"
          style={{
            width: "137.17px",
            height: "138.63px",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Event title */}
      <h1
        className="font-WallpoetFont text-green-500 text-center"
        style={{
          fontSize:
            title.length > 15 ? "45px" : title.length > 10 ? "70px" : "60px",
          fontWeight: "400",
          lineHeight: "88px",
          textAlign: "center",
          textTransform: "uppercase",
          color: "#27D342",
          width: "100%",
          marginTop:
            title.length > 15
              ? "-200px"
              : title.length > 10
              ? "-200px"
              : "-200px",
          marginLeft:
            title.length > 15 ? "230px" : title.length > 10 ? "250px" : "45px",
          marginBottom:
            title.length > 15
              ? "-320px"
              : title.length > 10
              ? "-270px"
              : "-10px",
          overflowWrap: "break-word",
        }}
      >
        {title}
      </h1>

      {/* Mode */}
      <h3
        className={`${font.className} text-center font-WallpoetFont text-yellow-400 mt-2`}
        style={{
          fontSize: "25px",
          fontWeight: "400",
          lineHeight: "25.05px",
          color: "#CF9C41",
          marginLeft:
            title.length > 15
              ? "-120px"
              : title.length > 10
              ? "-130px"
              : "-10px",
          marginTop:
            title.length > 15 ? "300px" : title.length > 10 ? "250px" : "-10px",
        }}
      >
        Mode: {mode}
      </h3>

      {/* Price - Fixed */}
      <div className={`${font.className} mt-6`}>
        <h4
          className="text-green-500 text-xl font-WallpoetFont font-semibold"
          style={{
            color: "#27D342",
            fontSize: "20px",
            position: "absolute",
            top: "230px",
            left:
              title.length > 15
                ? "140px"
                : title.length > 10
                ? "130px"
                : "170px",
            transform: "translateX(-50%)",
            textAlign: "center",
          }}
        >
          Price:
        </h4>
        <p
          className="text-yellow-400 text-lg font-WallpoetFont"
          style={{
            color: "#CFC36D",
            fontSize: "20px",
            position: "absolute",
            top: "233px",
            left:
              title.length > 15
                ? "180px"
                : title.length > 10
                ? "170px"
                : "210px",
          }}
        >
          {price}
        </p>
      </div>

      {/* Scrollable Content - Rules, Rounds, Team Distribution */}
      <div
        className={`${font.className} pt-4 pb-6`}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr", // Single column layout
          gap: "20px",
          justifyContent: "start",
          width: "60%",
          marginLeft: "400px", // Align scrollable content
          height: "350px", // Fixed height for scrollable area
          overflowY: "auto", // Enable vertical scrolling
          marginBottom: "-180px",
          scrollbarWidth: "thin",
          scrollbarColor: "#A9A9A9 transparent",
        }}
      >
        {/* Rules */}
        <div>
          <h4
            className="text-green-500 text-xl font-WallpoetFont font-semibold"
            style={{ color: "#27D342", marginBottom: "0.3px" }}
          >
            Rules:
          </h4>
          <p
            className="text-yellow-400 text-base px-6 font-WallpoetFont"
            style={{
              whiteSpace: "pre-line",
              color: "#CFC36D",
              overflowWrap: "break-word",
              textAlign: "left", // Left align the text content
              maxWidth: "500px",
              marginLeft: "-23px",
              margin: 0,
            }}
          >
            {rules}
          </p>
        </div>

        {/* Rounds */}
        <div>
          <h4
            className="text-green-500 text-xl font-WallpoetFont font-semibold"
            style={{ color: "#27D342", marginBottom: "0.3px" }}
          >
            Rounds:
          </h4>
          <p
            className="text-yellow-400 text-base font-WallpoetFont"
            style={{
              whiteSpace: "pre-line",
              color: "#CFC36D",
              overflowWrap: "break-word",
              textAlign: "left",
              maxWidth: "500px",
            }}
          >
            {rounds}
          </p>
        </div>

        {/* Team Distribution */}
        <div>
          <h4
            className="text-green-500 text-xl font-WallpoetFont font-semibold"
            style={{ color: "#27D342", marginBottom: "0.1px" }}
          >
            Team Distribution:
          </h4>
          <p
            className="text-yellow-400 text-base font-WallpoetFont"
            style={{
              whiteSpace: "pre-line",
              color: "#CFC36D",
              overflowWrap: "break-word",
              textAlign: "left",
              maxWidth: "500px",
            }}
          >
            {teamDistribution}
          </p>
        </div>
      </div>

      {/* Event Leads - Fixed */}
      <div
        className={`${font.className}`}
        style={{ position: "absolute", bottom: "20px", right: "20px" }}
      >
        <h4
          className="text-green-500 text-xl font-WallpoetFont font-semibold"
          style={{
            color: "#27D342",
            marginBottom: "10px",
            fontSize: "20px",
          }}
        >
          Event Leads:
        </h4>
        <div
          style={{
            marginTop: "-10px",
            marginRight: "705px",
            marginBottom: "150px",
          }}
        >
          {eventLeads.map((lead, index) => (
            <div
              key={index}
              className="text-yellow-400 text-base font-WallpoetFont mb-1"
            >
              <p style={{ color: "#CFC36D", marginBottom: "-5px" }}>
                {lead.name} - {lead.phone}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div
        className={`flex justify-center items-center ${font.className}`}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          top: "335px",
          transform: "translateX(-50%)",
        }}
      >
        <Button
          onClick={() => handleAddToCart(id)}
          className="text-xs font-WallpoetFont py-2 px-4 rounded mb-2"
          style={{
            backgroundColor: "#00910E",
            height: "40px",
            width: "264px",
            fontSize: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "600px",
          }}
        >
          Add to Cart
          <Image
            src="/assets/events/ShoppingCart.png"
            height={20}
            width={20}
            layout="fixed"
            quality={100}
            alt="Cart"
            style={{ marginLeft: "10px" }}
          />
        </Button>
      </div>
    </div>
  );
};

export default EventDetailsCard;
