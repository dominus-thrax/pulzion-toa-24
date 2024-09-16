import { CardSpotlight } from "@/components/ui/card-spotlight";
import { EventType } from "@/types";
import { Button } from "../ui/button";
import Link from "next/link";

export function CardSpotlightDemo({ event }: { event: EventType }) {
  const eventLink = `/events/${event.name.toLowerCase().replace(/ /g, "-")}`;
  return (
    <Link href={eventLink}>
      <div className="cursor-pointer">
        <CardSpotlight className="flex flex-col justify-center  items-center relative overflow-hidden group p-2">
          <div className="flex justify-center items-center z-50">
            <img
              src="/photo.png"
              alt=""
              className="rounded-lg w-16 h-16 object-contain mb-4"
            />
          </div>
          <div className="flex flex-col justify-center text-white items-center text-center">
            <p className="text-lg font-bold relative z-20 mt-2">{event.name}</p>
          </div>
        </CardSpotlight>
      </div>
    </Link>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0-.432.002-.642.005l-.616.017-.299.013-.579.034-.553.046c-4.785.464-6.732 2.411-7.196 7.196l-.046.553-.034.579c-.005.098-.01.198-.013.299l-.017.616-.004.318-.001.324c0 .218.002.432.005.642l.017.616.013.299.034.579.046.553c.464 4.785 2.411 6.732 7.196 7.196l.553.046.579.034c.098.005.198.01.299.013l.616.017.642.005.642-.005.616-.017.299-.013.579-.034.553-.046c4.785-.464 6.732-2.411 7.196-7.196l.046-.553.034-.579c.005-.098.01-.198.013-.299l.017-.616.005-.642-.005-.642-.017-.616-.013-.299-.034-.579-.046-.553c-.464-4.785-2.411-6.732-7.196-7.196l-.553-.046-.579-.034a28.058 28.058 0 0 0-.299-.013l-.616-.017-.318-.004-.324-.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083.094-4 4a1 1 0 0 1-1.32.083l-.094-.083-2-2a1 1 0 0 1 1.32-1.497l.094.083 1.293 1.292 3.293-3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
