"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { baseURL } from "@/api/api";

const SendOTP = ({ onSendOTP }: { onSendOTP: () => void }) => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      // Handle empty email case
      alert("Please enter your email");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${baseURL}/user/otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to send OTP");
      }

      const result = await response.json();
      toast.success(`${result.msg}`); // OTP sent successfully message

      // Redirect to OTP verification page
      router.push("/reset-password");
    } catch (error) {
      console.error(error);
      alert("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className=" flex my-[20px] flex-col gap-[15px] justify-center items-center ">
        <form onSubmit={handleSendOTP} className="space-y-10">
          <div className="flex flex-col gap-[2px] ml-[100px] ">
            <label className="block mb-2 text-sm font-medium text-white dark:text-white ">
              Your email
            </label>
            <div className="w-[450px] ">
              <input
                type="email"
                id="helper-text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="helper-text-explanation"
                className="bg-transparent  border-b-[2px] border-[#FFFFFF] text-[#FFF] transition-all duration-200 ease-in text-md focus:outline-none block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="my-[20px] mx-[200px]">
            <Button
              type="submit"
              disabled={loading}
              className="rounded-full w-[150px] transition-all duration-100 ease-in  "
              onClick={handleSendOTP}
              variant="default"
              size="default"
            >
              {loading ? "Sending..." : "Send OTP"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendOTP;
