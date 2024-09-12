import React from "react";

interface EventBannerProps {
  title: string;
}

const EventBanner: React.FC<EventBannerProps> = ({ title }) => {
  return (
    <div
      className="event-banner flex items-center justify-center"
      style={{
        backgroundImage: "url('/assets/events/Banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "430px",
        height: "139px",
        top: "301px",
        left: "769px",
        borderRadius: "48.51px 0px 0px 0px",
        border: "none",
        opacity: "0.8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
        marginLeft: "40px",
      }}
    >
      <h2
        className="banner-title text-white font-WallpoetFont font-bold text-2xl"
        style={{
          margin: 0,
          padding: 0,
          textAlign: "center",
          color: "#fff",
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "40.08px",
        }}
      >
        {title}
      </h2>
    </div>
  );
};

export default EventBanner;
