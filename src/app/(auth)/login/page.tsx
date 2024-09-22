"use client";
import { useState } from "react";
import { NextPage } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import isAuth from "@/context/user/isAuth";

// images
import phone from "../../../../public/assets/auth/phone.png";
import profile from "../../../../public/assets/auth/profile.png";
import lock from "../../../../public/assets/auth/lock.png";
import axios from "axios";
import { baseURL } from "@/api/api";
import { toast, Toaster } from "sonner";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/index";
import { LoginForm } from "../../../types";
import localFont from "next/font/local";

const font = localFont({
  src: "../../../../public/font/BDSupperRegular.ttf",
});

const heading = localFont({
  src: "../../../../public/font/OriginTech personal use.ttf",
});

const LoginPage: NextPage = () => {
  const router = useRouter();
  const { setUserAuthInfo } = useAuth();
  const [user, setUser] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [shownPassword, setShownPassword] = useState(false);

  const userPassword = user.password;

  const toggleShownPassword = () => {
    setShownPassword((prev) => !prev);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    
    const email = user.email;
    const password = user.password;
    
    if (!email || !password) {
      toast.error("All fields required");
      setLoading(false);
      return;
    }
    
    const loadingToast = toast.loading("Signin in...");
    try {
      const response = await axios.post(`${baseURL}/user/signin`, {
        email: email,
        password: password,
      });
      if (response.status !== 200) {
        toast.dismiss(loadingToast);
        toast.error("Error logging in");
        setLoading(false);
        return;
      }
      setUserAuthInfo(response.data);
      toast.dismiss(loadingToast);
      toast.success("Login succussful!");
      setLoading(false);
      router.push("/");
    } catch (err: any) {
      console.log(err);
      toast.dismiss(loadingToast);
      toast.error(err.response.data.error);
      setLoading(false);
    }
  };

  return (
    <div className="p-10 md:p-0 flex items-center justify-center min-h-screen bg-black bg-cover bg-center">
      <Toaster
        position="top-right"
        richColors
        closeButton
        duration={2000}
        pauseWhenPageIsHidden
        visibleToasts={1}
      />
      <div className="p-8 rounded-3xl z-20 md:px-10 shadow-lg bg-opacity-65 bg-[#EDA93F]/20 border-2 border-[#CFC36D] flex flex-col items-center">
        <div
          className={`flex text-2xl md:text-4xl items-center ${heading.className}`}
        >
          <Image
            src={phone}
            alt="Gameboy Icon"
            height={30}
            width={30}
            className="mr-4"
          />
          <h1 className="text-white text-center">LOGIN</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className={`${font.className} flex flex-col items-center space-y-4 mt-10 w-full z-10`}
        >
          <div className="relative w-full">
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter email address"
              className="w-full bg-transparent border-2 rounded-xl border-[#CFC36D] text-[#FFF] transition-all duration-200 ease-in text-md focus:outline-none block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="relative w-full">
            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Enter passsword"
              className="w-full bg-transparent border-2 rounded-xl border-[#CFC36D] text-[#FFF] transition-all duration-200 ease-in text-md focus:outline-none block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <Button
            className="mt-3 p-4 w-full text-lg text-loginsignuplinkcolor font-bold border border-white text-white bg-submitbtncolor rounded-full hover:cursor-pointer"
            type="submit"
            // disabled={loading}
          >
            Login
          </Button>
        </form>
        <Link
          href="/forgot-password"
          className={`${font.className} hover:underline text-sm text-white text-left mt-2 w-full`}
        >
          Forgot password?
        </Link>

        <div
          className={`${font.className} text-sm text-start w-full text-white mt-4`}
        >
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className=" text-loginsignuplinkcolor hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default isAuth(LoginPage);
