"use client";
import React, { useEffect, useState } from "react";
import api from "@/api/api";
import Order from "@/components/cart/Order";
import Card from "@/components/cart/EventsCard";
import isNotAuth from "@/context/user/isNotAuth";
import localFont from "next/font/local";
import Image from "next/image";
import { MdCurrencyRupee } from "react-icons/md";

interface CartItem {
  id: number;
  name: string;
  price: number;
  logo: string;
}

const font = localFont({
  src: "../../../../public/font/BDSupperRegular.ttf",
});

const originText = localFont({
  src: "../../../../public/fonts/OriginTech personal use.ttf",
});

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCombo, setCartCombo] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isCartEmpty, setIsCartEmpty] = useState<boolean>(false);

  const handleDelete = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const fetchCartItems = async () => {
    try {
      const response = await api.get("/cart");

      const events = response.data?.events.events || [];
      const combos = response.data?.events.combos || [];
      setCartItems(events);
      setCartCombo(combos);
      setIsCartEmpty(events.length === 0 && combos.length === 0);
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
  }, [cartItems]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <div className="mx-8 mb-5 border md:mb-10">
      <div
        className={`${originText.className} text-2xl md:text-5xl  mt-20 mb-6 text-[#cfc36d] text-center`}
      >
        My Cart
      </div>
      {isCartEmpty && (
        <div
          className={`${font.className} h-[500px] flex justify-center items-center  text-[#cfc36d]`}
        >
          <div className="border-2 rounded-xl  w-2/3 p-2  py-4 text-center  text-lg md:text-xl ">
            Your cart is currently empty.
          </div>
        </div>
      )}

      {!isCartEmpty && (
        <div className={`flex flex-col md:flex-row gap-8 ${font.className}`}>
          <div className="flex flex-col justify-center items-center md:max-w-[70%] w-full space-y-4">
            {cartItems.length > 0 && (
              <div className="flex flex-col justify-center items-center w-full">
                <div className="w-full flex-grow my-4 md:my-0">
                  <div className="border-2 border-[#8BFFCE] rounded-2xl w-full max-h-56 md:max-h-none overflow-y-auto custom-scrollbar">
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
              </div>
            )}

            {cartCombo?.length > 0 && (
              <div className="flex flex-col justify-start items-start space-y-10 border-2 border-[#8BFFCE] rounded-2xl p-4 w-full">
                {cartCombo.map((combo: any, index) => (
                  <div key={index} className="space-y-4 w-full">
                    <div className="flex justify-between items-start px-4 py-1 w-full">
                      <div className="text-2xl text-[#8BFFCE] w-full">
                        {combo.combo_name}
                      </div>
                      <div className="flex flex-col justify-center items-center gap-1">
                        <div className="text-2xl text-white flex justify-center items-center">
                          <MdCurrencyRupee size={30} /> {combo.discounted_price}
                        </div>
                        <div className="text-xs flex justify-center line-through text-gray-500 items-center">
                          <MdCurrencyRupee size={15} />
                          {combo.total_price}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap w-full justify-center md:justify-start items-center gap-10">
                      {combo.array_of_evname.map((eve: any, index: number) => (
                        <div
                          key={index}
                          className="flex flex-col justify-between items-center text-xs"
                        >
                          <Image
                            src={eve.logo}
                            alt="combo_image"
                            height={50}
                            width={50}
                            className="pb-2"
                          />
                          <div className="text-xl text-white">{eve.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="md:max-w-[30%] w-full">
            <div className="border-2 border-[#8BFFCE] rounded-2xl">
              <Order
                cartCombo={cartCombo}
                cartItems={cartItems}
                refetch={fetchCartItems}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default isNotAuth(CartPage);
