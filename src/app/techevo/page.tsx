"use client"
import React from 'react';
import Image from 'next/image';
// import TechCard from '@/components/TechEvo/TechCard';
import {tech} from '../../data/techData'
import TechCard from '@/components/TechEvo/TechCard';
// import t from '../../../public/assets/Tech-Evolution/'

const TechEvo = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <TechCard />
    </div>
  );
}

export default TechEvo;