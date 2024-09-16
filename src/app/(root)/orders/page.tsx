"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/user-events/Card";
// import { ThreeDots } from "react-loader-spinner";
import api from "@/api/api";
import isNotAuth from "@/context/user/isNotAuth";

export type Transaction = {
  id: string;
  transaction_id: string;
  name: string;
  amount: number;
  events: string[];
  status: string;
  created_at: string;
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
    <div className="bg-black">
      <div className="flex justify-center items-center pt-10 font-vt323 text-[#CFC36D] text-2xl md:text-5xl">My Orders</div>
      <div className="md:grid md:grid-cols-3 md:gap-3 p-10  space-y-4 md:space-y-0">
        {/* Mapping over transactions */}
        {data.map((transaction) =>
          transaction.events.map((event, index) => (
            <Card
              key={`${transaction.id}-${index}`}
              id={transaction.transaction_id || "1234567890"}
              name={event} // Event name
              amount={transaction.amount || 0}
              status={transaction.status || "Pending"}
              transaction_id={""}
              events={[]}
              created_at={""}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default isNotAuth(Orders);
