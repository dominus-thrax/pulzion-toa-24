"use client";

// ContactUs.tsx
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import React, { useState } from "react";
import localFont from "next/font/local";
import Particles from "@/components/magicui/particles";

import Link from "next/link";
import Image from "next/image";
import facebook from "../../../public/assets/landing/contact-us/facebook.png";
import insta from "../../../public/assets/landing/contact-us/instagram.png";
import linkedin from "../../../public/assets/landing/contact-us/linkedin.png";
import web from "../../../public/assets/landing/contact-us/web.png";
import twitter from "../../../public/assets/landing/contact-us/twitter.png";
import { Button } from "../ui/button";
import { toast, Toaster } from "sonner";

const font = localFont({
  src: "../../../public/font/BDSupperRegular.ttf",
});

const sixtyfour = localFont({
  src: "../../../public/font/OriginTech personal use.ttf",
});

const ContactUs: React.FC = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { name, email, message } = details;
    if (!name || !email || !message) {
      toast.error("Fill all fields!");
      return;
    }

    toast.success("Message sent!");
    return;
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center p-4 md:p-8 relative bg-black">
      {/* Contact Us Title */}
      <Toaster
        position="top-right"
        richColors
        closeButton
        duration={2000}
        pauseWhenPageIsHidden
        visibleToasts={1}
      />
      <h1
        className={`${sixtyfour.className} text-center mb-8 md:mb-12 text-[#cfc36d] text-4xl sm:text-5xl md:text-6xl`}
      >
        Contact Us
      </h1>

      {/* Contact Information and Message Section */}
      <div
        className={`${font.className} flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-10 mb-8 z-30`}
      >
        {/* Contact Information */}
        <div className="bg-[#1f3b2f] opacity-70 p-4 md:p-6 rounded-xl w-full lg:w-1/3 h-auto lg:h-96 flex flex-col justify-between">
          <h3 className="text-xl sm:text-2xl md:text-3xl mb-4 text-center text-white">
            Contact Information
          </h3>

          {/* Phone Numbers */}
          <div className="flex items-start mb-4 gap-4">
            <FaPhoneAlt className="h-6 w-6 text-green-500" />
            <div>
              <p className="text-xs sm:text-sm md:text-base text-white">
                Harsha Pareek: (+91) 93226 78365
              </p>
              <p className="text-xs sm:text-sm md:text-base text-white">
                Aashlesh Wawge: (+91) 94203 24148
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start mb-4 gap-4">
            <MdEmail className="h-6 w-6 text-green-500" />
            <p className="text-xs sm:text-sm md:text-base text-white">
              acm.pict@gmail.com
            </p>
          </div>

          {/* Address */}
          <div className="flex items-start mb-4 gap-4">
            <FaLocationDot className="h-10 w-10 text-green-500" />

            <p className="text-xs sm:text-sm md:text-base text-white">
              Pune Institute of Computer Technology, Behind Bharati Vidyapeeth,
              Dhankawadi, Pune, Maharashtra-411043
            </p>
          </div>
        </div>

        {/* Send a Message Form */}
        <div className="bg-[#1f3b2f] opacity-70 p-4 md:p-6 w-full lg:w-1/3 h-auto lg:h-96 flex flex-col justify-between rounded-xl">
          <h3 className="text-xl sm:text-2xl md:text-3xl mb-4 text-center text-white">
            Send a Message
          </h3>
          <form onSubmit={handleClick}>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-4 text-xs sm:text-sm md:text-base text-white rounded-md focus:outline-none bg-transparent border-b border-gray-300"
              onChange={(e) =>
                setDetails((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 text-xs sm:text-sm md:text-base text-white rounded-md focus:outline-none bg-transparent border-b border-gray-300"
              onChange={(e) =>
                setDetails((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <textarea
              placeholder="Message"
              className="w-full p-2 mb-4 text-xs sm:text-sm md:text-base text-white rounded-md focus:outline-none bg-transparent border-b border-gray-300"
              rows={3}
              onChange={(e) =>
                setDetails((prev) => ({ ...prev, message: e.target.value }))
              }
            ></textarea>
            <Button
              type="submit"
              className="w-full bg-transparent border border-white text-white p-2 rounded-xl text-xs sm:text-sm md:text-base transition"
            >
              SUBMIT
            </Button>
          </form>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="text-center mb-8">
        <h3
          className={`${sixtyfour.className} text-[#CFC36D] text-xl sm:text-2xl md:text-3xl font-semibold mb-4`}
        >
          FOLLOW US
        </h3>
        <div className="flex justify-center space-x-4 sm:space-x-6">
          {/* Social Media Links */}
          <Link
            className="z-10 hover:cursor-pointer"
            href="https://www.facebook.com/PICTOfficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={facebook}
              alt="Facebook"
              height={50}
              width={50}
              layout="fixed"
              quality={100}
            />
          </Link>
          <Link
            className="z-10 hover:cursor-pointer"
            href="https://www.instagram.com/pict.pune/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={insta}
              alt="instagram"
              height={50}
              width={50}
              layout="fixed"
              quality={100}
            />
          </Link>
          <Link
            className="z-10 hover:cursor-pointer"
            href="https://pict.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={web}
              alt="website"
              height={50}
              width={50}
              layout="fixed"
              quality={100}
            />
          </Link>
          <Link
            className="z-10 hover:cursor-pointer"
            href="https://www.linkedin.com/school/pune-institute-of-computer-technology/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={linkedin}
              alt="linkedin"
              height={50}
              width={50}
              layout="fixed"
              quality={100}
            />
          </Link>
          <Link
            className="z-10 hover:cursor-pointer"
            href="https://x.com/punepict?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={twitter}
              alt="twitter"
              height={50}
              width={50}
              layout="fixed"
              quality={100}
            />
          </Link>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="flex justify-center z-50">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.576077647539!2d73.8482586737186!3d18.45754717109928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1723792742131!5m2!1sen!2sin"
          width="100%"
          height="400"
          className="rounded-lg sm:w-3/4 lg:w-2/3"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
