"use client";
import React from "react";
import TechCard from "@/components/TechEvo/TechCard";
import localFont from "next/font/local";
import Particles from "@/components/magicui/particles";

const font = localFont({
  src: "../../../../public/font/SairaStencilOne-Regular.ttf",
});

const TechEvo = () => {
  return (
    <div className={`min-h-screen ${font.className}`}>
      <Particles
        className="fixed inset-0 z-0 pointer-events-none"
        quantity={200}
        size={1}
        ease={80}
        color="#ffffff"
        refresh
      />
      {/* Hero Section */}
      <TechCard />
    </div>
  );
};

export default TechEvo;
