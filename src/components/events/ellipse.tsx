import React from "react";

interface EllipseProps {
  dynamicContent: string;
}

const Ellipse: React.FC<EllipseProps> = ({ dynamicContent }) => {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: "73px",
        height: "55px",
        top: "335px",
        left: "15px",
        gap: "0px",
        opacity: "1",
      }}
    >
      <img
        src="/assets/events/Ellipse.png"
        alt="camera"
        className="w-full h-full object-contain"
      />
      <div
        className="absolute inset-0 flex items-center justify-center font-vt323 text-2xl text-center"
        style={{
          fontSize: "48px",
          fontWeight: "400",
          lineHeight: "48px",
          width: "73px",
          height: "55px",
          color: "#0E1E56",
          opacity: "1",
        }}
      >
        {dynamicContent}
      </div>
    </div>
  );
};

export default Ellipse;
