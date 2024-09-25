"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../../../public/assets/landing/hero/logo.png";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/index";
import { toast } from "sonner";
import api from "@/api/api";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../ui/dialog";
import { BorderBeam } from "../magicui/border-beam";

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
    { label: "GLIMPSES", path: "/glimpses" },
    { label: "SPONSORS", path: "/sponsors" },
  ];

  const handleLogout = async () => {
    try {
      const response = await api.post("/user/signout");
      if (response.data.success.length > 0) {
        toast.success("Logout successful!");
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
        <div className="flex flex-col justify-center items-center pl-3">
          <Image
            src={logo}
            alt="Logo"
            width={150}
            height={150}
            className="hover:cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="hidden md:flex text-[#CFC36D] gap-8 items-center z-30">
          {PageLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${font.className} ${
                pathName === link.path && "text-[#ADCC8B]"
              } hover:text-[#ADCC8B] px-3 py-3 text-xl transition-all duration-300 ease-in-out transform hover:-translate-y-0.5`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex mr-10">
          {user.token ? (
            <Dialog>
              <DialogTrigger asChild>
                <CgProfile className="text-[#CFC36D] h-10 w-10 hover:cursor-pointer" />
              </DialogTrigger>
              <DialogContent
                className={`${font.className} w-full max-w-[600px] bg-transparent p-0  border border-transparent rounded-xl`}
              >
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                </DialogHeader>
                <div className="bg-black py-10 w-full border-white/[0.2] border-2 rounded-xl flex flex-col justify-center items-center space-y-4">
                  <div className=" border-b border-b-white/[0.2] pb-10 max-w-sm w-full grid grid-cols-2 gap-4 text-[#CFC36D]">
                    <div className="space-y-2">
                      <div className="">Name: </div>
                      <div className="">Email: </div>
                      <div className="">Referral code: </div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-semibold">
                        {user.user.first_name} {user.user.last_name}
                      </div>
                      <div className="font-semibold">{user.user.email}</div>
                      <div className="font-semibold">
                        {user.user.referral_code}
                      </div>
                    </div>
                  </div>
                  <DialogClose asChild>
                    <Link
                      href={"/cart"}
                      className="text-[#CFC36D] font-semibold text-xl"
                    >
                      My Cart
                    </Link>
                  </DialogClose>
                  <DialogClose asChild>
                    <Link
                      href={"/orders"}
                      className="text-[#CFC36D] font-semibold text-xl"
                    >
                      My Orders
                    </Link>
                  </DialogClose>
                  <DialogClose asChild>
                    <div
                      onClick={handleLogout}
                      className="text-red-500 font-semibold text-xl hover:cursor-pointer"
                    >
                      Logout
                    </div>
                  </DialogClose>
                  <BorderBeam size={400} duration={5} delay={5} />
                </div>
              </DialogContent>
            </Dialog>
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
              className={`${font.className} text-[#CFC36D] hover:border-[#ADCC8B] px-3 py-3 text-sm transition-all duration-300 ease-in-out transform hover:-translate-y-0.5`}
              onClick={toggleNav}
            >
              {link.label}
            </Link>
          ))}

          {user.token ? (
            <Dialog>
              <DialogTrigger asChild>
                <CgProfile className="text-[#CFC36D] h-10 w-10 hover:cursor-pointer" />
              </DialogTrigger>
              <DialogContent
                className={`${font.className} w-full max-w-[600px] p-0 bg-transparent `}
              >
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                </DialogHeader>
                <div className="bg-black py-10 w-full border-white/[0.2] border-2 rounded-xl flex flex-col justify-center items-center space-y-4">
                  <div className=" border-b border-b-white/[0.2] pb-10 max-w-sm w-full text-sm md:text-lg grid grid-cols-2 gap-4 text-[#CFC36D]">
                    <div className="space-y-2">
                      <div className="">Name: </div>
                      <div className="">Email: </div>
                      <div className="">Referral code: </div>
                    </div>
                    <div className="space-y-2">
                      <div className="font-semibold">
                        {user.user.first_name} {user.user.last_name}
                      </div>
                      <div className="font-semibold">{user.user.email}</div>
                      <div className="font-semibold">
                        {user.user.referral_code}
                      </div>
                    </div>
                  </div>
                  <DialogClose asChild>
                    <Link
                      href={"/cart"}
                      className="text-[#CFC36D] font-semibold text-lg md:text-xl"
                    >
                      My Cart
                    </Link>
                  </DialogClose>
                  <DialogClose asChild>
                    <Link
                      href={"/orders"}
                      className="text-[#CFC36D] font-semibold text-lg md:text-xl"
                    >
                      My Orders
                    </Link>
                  </DialogClose>
                  <DialogClose asChild>
                    <div
                      onClick={handleLogout}
                      className="text-red-500 font-semibold text-lg md:text-xl hover:cursor-pointer"
                    >
                      Logout
                    </div>
                  </DialogClose>
                  <BorderBeam
                    size={400}
                    duration={5}
                    delay={5}
                    className=" hidden md:block"
                  />
                </div>
              </DialogContent>
            </Dialog>
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
      </div>
    </nav>
  );
};

export default Navbar;
