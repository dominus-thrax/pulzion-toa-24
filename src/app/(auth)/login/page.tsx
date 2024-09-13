"use client";
import { useState } from "react";
import { NextPage } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// images
import phone from "../../../../public/assets/auth/phone.png";
import profile from "../../../../public/assets/auth/profile.png";
import lock from "../../../../public/assets/auth/lock.png";
import axios from "axios";
import { baseURL } from "@/api/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/Auth";
import { LoginForm } from "../../../../types";

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
      <div className="p-8 rounded-3xl z-20 shadow-lg bg-opacity-65 bg-gradient-to-b from-registercardcolor1 to-registercardcolor2 border-loginbordercolor border-4 flex flex-col items-center">
        <div className="flex text-3xl md:text-5xl items-center">
          <Image
            src={phone}
            alt="Gameboy Icon"
            height={30}
            width={30}
            className="mr-4"
          />
          <h1 className="font-vt323 text-white text-center">LOGIN</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-10 mt-10 w-full z-10"
        >
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
              placeholder="************"
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
            // disabled={loading}
          >
            Login
          </Button>
        </form>
        <Link
          href="/forgot-password"
          className="hover:underline font-vt323 text-xl text-white text-left mt-2 w-full"
        >
          Forgot password?
        </Link>

        <div className="font-vt323 text-xl text-center text-white mt-4">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-vt323 text-loginsignuplinkcolor hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
