import React from "react";
import CarouselComponent from "../ui/CarouselComponent";

const Glimpses: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center text-center bg-black p-8 relative">
      {/* Background Image */}
      {/* <img
        src="/Glimpses/bg.png"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] bg-black"
        alt="Background"
      /> */}

      {/* Glimpses Title */}
      <h1
        className="text-center mb-12 text-[#cfc36d] text-6xl" style={{ fontFamily: 'Pulzionfont' }}>
        Glimpses
      </h1>

      {/* Carousel Container */}
      <div className="flex-grow w-full  flex justify-center items-center relative z-20">
            {/* <div
              className="w-full h-full flex items-center justify-center relative overflow-hidden"
              style={{ borderRadius: "3rem" }}
            > */}
              {/* Background Video (optional) */}
              {/* <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
              >
                <source src="/assets/bgvideo.mp4" type="video/mp4" />
              </video> */}

              {/* Carousel Component */}
              <CarouselComponent/>
            {/* </div> */}
        </div>
      </div>
  );
};

export default Glimpses;
