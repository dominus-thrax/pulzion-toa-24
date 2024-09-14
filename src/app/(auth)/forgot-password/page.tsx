"use client";
import { useState } from "react";
import { NextPage } from "next";
import SendOTP from "@/components/forgot-reset/SendOTP";
import EnterOTPComponent from "@/components/forgot-reset/EnterOTP";
import Image from "next/image";
import phone from "../../../../public/assets/forgot-reset/image 16.png";
import ResetPassword from "../reset-password/page";

const ForgotPassword: NextPage = () => {
  const [otp, setOtp] = useState<string>("");
  const [step, setStep] = useState<"send" | "verify">("send");
  const handleSubmitOTP = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement OTP verification logic here
  };

  const handleSendOTP = () => {
    setStep("verify");
  };

  return (
    <div
      className="flex items-center m-y-[150px] justify-center min-h-screen bg-black bg-cover bg-center"
      // style={{
      //   backgroundImage:
      //     "url('/assets/forgot-reset/vecteezy_retro-sci-fi-futuristic-background-1980s-and-1990s-style-3d_7795861-ai1.png')",
      // }}
    >
      <div
        className=" border-[4px] translate-y-[-40px] border-[#1F6E56] rounded-[50px] flex flex-col py-[4rem] space-y-10
      bg-gradient-to-b from-[#00910f50] via-[#88b7884f] to-[#cfc46d65] justify-between items-center h-full"
      >
        <div className="flex justify-center items-center w-full gap-4">
          <Image
            src={phone}
            alt="Gameboy Icon"
            height={30}
            width={30}
            className=""
          />
          <h1 className="text-xl md:text-3xl text-white ">Forgot Password</h1>
        </div>
        <div className="flex flex-col justify-center items-center  ">
          {step === "send" ? (
            <SendOTP onSendOTP={handleSendOTP} />
          ) : (
            <ResetPassword />
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
