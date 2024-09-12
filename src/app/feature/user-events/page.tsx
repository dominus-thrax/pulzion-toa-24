"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/components/Card";
import { ThreeDots } from "react-loader-spinner";

export type Item = {
  id: string;
  date: string;
  name: string;
  amount: number;
  status: string;
};

const Page: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://pulzion22-ems-backend-evj4.onrender.com/user_events",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzI2MTQ5NDA4fQ.En4TZHofokTOVXcKV3C4xTIZbMe-8dBTtH5UJSClc_A`,
          },
        }
      );

      // Extract data from the response
      const rawData = response.data;
      setData(rawData.events);
    } catch (error: any) {
      // Error handling
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
        />
      </div>
    );
  }

  return (
    <div className="bg-black md:grid md:grid-cols-3 md:gap-3 mt-16">
      {data.map((d) => (
        <Card
          key={d.id}
          id={d.id || "1234567890"}
          date={d.date || "30/10/2024"}
          name={d.name}
          amount={d.amount || 30}
          status={d.status || "Pending"}
        />
      ))}
    </div>
  );
};

export default Page;
