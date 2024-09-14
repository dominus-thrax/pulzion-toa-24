"use client";

import { EventType } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";

const font = localFont({
  src: "../../../public/font/SairaStencilOne-Regular.ttf",
});


const EventCard = ({ event }: { event: EventType }) => {
  const router = useRouter();
  const handleViewClick = () => {
    // Pass the title as a query parameter in the URL
    router.push(`/events/${event.name.toLowerCase().replace(/ /g, "-")}`);
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/assets/events/EventCardbg1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "450px",
        height: "450px",
        boxShadow: "0px 0px 20px rgba(0,0,0,0.5)",
        borderRadius: "48.51px",
        opacity: 0.85,
      }}
    >
      {/* Icon at the top */}
      <div className="absolute top-20">
        <Image
          src={`/assets/landing/events/${event.name
            .toLowerCase()
            .replace(/ /g, "-")}.png`}
          alt="Logo"
          height={90}
          width={70}
        />
      </div>

      <h1
        className="text-xl font-WallpoetFont text-green-500 text-center pt-2"
        style={{
          textTransform: "uppercase",
          fontSize: "26px",
          marginTop: event.name.length > 15 ? "120px" : "100px",
          color: "#E4F676",
          width: "270px",
          lineHeight: "2.5rem",
          overflowWrap: "break-word",
        }}
      >
        {event.name}
      </h1>

      {/* Quote */}
      <p
        className={`text-center text-sm text-yellow-400 mt-4 px-6 ${font.className}`}
        style={{
          fontWeight: "400",
          lineHeight: "32px",
          textAlign: "center",
          overflowWrap: "break-word",
          width: "300px",
        }}
      >
        &ldquo;{event.tagline}&rdquo;
      </p>

      {/* View Button */}
      <button
        className="mt-6 bg-green-500 text-black font-WallpoetFont py-2 px-4 rounded-full"
        style={{
          backgroundColor: "#549F88",
          fontSize: "20px",
          width: "137px",
          height: "43px",
          borderRadius: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 20px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
        onClick={handleViewClick}
      >
        VIEW
      </button>
    </div>
  );
};

export default EventCard;
