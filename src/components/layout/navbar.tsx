"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../../../public/assets/landing/hero/logo.png";
import tagline from "../../../public/assets/landing/hero/tagline.png";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const sixtyfour = localFont({
  src: "../../../public/font/Sixtyfour-Regular-VariableFont_BLED,SCAN.ttf",
});

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const logoRef = useRef<HTMLImageElement>(null);
  const pathName = usePathname();
  const isMainPage = pathName === "/";

  useEffect(() => {
    if(!isMainPage) return;
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

  const [isLogIn,setLoginIn] = useState(true);

  const PageLinks = [
    { label: "HOME", path: "/" },
    { label: "EVENTS", path: "/events" },
    { label: "GAME EVO", path: "/game-evolution" },
    { label: "TECH EVO", path: "/tech-evolution" },
    {label:"DEVELOPERS",path:"/developers"},
    {label:"TEAM",path:"/team"},
  ];

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
  {PageLinks.map((link, index) => (
    <Link
      key={index}
      href={link.path}
      className={`${sixtyfour.className} hover:text-green-900 px-3 py-3 text-sm transition-all duration-300 ease-in-out transform hover:-translate-y-0.5`}
    >
      {link.label}
    </Link>
  ))}
</div>
        <div className="hidden md:flex mr-10">
          { isLogIn ? (
            <DropdownMenu>
            <DropdownMenuTrigger>
            <div>
              <Image 
              src="/assets/teams/images.jpeg"
              alt="profile"
              width={70}
              height={70}
              className="rounded-full"
              />
            </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
              <Link href="/cart" className={`${sixtyfour.className} hover:text-green-900 px-3 py-3 text-sm transition-all duration-300 ease-in-out transform hover:-translate-y-0.5`}>
                  My Cart
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
              <Link href="/orders" className={`${sixtyfour.className} hover:text-green-900 px-3 py-3 text-sm transition-all duration-300 ease-in-out transform hover:-translate-y-0.5`}>
                  My Orders
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
            
          ) : (<Link href={'/login'}className={`${sixtyfour.className} text-green-700 px-5 py-4 rounded-2xl text-sm transition-all duration-300 ease-in-out hover:text-white hover:border-white transform hover:-translate-y-0.5`}>
            LOGIN
          </Link>)
          }
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
        {PageLinks.map((link, index) => (
    <Link
      key={index}
      href={link.path}
      className={`${sixtyfour.className} text-white hover:text-green-900 px-3 py-3 text-sm transition-all duration-300 ease-in-out transform hover:-translate-y-0.5`}
    >
      {link.label}
    </Link>
  ))}
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
