"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/user-events/Card";
// import { ThreeDots } from "react-loader-spinner";
import api from "@/api/api";
import isNotAuth from "@/context/user/isNotAuth";
import localFont from "next/font/local";
import { CardSpotlightDemo } from "@/components/events/event-card";
import { EventType } from "@/types";

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
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [events, setEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMyEvents = async () => {
    try {
      const response = await api.get("/user_events");
      // Extracting the transaction array
      const events = response.data.events;
      setEvents(events);
    } catch (error: any) {
      // Error handling
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMyOrders = async () => {
    try {
      const response = await api.get("/transaction");

      // Extracting the transaction array
      const transactions = response.data.transactions;
      setTransactions(transactions);
    } catch (error: any) {
      // Error handling
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchDetails = () => {
    fetchMyEvents();
    fetchMyOrders();
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="my-10">
      <div
        className={`${originText.className} flex justify-center items-center pt-10 text-[#CFC36D] text-2xl md:text-5xl mt-10`}
      >
        My Orders
      </div>
      <div
        className={`md:grid md:grid-cols-3 md:gap-10 p-10  space-y-4 md:space-y-0 ${font.className}`}
      >
        {transactions.map((transaction, index) => (
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

      <div className="mt-10">
        <h2
          className={` ${originText.className} text-[#cfc36d] text-xl mb-3 md:text-4xl text-center`}
        >
          My Events
        </h2>
        <div className={`flex flex-wrap gap-9 mt-5 md:mt-10 justify-center ${font.className}`}>
          {events.length > 0 ? (
            events.map((event: any, index: number) => (
              <div key={index} className={` ${font.className}`}>
                <CardSpotlightDemo event={event} />
              </div>
            ))
          ) : (
            <div className="text-[#CFC36D] w-full text-center">
              No events accepted yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default isNotAuth(Orders);
