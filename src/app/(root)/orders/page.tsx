"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/user-events/Card";
// import { ThreeDots } from "react-loader-spinner";
import api from "@/api/api";
import isNotAuth from "@/context/user/isNotAuth";
import localFont from "next/font/local";

const font = localFont({
  src: "../../../../public/font/BDSupperRegular.ttf",
});

const originText = localFont({
  src: "../../../../public/fonts/OriginTech personal use.ttf",
});

export type Transaction = {
  id: string;
  transaction_id: string;
  amount: number;
  events: string[];
  status: string;
};

const Orders: React.FC = () => {
  const [data, setData] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await api.get("/transaction");

      // Extracting the transaction array
      const transactions = response.data.transactions;
      setData(transactions);
      console.log(transactions);
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
        Loading...
      </div>
    );
  }

  return (
    <div className="">
      <div
        className={`${originText.className} flex justify-center items-center pt-10 text-[#CFC36D] text-2xl md:text-5xl mt-10`}
      >
        My Orders
      </div>
      <div
        className={`md:grid md:grid-cols-3 md:gap-10 p-10  space-y-4 md:space-y-0 ${font.className}`}
      >
        {data.map((transaction, index) => (
          <Card
            key={index}
            id={transaction.id}
            transaction_id={transaction.transaction_id}
            amount={transaction.amount}
            status={transaction.status}
            events={transaction.events}
          />
        ))}
      </div>
    </div>
  );
};

export default isNotAuth(Orders);
