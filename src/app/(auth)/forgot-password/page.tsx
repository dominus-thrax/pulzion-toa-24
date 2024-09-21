"use client";
import { useState } from "react";
import { NextPage } from "next";
import SendOTP from "@/components/forgot-reset/SendOTP";
import EnterOTPComponent from "@/components/forgot-reset/EnterOTP";
import Image from "next/image";
import phone from "../../../../public/assets/forgot-reset/image 16.png";
import ResetPassword from "../reset-password/page";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import { toast, Toaster } from "sonner";
import api from "@/api/api";
import { useRouter } from "next/navigation";

const font = localFont({
  src: "../../../../public/font/BDSupperRegular.ttf",
});

const heading = localFont({
  src: "../../../../public/font/OriginTech personal use.ttf",
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ForgotPassword: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Implement OTP verification logic here
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format");
      setLoading(false);
      return;
    }
    try {
      const response = await api.post("/user/otp", {
        email,
      });

      const data = response.data;
      if (data.msg.length > 0) {
        toast.success("OTP sent successfully!");
        router.push("/reset-password");
      }
    } catch (err: any) {
      setLoading(false);
      console.log("Error", err);
      toast.error(err.response.data.error);
    }
  };

  return (
    <div className="flex items-center m-y-[150px] justify-center min-h-screen bg-black bg-cover bg-center z-50">
      <Toaster
        position="top-right"
        richColors
        closeButton
        duration={2000}
        pauseWhenPageIsHidden
        visibleToasts={1}
      />
      <div
        className="z-50 border-[4px] translate-y-[-40px] border-[#1F6E56] rounded-[50px] flex flex-col py-[4rem] space-y-10
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
          <h1 className={`${heading.className} text-xl md:text-3xl text-white`}>
            Forgot Password
          </h1>
        </div>
        <div
          className={`flex flex-col justify-center items-center ${font.className}`}
        >
          <div className=" flex my-[20px] flex-col gap-[15px] justify-center items-center ">
            <form onSubmit={handleSendOTP} className="space-y-10">
              <div className="flex flex-col gap-[2px] ml-[100px] ">
                <label className="block mb-2 text-sm font-medium text-white dark:text-white ">
                  Your email
                </label>
                <div className="w-[450px] ">
                  <input
                    placeholder="Enter email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent border-2 rounded-xl border-[#1F6E56] text-[#FFF] transition-all duration-200 ease-in text-md focus:outline-none block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="my-[20px] mx-[200px]">
                <Button
                  type="submit"
                  disabled={loading}
                  className="rounded-full text-white bg-[#1F6E56] w-[150px] transition-all duration-100 ease-in  "
                  variant={"default"}
                >
                  {loading ? "Sending..." : "Send OTP"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
