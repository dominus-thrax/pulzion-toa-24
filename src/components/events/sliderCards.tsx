import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import { EffectCards, Navigation, Autoplay } from "swiper/modules";
import { Button } from "../ui/button";
import Link from "next/link";
import localFont from "next/font/local";
import { EventType } from "@/types";
import { useAuth } from "@/context";
import { useRouter } from "next/navigation";

interface Event {
  id: number;
  name: string;
  description: string;
  mode: string;
  play: boolean;
  price: number;
}

interface SliderCardProps {
  events: Event[];
}

const font = localFont({
  src: "../../../public/font/BDSupperRegular.ttf",
});

const originText = localFont({
  src: "../../../public/fonts/OriginTech personal use.ttf",
});

export default function SliderCard({ events }: SliderCardProps) {
  const swiperRef = useRef<any>(null);
  const [reverse, setReverse] = useState(false);
  const router = useRouter();

  const swiperStyle: React.CSSProperties = {
    width: "400px",
    height: "500px",
    position: "relative",
  };

  const appStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    position: "relative",
  };

  const swiperSlideStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "18px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    height: "100%",
  };

  const startAutoplay = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <div style={appStyle}>
      <Swiper
        ref={swiperRef}
        effect={"cards"}
        grabCursor={false}
        modules={[EffectCards, Navigation, Autoplay]}
        navigation={true}
        allowTouchMove={true}
        autoplay={{
          delay: 8000,
          reverseDirection: reverse,
          disableOnInteraction: false,
        }}
        loop={false}
        onSlideChange={(swiper) => {
          if (swiper.isEnd && !reverse) {
            setReverse(true);
            startAutoplay();
          } else if (swiper.isBeginning && reverse) {
            setReverse(false);
            startAutoplay(); // Restart autoplay after reversing
          }
        }}
        className="mySwiper custom-swiper"
        style={swiperStyle}
      >
        {events.map((event) => {
          return (
            <SwiperSlide
              key={event.id}
              style={swiperSlideStyle}
              className="bg-black text-white rounded-md border-[0.3px] border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.6)]"
            >
              <div className="flex flex-col justify-between items-center p-2 rounded-lg h-full">
                <p className={`${font.className} text-3xl font-bold`}>
                  {event.name}
                </p>
                <img
                  src={
                    event.name === "Fandom-TMKOC" ||
                    event.name === "Fandom-Cricket" ||
                    event.name === "Fandom-Football" ||
                    event.name === "Fandom-Sitcom" ||
                    event.name === "Fandom-Anime"
                      ? `/assets/EventsNew/Fandom.png`
                      : `/assets/EventsNew/${event.name}.png`
                  }
                  alt="event image"
                  className="w-28"
                />
                <p className="text-sm my-3 font-medium overflow-hidden truncate text-clip md:line-clamp-6 text-wrap max-w-[20rem] w-full">{event.description}</p>
                <div>
                    <Button onClick={() => router.push(`/events/${event.id}`)} className="bg-[#E8AF49] rounded-xl hover:text-black hover:bg-yellow-600 my-2">
                      View
                    </Button>
                </div>
                <div>
                  <p className="text-lg">Mode: {event.mode}</p>

                  {event.price === 0 ? (
                    <p className="text-lg">Price: Free</p>
                  ) : (
                    <p className="text-lg">Price: ₹{event.price}</p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <style global jsx>{`
        /* Increase specificity for Swiper buttons */
        .custom-swiper .swiper-button-next,
        .custom-swiper .swiper-button-prev {
          color: yellow !important;
          top: 50% !important;
          width: 40px !important;
          height: 40px !important;
          margin-top: -20px !important;
          border-radius: 50% !important;
          background-color: rgba(0, 0, 0, 0.5) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }
        .custom-swiper .swiper-button-next {
          right: -150px !important; /* Adjust distance from card */
        }
        .custom-swiper .swiper-button-prev {
          left: -150px !important; /* Adjust distance from card */
        }
      `}</style>
    </div>
  );
}
