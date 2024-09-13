"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// images
import phone_icon from "../../../../public/assets/auth/phone.png";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [college, setCollege] = useState("pict");
  const [collegeName, setCollegeName] = useState(
    "Pune Institute Of Computer Technology"
  );
  const [year, setYear] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSelectChange = (e: any) => {
    const college = e.target.value;
    if (college === "other") {
      setCollegeName("");
    } else {
      setCollegeName("Pune Institute Of Computer Technology");
    }
    setCollege(college);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !college ||
      !collegeName ||
      !country ||
      !password ||
      !confirmPassword ||
      !year
    ) {
      console.log("Error");
      return;
    }

    if (confirmPassword !== password) {
      console.log("Error");
      return;
    }

    // Form submission logic here
    console.log({
      first_name: firstName,
      last_name: lastName,
      email,
      mobile_number: phone,
      country,
      college,
      year,
      password,
    });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-black bg-cover bg-center p-10 md:p-0"
      style={{
        backgroundImage: "url('/assets/auth/vector-bg.png')",
      }}
    >
      <div className="p-5 md:p-11 rounded-3xl shadow-lg bg-opacity-65 bg-gradient-to-b from-registercardcolor1 to-registercardcolor2 border-loginbordercolor border-4 flex flex-col items-center pt-5">
        <h1 className="text-center text-4xl text-green-200 font-vt323 mb-6">
          <span className="flex text-3xl md:text-5xl text-white items-center justify-center">
            <Image
              src={phone_icon}
              alt="Gameboy Icon"
              height={30}
              width={30}
              className="mr-4"
            />
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
              <option value="" disabled>
                Select Country
              </option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
          <select
            className="input"
            value={college}
            onChange={handleSelectChange}
          >
            <option value="" disabled>
              Select College
            </option>
            <option value="pict">PICT</option>
            <option value="other">Other</option>
          </select>

          <input
            type="college"
            placeholder="College Name"
            className="input"
            value={collegeName}
            onChange={(e) => {
              if (college === "other") {
                setCollegeName(e.target.value);
              }
            }}
          />

          <select
            className="input"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="" disabled>
              Select Year
            </option>
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
          <div className="w-full flex justify-center">
            <Button
              variant={"default"}
              className=" hover:bg-opacity-30 mt-5 px-10 py-8 w-full text-lg font-bold text-white bg-submitbtncolor rounded-full"
              type="submit"
            >
              Sign Up
            </Button>
          </div>
        </form>
        <p className="font-vt323 text-xl text-center text-white mt-1">
          Already have an account?{" "}
          <Link
            href="login"
            className="font-vt323 text-loginsignuplinkcolor hover:underline"
          >
            LOGIN
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
