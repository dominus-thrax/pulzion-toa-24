"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/components/cart/EventsCard";
import Order from "@/components/cart/Order";

interface CartItem {
  id: number;
  name: string;
  price: number;
  logo: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          "https://pulzion22-ems-backend-evj4.onrender.com/cart",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzI1OTUzMTc1fQ._LWlL7w4Y3xpOBhGEjB4zTJxpDfEGJ0TvV4PmSnL9yg",
            },
          }
        );
        setCartItems(response.data.events);
      } catch (err) {
        setError("Failed to load cart items.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="mx-8">
      <div className="font-vt323 text-5xl md:text-8xl mb-6 text-white text-center">
        My Cart
      </div>
      <div className="md:flex gap-8">
        <div className="flex-grow my-4 md:my-0">
          <div className="border-2 rounded-2xl w-full flex flex-col max-h-60 md:max-h-none overflow-y-scroll md:overflow-y-hidden custom-scrollbar">
            <div className="flex-grow p-4">
              {cartItems.map((item, index) => (
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.logo}
                  title={item.name}
                  price={item.price}
                  isLast={index === cartItems.length - 1}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <div className="border-2 rounded-2xl">
            <Order cartItems={cartItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
