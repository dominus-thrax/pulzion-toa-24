import React from "react";

const Card: React.FC = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-black"
      style={{
        backgroundImage: "url('/images/homebg.png')",
      }}
    >
      <div
        className="relative flex"
        style={{
          backgroundImage: "url('/images/cardbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "900px",
          height: "500px",
          top: "-15px",
        }}
      >
        <div
          className="flex-1 p-6 text-white relative z-10 ml-10"
          style={{
            top: "170px",
            left: "-90px",
          }}
        >
          <div className="flex flex-col items-center">
            <h2
              className="text-xl font-WallpoetFont text-green-500 mt-10"
              style={{
                fontSize: "1rem",
              }}
            >
              Price
            </h2>
            <p
              className="font-WallpoetFont text-[#88B788] mt-0 ml-20"
              style={{
                fontSize: "0.5rem",
                maxWidth: "230px",
                textAlign: "left",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
            <h2
              className="text-xl font-WallpoetFont text-left text-green-500 mb-0 mt-4"
              style={{ fontSize: "1rem", textAlign: "left" }}
            >
              Event Leads
            </h2>
            <p
              className="text-full font-WallpoetFont text-[#88B788]"
              style={{ fontSize: "0.5rem", textAlign: "center" }}
            >
              ABC: +91 1234567890
              <br />
              XYZ: +91 0987654321
            </p>
          </div>
        </div>

        <div
          className="flex-1 p-6 text-green-500 relative"
          style={{
            left: "-160px",
          }}
        >
          <img
            src="/images/camera.png"
            alt="Logo"
            className="absolute w-35 h-40"
            style={{ left: "-210px", top: "60px", zIndex: 20 }}
          />
          <h1
            className="mt-10 mb-8 ml-10 text-4xl text-white uppercase tracking-wider text-center font-WallpoetFont"
            style={{
              position: "absolute",
              left: "-60px",
              fontSize: "45px",
              top: "20px",
              zIndex: 0,
            }}
          >
            WEB+APP DEV
          </h1>
          <div className="mt-10 ml-1 w-1000" style={{ left: "-350px" }}>
            <div className="mb-0 mt-20">
              <h2
                className="font-WallpoetFont text-green-500"
                style={{
                  fontSize: "1rem",
                  top: "20px",
                  left: "-0px",
                }}
              >
                Mode: Online/Offline
              </h2>
            </div>
            <div className="mb-0">
              <h2
                className="font-WallpoetFont text-green-500 w=500"
                style={{ fontSize: "1rem" }}
              >
                Rules
              </h2>
              <p
                className="text-fill font-WallpoetFont text-[#88B788]"
                style={{ fontSize: "0.5rem" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
            </div>
            <div className="mb-0">
              <h2
                className="font-WallpoetFont text-green-500"
                style={{ fontSize: "1rem" }}
              >
                Rounds
              </h2>
              <p
                className="text-full font-WallpoetFont text-[#88B788]"
                style={{ fontSize: "0.5rem" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
            </div>
            <div className="mb-0">
              <h2
                className="font-WallpoetFont text-green-500"
                style={{ fontSize: "1rem" }}
              >
                Team Distribution
              </h2>
              <p
                className="text-full font-WallpoetFont text-[#88B788]"
                style={{ fontSize: "0.5rem" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
