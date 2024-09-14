"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import axios from "axios";
import { toast } from "sonner";
import phone from "../../../../public/assets/auth/phone.png";
import profile from "../../../../public/assets/auth/profile.png";
import lock from "../../../../public/assets/auth/lock.png";

type ResetPassword = {
  email: string;
  password: string;
  otp: string;
};

const ResetPassword = () => {
  const [user, setUser] = useState<ResetPassword>({
    email: "",
    password: "",
    otp: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(user);
    try {
      const response = await axios.post(
        'https://pulzion22-ems-backend-evj4.onrender.com/user/forgot',
        user
      );
      toast.success("Password reset successfully!");
      console.log(response)
      // You might want to redirect or clear the form here
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black bg-cover bg-center">
      <div className="p-8 rounded-3xl z-20 shadow-lg bg-opacity-65 bg-gradient-to-b from-registercardcolor1 to-registercardcolor2 border-loginbordercolor border-4 flex flex-col items-center">
        <div className="flex text-3xl md:text-5xl items-center">
          <Image
            src={phone}
            alt="Gameboy Icon"
            height={30}
            width={30}
            className="mr-4"
          />
          <h1 className="font-vt323 text-white text-center">RESET PASSWORD</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-10 mt-10 w-full z-10"
        >
          <div className='flex flex-col gap-[2px] '>
            <label className="block mb-2 text-3xl font-vt323 text-white dark:text-white ">Enter OTP</label>
            <div className='w-[350px] mx-auto '>
              <input
                type="text"
                value={user.otp}
                onChange={(e) => setUser({ ...user, otp: e.target.value })}
                aria-describedby="helper-text-explanation"
                className="bg-transparent border-b-[2px] border-[#FFFFFF] transition-all duration-200 ease-in  text-[#00910E] text-md focus:outline-none   focus:border-[#00910E] block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="example@gmail.com"
              className="w-full p-2 bg-opacity-[0.92] bg-inputfildcolor rounded-[39px] pl-[2.5rem] text-sm text-black border-none"
            />
            <Image
              src={profile}
              height={40}
              width={40}
              className="absolute left-0 top-1/2 transform -translate-y-1/2"
              alt="Profile Icon"
            />
          </div>
          <div className="relative w-full">
            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter new password"
              className="w-full p-2 bg-opacity-[0.92] bg-inputfildcolor rounded-[39px] pl-[2.5rem] text-sm text-black border-none"
            />
            <Image
              src={lock}
              height={40}
              width={40}
              className="absolute left-0 top-1/2 transform -translate-y-1/2"
              alt="Lock Icon"
            />
          </div>
          <Button
            className="mt-3 p-4 w-full text-lg text-loginsignuplinkcolor font-bold border border-white text-white bg-submitbtncolor rounded-full hover:cursor-pointer"
            type="submit"
          >
            Reset Password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
