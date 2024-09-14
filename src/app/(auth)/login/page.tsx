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
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/index";
import { LoginForm } from "../../../types";
import localFont from "next/font/local";

const font = localFont({
  src: "../../../../public/font/SairaStencilOne-Regular.ttf",
});

const heading = localFont({
  src: "../../../../public/font/Sixtyfour-Regular-VariableFont_BLED,SCAN.ttf",
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
    const loadingToast = toast.loading("Signin in...");
    setLoading(true);

    const email = user.email;
    const password = user.password;

    if (!email || !password) {
      toast.error("All fields required");
      setLoading(false);
      return;
    }

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
      toast.error(err.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black bg-cover bg-center">
      <div className="p-8 rounded-3xl z-20 px-20 shadow-lg bg-opacity-65 bg-gradient-to-b from-registercardcolor1 to-registercardcolor2 border-loginbordercolor border-4 flex flex-col items-center">
        <div className={`flex text-2xl md:text-4xl items-center ${heading.className}`}>
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
          className={`${font.className} flex flex-col items-center space-y-10 mt-10 w-full z-10`}
        >
          <div className="relative w-full">
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Enter email address"
              className="w-full p-3 bg-opacity-[0.92] text-[#fff] bg-inputfildcolor rounded-[39px] pl-[3.5rem] text-sm border-none placeholder:text-[#e3e3e3]"
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
              placeholder="Enter passsword"
              className="w-full p-3 bg-opacity-[0.92] text-[#fff] bg-inputfildcolor rounded-[39px] pl-[3.5rem] text-sm placeholder:text-[#e3e3e3] border-none"
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

        <div className={`${font.className} text-sm text-start w-full text-white mt-4`}>
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
