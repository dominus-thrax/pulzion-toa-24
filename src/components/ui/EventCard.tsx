"use client";

import React from "react";
interface EventCardProps {
    title: string;
    quote: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, quote }) => {
    const handleViewClick = () => {
        window.open('/event-details', '_blank');
    };

    return (
        <div
            className="relative flex flex-col items-center justify-center"
            style={{
                backgroundImage: "url('/images/EventCardbg1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "450px",
                height: "450px",
                boxShadow: "0px 0px 20px rgba(0,0,0,0.5)",
                borderRadius:"48.51px"  
            }}
        >
            {/* Icon at the top */}
            <div className="absolute top-16">
                <img
                    src="/images/CameraIcon.png"
                    alt="Logo"
                    className="w-30 h-35"
                    style={{
                        borderRadius: "10%",
                        padding: "10px",
                        marginTop: "0.9px",

                    }}
                />
            </div>

            <h1
                className="text-xl font-WallpoetFont text-green-500 text-center"
                style={{
                    textTransform: "uppercase",
                    fontSize: "2rem",
                    marginTop: "100px",
                    color: "#E4F676",
                    width:"270px",
                    lineHeight:"2.5rems",
                    overflowWrap:"break-word"
                }}
            >
                {title}
            </h1>
            {/* Quote */}
            <p
                className="text-center font-vt323 text-yellow-400 mt-4 px-6"
                style={{
                    fontSize: "32px",
                    fontWeight: "400",
                    lineHeight: "32px",
                    textAlign: "center",
                    top: "855px",
                    left: "881px",
                    overflowWrap:"break-word",
                    width:"300px",

                }}

            >
                &ldquo;{quote}&rdquo;

            </p>

            {/* View Button */}
            <button
                className="mt-6 bg-green-500 text-black font-vt323 py-2 px-4 rounded-full"
                style={{
                    backgroundColor: "#549F88",
                    fontSize: "32px",
                    width: "137px",
                    height: "43px",
                    borderRadius: "64px", // Elliptical shape
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
