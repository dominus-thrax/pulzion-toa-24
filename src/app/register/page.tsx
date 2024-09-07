
'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [college, setCollege] = useState('');
  const [year, setYear] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log({
      firstName,
      lastName,
      phone,
      country,
      college,
      year,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black bg-cover bg-center" style={{ backgroundImage: "url('/vecteezy_retro-sci-fi-futuristic-background-1980s-and-1990s-style-3d_7795861-ai1.png')" }}>      
      <div className="p-11 rounded-3xl shadow-lg w-[638px] h-[717px] bg-opacity-65 bg-gradient-to-b from-registercardcolor1 to-registercardcolor2 border-loginbordercolor border-4 flex flex-col items-center pt-5">
        <h1 className="text-center text-4xl text-green-200 font-vt323 mb-6">
          <span className="flex text-7xl text-white items-center justify-center">
            <img src="/image 16.png" alt="Gameboy Icon" className="h-16 w-10 mr-3" />
            REGISTER
          </span>
        </h1>
        <form className="space-y-4 w-full" onSubmit={handleSubmit}>
          <div className="flex gap-16">
            <input 
              type="text" 
              placeholder="First Name" 
              className="w-1/2 input" 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              className="w-1/2 input" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
            />
          </div>
          <div className="flex gap-16">
            <input 
              type="text" 
              placeholder="Enter Phone No." 
              className="w-1/2 input" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
            />
            <select 
              className="w-1/2 input" 
              value={country} 
              onChange={(e) => setCountry(e.target.value)} 
            >
              <option value="" disabled>Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
          <select 
            className="input" 
            value={college} 
            onChange={(e) => setCollege(e.target.value)} 
          >
            <option value="" disabled>Select College</option>
            <option value="pict">PICT</option>
            <option value="other">Other</option>
          </select>
          <select 
            className="input" 
            value={year} 
            onChange={(e) => setYear(e.target.value)} 
          >
            <option value="" disabled>Select Year</option>
            <option value="fe">FE</option>
            <option value="se">SE</option>
            <option value="te">TE</option>
            <option value="be">BE</option>
          </select>
          <input 
            type="email" 
            placeholder="Email Address" 
            className="input" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="input" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            className="input" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
          <div className='w-full flex justify-center'>
            <button className="mt-5 w-[251.14px] h-[61.91px] py-3 text-lg font-bold text-white bg-submitbtncolor rounded-[39px]" type="submit">
              Sign Up
            </button>
          </div>
        </form>
        <p className="font-vt323 text-2xl text-center text-white mt-4">
          Already have an account? <Link href="login" className="font-vt323 text-loginsignuplinkcolor hover:underline">LOGIN</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
