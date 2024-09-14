import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import api from "@/api/api";
import { Toaster, toast } from "sonner"; // Import Sonner toast

interface CartItem {
  id: number;
  name: string;
  price: number;
  logo: string;
}

interface OrderProps {
  cartItems: CartItem[];
  refetch: () => void;
}

function Order({ cartItems = [], refetch }: OrderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const [loading, setLoading] = useState(false);

  const handleCheckoutClick = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  const handleTransactionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTransactionId(e.target.value);
  };

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const eventIds = cartItems.map((item) => item.id); //
      if (transactionId === "") {
        toast.error("Please enter transaction id", {
          style: { background: "red", color: "white" },
        });
        return;
      }

      const transactionResponse = await api.post("/transaction", {
        event_id: eventIds,
        transaction_id: transactionId,
      });

      if (transactionResponse.status === 200) {
        await api.delete("/cart");

        toast.success("Checkout successful!", {
          style: { background: "green", color: "white" },
        });
        closeModal();
        refetch();
      } else {
        throw new Error("Transaction failed");
      }
    } catch (error) {
      toast.error("Failed to process checkout. Please try again.", {
        style: { background: "red", color: "white" },
      });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="p-4">
      <Toaster position="top-right" />
      <p className="text-center text-3xl md:text-5xl my-2 font-vt323 text-[#8BFFCE]">
        Order Summary
      </p>
      <hr />
      <div className="text-white font-vt323 text-xl md:text-xl">
        {cartItems.map((item) => (
          <div key={item.id} className="grid grid-cols-12 my-2">
            <p className="col-span-10">{item.name}</p>
            <p className="col-span-2 ml-auto">{item.price}/-</p>
          </div>
        ))}
      </div>
      <hr />
      <div className="grid grid-cols-12 my-2 text-white font-vt323 text-lg md:text-3xl">
        <p className="col-span-10">Order Total</p>
        <p className="col-span-2 ml-auto">{total}/-</p>
      </div>
      <div className="text-white text-xl md:text-2xl mx-14 mt-6">
        <button
          className="bg-[#00910EC2] px-5 font-vt323 p-2 rounded-xl min-w-full my-1 md:my-2"
          onClick={handleCheckoutClick}
        >
          Checkout
        </button>
        <br />
        <Link href="/events">
          <button className="bg-[#00910EC2] px-5 font-vt323 p-2 rounded-xl min-w-full my-2 md:my-4">
            Explore Events
          </button>
        </Link>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="p-8 rounded-lg shadow-lg bg-[#1F2937] w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 text-white">
              <h2 className="text-3xl mb-4 text-center font-vt323 text-[#00910EC2]">
                Checkout
              </h2>
              <p className="text-center mb-4 text-white">
                Scan the QR code and enter the transaction id below.
              </p>

              <div className="flex justify-center mb-4">
                <img
                  src={`/assets/payment/QR.jpg`}
                  alt="QR Code"
                  className="w-32 h-32"
                />
              </div>

              <div className="text-center text-lg mb-4">
                <p className=" text-white">Order Total: {total}/-</p>
              </div>

              <input
                type="text"
                placeholder="Enter Transaction ID"
                value={transactionId}
                onChange={handleTransactionChange}
                className="w-full p-2 border rounded-lg mb-4 text-black"
              />

              <div className="flex justify-end mt-4">
                <button
                  className="bg-gray-300 px-4 py-2 text-black rounded-lg mr-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#00910EC2] px-4 py-2 rounded-lg text-white"
                  onClick={handleCheckout}
                  disabled={loading} // Disable button while loading
                >
                  {loading ? "Processing..." : "Checkout"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Order;
