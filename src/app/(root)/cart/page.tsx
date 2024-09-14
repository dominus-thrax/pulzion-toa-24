"use client";
import React, { useEffect, useState } from "react";
import api from "@/api/api";
import Order from "@/components/cart/Order";
import Card from "@/components/cart/EventsCard";
import isNotAuth from "@/context/user/isNotAuth";
interface CartItem {
  id: number;
  name: string;
  price: number;
  logo: string;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isCartEmpty, setIsCartEmpty] = useState<boolean>(false);

  const handleDelete = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  const fetchCartItems = async () => {
    try {
      const response = await api.get("/cart");

      const events = response.data?.events || [];
      setCartItems(events);
    } catch (err) {
      setError("Failed to load cart items.");
      setCartItems([]);
      setIsCartEmpty(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCartItems();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  // if (error)
  //   return <div className="text-red-500 text-center mt-8">{error}</div>;

  return (
    <div className="mx-8 mb-10 md:mb-3">
      <div className="font-vt323 text-4xl md:text-8xl  mt-10 mb-6 text-white text-center">
        My Cart
      </div>
      {isCartEmpty && (
        <div className=" h-[500px] flex justify-center items-center  text-white">
          <div className="border-2 rounded-xl  w-2/3 p-2  py-4 text-center font-vt323  text-lg md:text-xl ">
            Your cart is currently empty.
          </div>
        </div>
      )}
      {!isCartEmpty && (
        <div className="md:flex gap-8">
          <div className="flex-grow my-4 md:my-0">
            <div className="border-2 rounded-2xl w-full max-h-56 md:max-h-none overflow-y-auto custom-scrollbar">
              <div className="flex-grow p-4">
                {!isCartEmpty &&
                  cartItems.length > 0 &&
                  cartItems.map((item, index) => (
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
            {!isCartEmpty && (
              <div className="border-2 rounded-2xl">
                <Order cartItems={cartItems} refetch={fetchCartItems} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default isNotAuth(CartPage);
