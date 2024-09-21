"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import axios from "axios";
import { toast, Toaster } from "sonner";
import phone from "../../../../public/assets/auth/phone.png";
import api, { baseURL } from "@/api/api";
import localFont from "next/font/local";
import { useRouter } from "next/navigation";

const font = localFont({
  src: "../../../../public/font/BDSupperRegular.ttf",
});

const heading = localFont({
  src: "../../../../public/font/OriginTech personal use.ttf",
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ResetPassword = {
  email: string;
  password: string;
  otp: string;
};

const ResetPassword = () => {
  const router = useRouter();
  const [user, setUser] = useState<ResetPassword>({
    email: "",
    password: "",
    otp: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    
    const { otp, email, password } = user;
    if(!otp || !email || !password) {
      toast.error("Fill all fields!");
      return;
    }
    console.log(otp, email, password);

    if (!emailRegex.test(email)) {
      toast.error("Invalid email format");
      return;
    }

    try {
      const response = await api.post(`/user/forget`, {
        email,
        otp,
        password,
      });
      toast.success("Password reset successfully!");
      console.log(response);
      // router.push("/login");
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black bg-cover bg-center">
      <Toaster
        position="top-right"
        richColors
        closeButton
        duration={2000}
        pauseWhenPageIsHidden
        visibleToasts={1}
      />
      <div className="z-50 p-6 border-[4px] translate-y-[-40px] border-[#1F6E56] rounded-[50px] flex flex-col py-[4rem] space-y-10
      bg-gradient-to-b from-[#00910f50] via-[#88b7884f] to-[#cfc46d65] justify-center items-center h-full">
        <div className="flex text-3xl md:text-5xl justify-center w-full items-center">
          <Image
            src={phone}
            alt="Gameboy Icon"
            height={30}
            width={30}
            className="mr-4"
          />
          <h1 className={`${heading.className} text-white text-center `}>
            RESET PASSWORD
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className={` ${font.className} flex flex-col items-center justify-center w-full space-y-10 mt-10 z-10`}
        >
          <div className="relative w-full">
            <input
              type="text"
              value={user.otp}
              onChange={(e) => setUser({ ...user, otp: e.target.value })}
              placeholder="Enter OTP"
              className="bg-transparent border-2 rounded-xl border-[#1F6E56] text-[#FFF] transition-all duration-200 ease-in text-md focus:outline-none block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="relative w-full">
            <input
              type="text"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="example@gmail.com"
              className="bg-transparent border-2 rounded-xl border-[#1F6E56] text-[#FFF] transition-all duration-200 ease-in text-md focus:outline-none block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="relative w-full">
            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter new password"
              className="bg-transparent border-2 rounded-xl border-[#1F6E56] text-[#FFF] transition-all duration-200 ease-in text-md focus:outline-none block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <Button
            type="submit"
            className="rounded-full text-white bg-[#1F6E56] w-[150px] transition-all duration-100 ease-in  "
            variant={"default"}
          >
            Reset Password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
