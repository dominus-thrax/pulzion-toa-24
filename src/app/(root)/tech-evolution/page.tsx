"use client"
import React from 'react';
import TechCard from '@/components/TechEvo/TechCard';
import localFont from "next/font/local";

const font = localFont({
  src: "../../../../public/font/SairaStencilOne-Regular.ttf",
});

const TechEvo = () => {
  return (
    <div className={`${font.className}`}>
      {/* Hero Section */}
      <TechCard />
    </div>
  );
}

export default TechEvo;