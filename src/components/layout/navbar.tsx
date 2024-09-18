"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../../../public/assets/landing/hero/logo.png";
import tagline from "../../../public/assets/landing/hero/tagline.png";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/index";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import api from "@/api/api";
import { toast } from "sonner";
import path from "path";

const font = localFont({
  src: "../../../public/font/BDSupperRegular.ttf",
});

const Navbar = () => {
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);
  const pathName = usePathname();
  const isMainPage = pathName === "/";

  const toggleNav = () => {
    setNavOpen(!navOpen);
    document.body.classList.toggle("nav-open-body", !navOpen);
  };

  const { authState: user } = useAuth();

  const PageLinks = [
    { label: "HOME", path: "/" },
    { label: "EVENTS", path: "/events" },
    { label: "TECH EVO", path: "/tech-evolution" },
    { label: "GAME EVO", path: "/game-evolution" },
    // { label: "DEVELOPERS", path: "/developers" },
    // { label: "TEAM", path: "/team" },
    {label:'GLIMPSES', path:'/glimpses'},
    {label:'SPONSORS', path:'/sponsors'}
  ];

  const handleLogout = async () => {
    try {
      const response = await api.post("/user/signout");
      console.log(response);
      if (response.data.success.length > 0) {
        toast.success("Logout successfull!");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.push("/");
        window.location.reload();
      }
    } catch (err: any) {
      console.log("Error: ", err);
    }
  };

  return (
    <nav className="pt-0 md:pt-6 fixed top-0 left-0 w-full md:px-6 z-30 backdrop-blur-md transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center">
        <div
          className="flex flex-col justify-center items-center pl-3"
        >
          <Image src={logo} alt="Logo" width={150} height={150} />
          <Image src={tagline} alt="tagline" width={120} height={120} />
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex text-[#CFC36D] gap-8 items-center z-30">
          {PageLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${font.className} hover:text-[#ADCC8B] px-3 py-3 text-xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex mr-10">
          {user.token ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <CgProfile className="text-[#CFC36D] h-10 w-10" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-transparent border border-[#CFC36D] rounded-xl text-[#fff]">
                <DropdownMenuItem>
                  <Link
                    href="/cart"
                    className={`${font.className} hover:text-[#CFC36D] text-center w-full py-3 text-sm transition-all duration-300 ease-in-out transform hover:-translate-y-0.5`}
                  >
                    My Cart
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/orders"
                    className={`${font.className} hover:text-[#CFC36D] text-center w-full py-3 text-sm transition-all duration-300 ease-in-out transform hover:-translate-y-0.5`}
                  >
                    My Orders
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-transparent">
                  <Button
                    onClick={handleLogout}
                    className={`bg-transparent hover:bg-transparent text-red-500 hover:text-red-500 w-full text-center ${font.className}`}
                  >
                    Logout
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              href={"/login"}
              className={`${font.className} text-[#ADCC8B] 
              hover:text-[#CFC36D] hover:border-[#CFC36D] border 
              p-2 px-4 rounded-2xl text-xl transition-all duration-300 
              ease-in-out transform hover:-translate-y-0.5`}
            >
              LOGIN
            </Link>
          )}
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
              className={`${font.className} text-white hover:text-green-900 px-3 py-3 text-sm transition-all duration-300 ease-in-out transform hover:-translate-y-0.5`}
            >
              {link.label}
            </Link>
          ))}
          {user.token ? (
            <div className="flex flex-col items-center">
              <Link
                href="/cart"
                className={`${font.className} text-white hover:text-green-900 px-3 py-3 text-sm transition-all duration-300 ease-in-out transform hover:-translate-y-0.5`}
              >
                My Cart
              </Link>
              <Link
                href="/orders"
                className={`${font.className} text-white hover:text-green-900 px-3 py-3 text-sm transition-all duration-300 ease-in-out transform hover:-translate-y-0.5`}
              >
                My Orders
              </Link>
              <Button
                onClick={handleLogout}
                className={`bg-transparent hover:bg-transparent text-red-500 hover:text-red-500 w-full text-center ${font.className}`}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Link
              href={"/login"}
              className={`${font.className} text-green-700 px-5 py-4 rounded-2xl text-xl transition-all duration-300 ease-in-out hover:text-white hover:border-white transform hover:-translate-y-0.5`}
            >
              LOGIN
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
