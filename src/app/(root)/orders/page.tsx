"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/user-events/Card";
// import { ThreeDots } from "react-loader-spinner";
import api from "@/api/api";
import isNotAuth from "@/context/user/isNotAuth";

export type Item = {
  id: string;
  date: string;
  name: string;
  amount: number;
  status: string;
};

const Orders: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await api.get("/user_events");

      // Extract data from the response
      const rawData = response.data;
      setData(rawData.events);
    } catch (error: any) {
      // Error handling
      console.log(error);
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
        {/* <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          radius="9"
          ariaLabel="three-dots-loading"
        /> */}
        Loading...
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

export default isNotAuth(Orders);
