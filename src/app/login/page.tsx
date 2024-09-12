'use client'
import { useState } from 'react';
import { NextPage } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

// images
import phone from "../../../public/assets/auth/phone.png"
import profile from "../../../public/assets/auth/profile.png"
import lock from "../../../public/assets/auth/lock.png"

const LoginPage: NextPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-black bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/assets/auth/vector-bg.png')",
      }}
    >
      <div className="p-8 rounded-3xl shadow-lg bg-opacity-65 bg-logincardcolor border-loginbordercolor border-4 flex flex-col items-center">
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
          onSubmit={handleLogin}
          className="flex flex-col items-center space-y-10 mt-10 w-full"
        >
          <div className="relative w-full">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-opacity-[0.92] bg-inputfildcolor rounded-[39px] pl-[69.2px] text-sm text-white placeholder-white border-none"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-opacity-[0.92] bg-inputfildcolor rounded-[39px] pl-[69.2px] text-sm text-white placeholder-white border-none"
            />
            <Image
              src={lock}
              height={40}
              width={40}
              className="absolute left-0 top-1/2 transform -translate-y-1/2"
              alt="Profile Icon"
            />
          </div>
        </form>
        <Link
            href="/forgot-password"
            className="hover:underline font-vt323 text-xl text-white text-left mt-2 w-full"
          >
            Forgot password?
          </Link>
          <Button
            variant={"default"}
            className=" hover:bg-opacity-60 mt-5 px-10 py-8 w-full text-lg font-bold text-white bg-submitbtncolor rounded-full"
            type="submit"
          >
            Login
          </Button>
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
