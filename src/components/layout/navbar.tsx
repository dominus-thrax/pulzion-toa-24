"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../../../public/assets/landing/hero/logo.png";
import tagline from "../../../public/assets/landing/hero/tagline.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const logoRef = useRef<HTMLImageElement>(null);

  const pathName = usePathname();

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
    document.body.classList.toggle("nav-open-body", !navOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="pt-6 fixed top-0 left-0 w-full px-6 z-50 backdrop-blur-md transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center">
        <div
          className="transition-transform duration-300 flex flex-col justify-center items-center"
          ref={logoRef}
        >
          <Image src={logo} alt="Logo" width={200} height={200} />
          <Image src={tagline} alt="tagline" width={150} height={150} />
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex text-white gap-8 items-center z-30">
          {["HOME", "ABOUT", "GLIMPSES", "SPONSORS", "EVENTS"].map(
            (item, index) => (
              <button
                key={index}
                className="font-Wallpoet hover:text-green-900 px-3 py-3 rounded-2xl text-sm transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </button>
            )
          )}
          {/* For 'TEAM', use anchor link to navigate */}
          <a
            href="/team"
            className="font-Wallpoet hover:text-green-900 px-3 py-3 rounded-2xl text-sm transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
          >
            TEAM
          </a>
        </div>
        <div className="hidden md:flex mr-10">
          <button className="text-green-700 font-Wallpoet px-5 py-4 rounded-2xl text-sm transition-all duration-300 ease-in-out hover:text-white hover:border-white transform hover:-translate-y-0.5">
            LOGIN
          </button>
        </div>
        {/* Mobile Menu Toggle */}
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
          {["HOME", "ABOUT", "GLIMPSES", "SPONSORS", "EVENTS"].map(
            (item, index) => (
              <button
                key={index}
                className="text-sm font-Wallpoet text-white py-4 transform transition-transform duration-300 ease-in-out hover:scale-110"
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  toggleNav();
                }}
              >
                {item}
              </button>
            )
          )}
          {/* For 'TEAM', use anchor link */}
          <a
            href="/team"
            className="text-lg font-Wallpoet text-white py-4 transform transition-transform duration-300 ease-in-out hover:scale-110"
            onClick={toggleNav}
          >
            TEAM
          </a>
          <button
            className="text-green-700 font-Wallpoet px-5 py-4 rounded-2xl text-lg transition-all duration-300 ease-in-out hover:bg-green-700 hover:text-white mt-10 transform hover:scale-110"
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
