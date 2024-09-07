'use client'
import { useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';


const LoginPage: NextPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black bg-cover bg-center" style={{ backgroundImage: "url('/vecteezy_retro-sci-fi-futuristic-background-1980s-and-1990s-style-3d_7795861-ai1.png')" }}>
      <div className="p-8 rounded-3xl shadow-lg w-[638px] h-[717px] bg-opacity-65 bg-logincardcolor border-loginbordercolor border-4 flex flex-col items-center">
        <div className="flex w-[417.18px] items-center mt-16">
          <img src="/image 16.png" alt="Gameboy Icon" className="h-24 w-16" />
          <h1 className="font-vt323 text-9xl text-white w-[363.18px] text-center">LOGIN</h1>
        </div>
        <form onSubmit={handleLogin} className='flex flex-col items-center'>
          <div className="relative w-[413.56px] h-[58.89px] mt-[62.11px]">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-full bg-opacity-[0.92] bg-inputfildcolor rounded-[39px] pl-[69.2px] text-sm text-white placeholder-white border-none"
            />
            <img src="/pfp.png" className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[69.2px] h-[58.89px]" alt="Profile Icon" />
          </div>
          <div className="relative w-[413.56px] h-[58.89px] mt-[62.11px]">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-full bg-opacity-[0.92] bg-inputfildcolor rounded-[39px] pl-[69.2px] text-sm text-white placeholder-white border-none"
            />
            <img src="/Rectangle 11.png" className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[69.2px] h-[58.89px]" alt="Profile Icon" />
          </div>
          <a href="#" className="hover:underline font-vt323 text-xl text-white text-left mt-[23.11px] w-full">Forgot password?</a>
          <button
            type="submit"
            className="mt-5 w-[251.14px] h-[61.91px] py-3 text-lg font-bold text-white bg-submitbtncolor rounded-[39px] "
          >
            Login
          </button>
        </form>
        <div className="font-vt323 text-2xl text-center text-white mt-4">
          Don&apos;t have an account? <Link href="register" className="font-vt323 text-loginsignuplinkcolor hover:underline">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
