"use client";
import Sponsors from "@/components/landing/sponsers";
import { color } from "framer-motion";
import React from "react";
const Sponsers = () => {
    return (
        <div className="text-white text-3xl mt-12">
          <Sponsors />
          
  <h1 className="text-center font-bold mb-4 mt-10">
    We are open for sponsorships!
  </h1>
  <h2 className="text-center font-semibold mb-6">Contact Us:</h2>
  <div className="text-center space-y-5">
    <h3>
      Manasi Waghe:
      <a className="underline hover:text-yellow-400" href="tel:+919511997999">+91 95119 97999</a>
    </h3>
    <h3>
      Anish Khachane:
      <a className="underline hover:text-yellow-400" href="tel:+919028256928">+91 90282 56928</a>
    </h3>
  </div>
</div>
 
       
  );
}

export default Sponsers;