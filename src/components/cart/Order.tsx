import React from "react";

function Order() {
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
    <div className="p-4">
      <p
        className="
text-center  text-3xl md:text-5xl my-2 font-vt323 text-[#8BFFCE]"
      >
        Order Summary
      </p>
      <hr />
      <div className="text-white font-vt323 text-xl md:text-xl">
        {cartItems.map((item) => (
          <div key={item.id} className="grid grid-cols-12 my-2">
            <p className="col-span-10">{item.title}</p>
            <p className="col-span-2  ml-auto">{item.price}/-</p>
          </div>
        ))}
      </div>
      <hr />
      <div className="grid grid-cols-12 my-2 text-white font-vt323 text-lg md:text-3xl">
        <p className="col-span-10">Order Total</p>
        <p className="col-span-2 ml-auto">100/-</p>
      </div>
      <div className=" text-white text-xl md:text-2xl mx-14 mt-6">
        <button className=" bg-[#00910EC2] px-5 font-vt323  p-2 rounded-xl min-w-full my-1 md:my-2 ">
          Checkout
        </button>
        <br />
        <button className=" bg-[#00910EC2] px-5 font-vt323  p-2 rounded-xl min-w-full my-2 md:my-4">
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default Order;
