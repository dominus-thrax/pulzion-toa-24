"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// images
import phone_icon from "../../../../public/assets/auth/phone.png";
import { toast } from "sonner";
import axios from "axios";
import { baseURL } from "@/api/api";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/index";
import isAuth from "@/context/user/isAuth";

import localFont from "next/font/local";

const font = localFont({
  src: "../../../../public/font/BDSupperRegular.ttf",
});


const heading = localFont({
  src: "../../../../public/font/OriginTech personal use.ttf",
});

const RegisterForm = () => {
  const router = useRouter();
  const { setUserAuthInfo } = useAuth();
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
  const [loading, setLoading] = useState<boolean>(false);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCollege = e.target.value;
    if (selectedCollege === "other") {
      setCollegeName("");
    } else {
      setCollegeName("Pune Institute Of Computer Technology");
    }
    setCollege(selectedCollege);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loadingToast = toast.loading("Registering...");
    setLoading(true);

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
      toast.dismiss(loadingToast);
      toast.error("All fields required");
      setLoading(false);
      return;
    }

    if (confirmPassword !== password) {
      console.log("Error: Passwords do not match.");
      return;
    }

    try {
      const result = await axios.post(`${baseURL}/user/signup`, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        mobile_number: phone,
        country: country,
        college: collegeName,
        year: year,
      });

      if (result.status !== 200) {
        toast.error("Error in registration");
        setLoading(false);
        return;
      }
      setUserAuthInfo(result.data);
      toast.dismiss(loadingToast);
      toast.success("Registration successfull!");
      router.push("/");
    } catch (error: any) {
      toast.dismiss(loadingToast);
      console.error("Signup error:", error.message);
      toast.error("Error signing up");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-black bg-cover bg-center p-10 md:p-20"
      // style={{
      //   backgroundImage: "url('/assets/auth/vector-bg.png')",
      // }}
    >
      <div className="p-5 md:p-11 z-20 rounded-3xl shadow-lg bg-opacity-35 bg-[#EDA93F]/20 border-2 border-[#CFC36D] flex flex-col items-center pt-5">
        <h1
          className={`${heading.className} text-center text-4xl text-green-200 mb-6`}
        >
          <span className="flex text-2xl md:text-4xl text-white items-center justify-center">
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
        <form
          className={`space-y-4 w-full ${font.className}`}
          onSubmit={handleSubmit}
        >
          <div className={`${font.className} flex gap-16`}>
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-16">
            <input
              type="tel"
              placeholder="Enter Phone No."
              className="w-1/2 input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <select
              className="w-1/2 input"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
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
            required
          >
            <option value="" disabled>
              Select College
            </option>
            <option value="pict">PICT</option>
            <option value="other">Other</option>
          </select>

          <input
            type="text"
            placeholder="College Name"
            className="input"
            value={collegeName}
            onChange={(e) => {
              if (college === "other") {
                setCollegeName(e.target.value);
              }
            }}
            required={college === "other"}
          />

          <select
            className="input"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
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
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <div className={`w-full flex justify-center ${font.className}`}>
            <Button
              className="hover:bg-opacity-30 mt-5 px-10 py-8 w-full text-lg font-bold text-white bg-submitbtncolor rounded-full"
              type="submit"
            >
              Sign Up
            </Button>
          </div>
        </form>
        <p className={`text-sm text-center text-white mt-1 ${font.className}`}>
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-loginsignuplinkcolor hover:underline"
          >
            LOGIN
          </Link>
        </p>
      </div>
    </div>
  );
};

export default isAuth(RegisterForm);
