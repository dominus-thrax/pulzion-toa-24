import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import { EffectCards, Navigation, Autoplay } from "swiper/modules";

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

export default function SliderCard({ events }: SliderCardProps) {
  const swiperRef = useRef<any>(null);
  const [reverse, setReverse] = useState(false);

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
        grabCursor={true}
        modules={[EffectCards, Navigation, Autoplay]}
        navigation={true}
        allowTouchMove={false}
        autoplay={{
          delay: 3000,
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
        className="mySwiper"
        style={swiperStyle}
      >
        {events.map((event) => (
          <SwiperSlide
            key={event.id}
            style={swiperSlideStyle}
            className="bg-black text-white rounded-md border-2 border-yellow-500"
          >
            <div className="flex flex-col justify-between items-center p-2 rounded-lg h-full">
              <p className="text-2xl font-bold">{event.name}</p>
              <img src="/photo.png" alt="" className="w-24" />
              <p className="text-xs my-3">{event.description}</p>
              <p className="text-sm">Mode: {event.mode}</p>
              <p className="text-sm">Price: ₹{event.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style global jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
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
        .swiper-button-next {
          right: -200px !important; /* Move the next button outside the card */
        }
        .swiper-button-prev {
          left: -200px !important; /* Move the previous button outside the card */
        }
      `}</style>
    </div>
  );
}
