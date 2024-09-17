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

export default function MobileSliderCard({ events }: SliderCardProps) {
  const swiperRef = useRef<any>(null); // Reference to Swiper instance
  const [reverse, setReverse] = useState(false); // Track reverse direction

  const swiperStyle: React.CSSProperties = {
    width: "190px",
    height: "300px",
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
            startAutoplay();
          }
        }}
        className="mySwiper"
        style={swiperStyle}
      >
        {events.map((event) => (
          <SwiperSlide
            key={event.id}
            style={swiperSlideStyle}
            className="bg-black text-white rounded-md bborder-[0.3px] border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.6)]"
          >
            <div className="flex flex-col justify-between items-center p-2 rounded-lg h-full">
              <p className="text-xl font-bold">{event.name}</p>
              <img
                src={`/assets/EventsNew/${event.name}.png`}
                alt=""
                className=" w-10"
              />
              <p className="text-[8px] ">{event.description}</p>
              <p className="text-xs">Mode: {event.mode}</p>
              <p className="text-xs">Price: ₹{event.price}</p>
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
          right: -70px !important; /* Move the next button outside the card */
        }
        .swiper-button-prev {
          left: -70px !important; /* Move the previous button outside the card */
        }
      `}</style>
    </div>
  );
}
