import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import api from "@/api/api";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

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
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await api.delete(`/cart/${id}`);
      onDelete(id);
    } catch (error) {
      console.error("Error deleting item:", error);
    } finally {
      setIsDialogOpen(false);
    }
  };

  return (
    <div className="m-1 md:m-4">
      <div className="flex justify-between ">
        <div className="flex gap-3 md:gap-4">
          <img
            src={`/assets/add-to-cart/${title}.png`}
            alt={title}
            className="w-16 md:w-20 p-1 bg-[#E8AF49] rounded-xl"
          />
          <p className="my-auto text-[#8BFFCE] text-lg md:text-2xl">{title}</p>
        </div>
        <div className="my-auto">
          <p className="text-[#8BFFCE] my-auto ml-auto flex justify-end text-lg md:text-3xl">
            {price}/-
          </p>
          <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <AlertDialogTrigger asChild>
              <button className="text-white text-sm md:text-lg flex gap-2 my-2">
                <span className="my-auto">
                  <RiDeleteBin6Fill />
                </span>
                Remove
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-[#1F2937] text-white border border-[#E8AF49] rounded-xl max-w-xs md:max-w-md p-4">
              <AlertDialogHeader className="text-[#E8AF49]">
                <AlertDialogTitle className="text-lg md:text-xl font-bold">
                  Confirm Deletion
                </AlertDialogTitle>
                <AlertDialogDescription className="text-sm md:text-md">
                  Are you sure you want to remove <strong>{title}</strong> from
                  the cart? This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel asChild>
                  <Button
                    onClick={() => setIsDialogOpen(false)}
                    variant="secondary"
                    className="bg-[#8BFFCE] text-black hover:bg-[#76ddb6]"
                  >
                    Cancel
                  </Button>
                </AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Button
                    onClick={handleDelete}
                    variant="destructive"
                    className="bg-red-600 text-white hover:bg-red-500"
                  >
                    Remove
                  </Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      {!isLast && <hr className="my-2 border-[#8BFFCE]" />}
    </div>
  );
};

export default Card;
