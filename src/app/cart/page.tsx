import Card from "@/components/cart/EventsCard";
import Order from "@/components/cart/Order";
import React from "react";

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      image: "Codex.png",
      title: "Freeze the second",
      price: 20,
    },
    {
      id: 2,
      image: "Codex.png",
      title: "Codex",
      price: 25,
    },
    {
      id: 3,
      image: "Codex.png",
      title: "Hire Hustle",
      price: 30,
    },
    {
      id: 4,
      image: "Codex.png",
      title: "Hire Hustle",
      price: 30,
    },
    {
      id: 5,
      image: "Codex.png",
      title: "Hire Hustle",
      price: 30,
    },
  ];

  return (
    <>
      <div className="mx-8">
        <div className="font-vt323 text-5xl md:text-8xl mb-6 text-white text-center">
          My Cart
        </div>
        <div className="md:flex  gap-8">
          <div className="  flex-grow my-4 md:my-0">
            <div className="border-2 rounded-2xl w-full flex flex-col max-h-60 md:max-h-none overflow-y-scroll md:overflow-y-hidden custom-scrollbar">
              <div className=" flex-grow p-4">
                {cartItems.map((item, index: number) => (
                  <Card
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    isLast={index === cartItems.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="border-2 rounded-2xl ">
              <Order />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
