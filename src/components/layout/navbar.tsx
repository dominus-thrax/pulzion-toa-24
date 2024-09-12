"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../../../public/assets/landing/hero/logo.png";
import tagline from "../../../public/assets/landing/hero/tagline.png";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollValue = window.scrollY;
          if (logoRef.current) {
            if (scrollValue <= 600) {
              logoRef.current.style.scale = "0";
            } else {
              logoRef.current.style.scale = "1";
            }
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
    document.body.classList.toggle("nav-open-body", !navOpen); // Toggle blur effect on body
  };

  return (
    <nav className="pt-6 fixed top-0 left-0 w-full px-6 z-50 backdrop-blur-md transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center">
        <div
          className="transition-transform duration-300 flex flex-col justify-center items-center"
          ref={logoRef}
        >
          <Image src={logo} alt="Logo" width={200} height={200} className="" />
          <Image
            src={tagline}
            alt="tagline"
            width={150}
            height={150}
            className=""
          />
        </div>
        <div className="hidden md:flex text-white gap-8 items-center z-30">
          {["HOME", "ABOUT", "GLIMPSES", "SPONSORS", "EVENTS", "TEAM"].map(
            (item, index) => (
              <a
                key={index}
                className="font-diary hover:text-green-900 px-3 py-3 rounded-2xl text-xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            )
          )}
        </div>
        <div className="hidden md:flex mr-10">
          <button className="text-green-700 font-diary px-5 py-4 rounded-2xl text-xl transition-all duration-300 ease-in-out hover:text-white hover:border-white transform hover:-translate-y-0.5">
            LOGIN
          </button>
        </div>
        <div className="md:hidden flex items-center p-6">
          <button
            onClick={toggleNav}
            className="text-white text-3xl z-50 transition-transform duration-300 ease-in-out"
          >
            {navOpen ? (
              <AiOutlineClose className="transform rotate-180" />
            ) : (
              <AiOutlineMenu />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`${
          navOpen ? "flex" : "hidden"
        } flex-col md:hidden fixed inset-0 z-40 transition-opacity duration-300 ease-in-out`}
      >
        <div className="bg-black bg-opacity-90 flex flex-col items-center justify-center min-h-screen space-y-3 animate-fade-in-down">
          {["HOME", "ABOUT", "GLIMPSES", "SPONSORS", "EVENTS", "TEAM"].map(
            (item, index) => (
              <a
                key={index}
                className="text-lg font-diary text-white py-4 transform transition-transform duration-300 ease-in-out hover:scale-110"
                href={`#${item.toLowerCase()}`}
                onClick={toggleNav}
              >
                {item}
              </a>
            )
          )}
          <button
            className="text-green-700 font-diary px-5 py-4 rounded-2xl text-lg transition-all duration-300 ease-in-out hover:bg-green-700 hover:text-white mt-10 transform hover:scale-110"
            onClick={toggleNav}
          >
            LOGIN
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
