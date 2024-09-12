import React from "react";
import axios from "axios";
import { RiDeleteBin6Fill } from "react-icons/ri";

interface CardProps {
  id: number;
  image: string;
  title: string;
  price: number;
  isLast?: boolean;
  onDelete: (id: number) => void;
}

const Card: React.FC<CardProps> = ({
  id,
  image,
  title,
  price,
  isLast,
  onDelete,
}) => {
  const handleDelete = async () => {
    // Show confirmation alert
    const confirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (confirmed) {
      try {
        await axios.delete(
          `https://pulzion22-ems-backend-evj4.onrender.com/cart/${id}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzI1OTUzMTc1fQ._LWlL7w4Y3xpOBhGEjB4zTJxpDfEGJ0TvV4PmSnL9yg",
            },
          }
        );
        onDelete(id);
      } catch (error) {
        console.error("Error deleting item:", error);
        // Example of using a toast notification
        // toast.error("Failed to delete item. Please try again.");
      }
    }
  };

  return (
    <div className="m-1 md:m-4">
      <div className="flex justify-between font-vt323">
        <div className="flex gap-3 md:gap-4">
          <img
            src={`/assets/add-to-cart/${title}.png`}
            alt={title}
            className="w-16 md:w-20 p-1 bg-[#E8AF49] rounded-md"
          />
          <p className="my-auto text-[#8BFFCE] text-xl md:text-3xl">{title}</p>
        </div>
        <div className="my-auto">
          <p className="text-[#8BFFCE] my-auto ml-auto flex justify-end text-lg md:text-3xl">
            {price}/-
          </p>
          <button
            onClick={handleDelete}
            className="text-white text-sm md:text-xl flex gap-2 my-2"
          >
            <span className="my-auto">
              <RiDeleteBin6Fill />
            </span>
            Delete
          </button>
        </div>
      </div>
      {!isLast && <hr className="my-2" />}
    </div>
  );
};

export default Card;
