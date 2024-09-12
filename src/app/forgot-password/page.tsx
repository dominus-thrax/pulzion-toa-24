
'use client'
import { useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { Button } from "@/components/ui/button"; 
import SendOTP  from "@/components/SendOTP" ;
import EnterOTPComponent from '@/components/EnterOTP';
const ForgotPassword : NextPage = () => {

  const [otp, setOtp] = useState<string>('');
  const [step, setStep] = useState<'send' | 'verify'>('send');
  const handleSubmitOTP = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement OTP verification logic here
  };

  const handleSendOTP = () => {
    setStep('verify');
  };

  return (
    <div className="flex items-center m-y-[150px] justify-center min-h-screen bg-black bg-cover bg-center" style={{ backgroundImage: "url('/vecteezy_retro-sci-fi-futuristic-background-1980s-and-1990s-style-3d_7795861-ai1.png')" }}>
      <div className='w-[500px] h-[400px] border-[4px] translate-y-[-40px] border-[#1F6E56] rounded-[50px] my-[50px] flex flex-col 
      bg-gradient-to-b from-[#00910f50] via-[#88b7884f] to-[#cfc46d65] '>

        <div className='flex justify-center'>
          <div className="flex w-[417.18px] items-center mt-16">
            <img src="/image 16.png" alt="Gameboy Icon" className="h-24 w-16 mx-14" />
            <h1 className=" text-5xl  text-white w-[363.18px] ">Reset Password</h1>
          </div>
        </div>
        <div className='flex my-[20px] flex-col gap-[15px] justify-center items-center  '>
          {step === 'send' ? (
            <SendOTP onSendOTP={handleSendOTP} />
          ) : (
            <EnterOTPComponent />
          )}
          
        </div>  

      </div>
    </div>
    // <div className="flex items-center m-y-[150px] justify-center min-h-screen bg-black bg-cover bg-center" style={{ backgroundImage: "url('/vecteezy_retro-sci-fi-futuristic-background-1980s-and-1990s-style-3d_7795861-ai1.png')" }}>
    //   <div className="p-8 rounded-3xl shadow-lg w-[638px] h-[717px]  border-4 border-[#  ] flex flex-col items-center">
    //     <div className="flex w-[417.18px] items-center mt-16">
    //       <img src="/image 16.png" alt="Gameboy Icon" className="h-24 w-16" />
    //       <h1 className=" text-6xl text-white w-[363.18px] text-center">Reset Password</h1>
    //     </div>
    //     <form onSubmit={handleLogin} className='flex flex-col items-center'>
    //       <div className="relative w-[413.56px] h-[58.89px] mt-[62.11px]">
    //         <input
    //           type="text"
    //           value={email}
    //           placeholder="Input text"
    //           onChange={(e) => setEmail(e.target.value)}
    //           className="py-3 px-5 block w-full h-[70px] border-b-[1px] rounded-full bg-transparent text-2xl focus:border-[#1F6E56] focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Input text"
    //           // className="w-full h-full bg-opacity-[0.92] bg-inputfildcolor rounded-[39px] pl-[69.2px] text-sm text-white placeholder-white border-none"
    //         />

    //         {/* <img src="/pfp.png" className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[69.2px] h-[58.89px]" alt="Profile Icon" /> */}
    //       </div>
    //       <div className="relative w-[413.56px] h-[58.89px] mt-[62.11px]">
    //         <input
    //           type="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           className="w-full h-full bg-opacity-[0.92] bg-inputfildcolor rounded-[39px] pl-[69.2px] text-sm text-white placeholder-white border-none"
    //         />
    //         <img src="/Rectangle 11.png" className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[69.2px] h-[58.89px]" alt="Profile Icon" />
    //       </div>
    //       <a href="#" className="hover:underline  text-xl text-white text-left mt-[23.11px] w-full">Forgot password?</a>
    //       <button
    //         type="submit"
    //         className="mt-5 w-[251.14px] h-[61.91px] py-3 text-lg font-bold text-white bg-submitbtncolor rounded-[39px] "
    //       >
    //         Login
    //       </button>
    //     </form>
    //     <div className=" text-2xl text-center text-white mt-4">
    //       Don&apos;t have an account? <Link href="register" className=" text-loginsignuplinkcolor hover:underline">Register</Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ForgotPassword;
