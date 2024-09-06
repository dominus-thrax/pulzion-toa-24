import Image from "next/image";
import "../../styles/font.css";

// const Sponsers = () => {
//   return (
//     <section className="flex flex-col items-center justify-center h-screen font-['Averia_Serif_Libre'] bg-black pt-40">
//       <h1 className="text-center mb-12 text-[#cfc36d] text-6xl" style={{ fontFamily: 'Pulzionfont' }}>
//         Our Sponsors
//       </h1>
//       <div className="grid grid-cols-3 gap-16 mb-16">
//         {["/Sponsers/budhani2.svg", "/Sponsers/budhani2.svg", "/Sponsers/budhani2.svg"].map((src, index) => (
//           <div
//             key={index}
//             className="relative flex justify-center items-center w-[min(250px,25vw)] h-[min(250px,25vw)] rounded-full text-white bg-black cursor-pointer transition-all ease-in-out duration-600 hover:bg-white group"
//             style={{
//               backgroundImage: `url('/Sponsers/Bckground.svg')`,
//               backgroundSize: "cover",
//             }}
//           >
//             <div className="absolute w-[110%] h-[110%] rounded-full border-[1px] border-transparent flex items-center justify-center animation-rotate">
//               <div className="w-[3px] h-[30px] bg-[#cfc36d] absolute top-0 rounded"></div>
//               <div className="w-[3px] h-[30px] bg-[#cfc36d] absolute bottom-0 rounded"></div>
//             </div>
//             <span className="absolute w-4/5 text-center text-xl font-bold select-none transition-opacity duration-600 group-hover:opacity-0">
//               Sponsor {index + 1}
//             </span>
//             <Image
//               src={src}
//               alt={`Sponsor ${index + 1}`}
//               fill
//               className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-600"
//             />
//           </div>
//         ))}
//       </div>
//       <div className="grid grid-cols-2 gap-16">
//         {["/Sponsers/budhani2.svg", "/Sponsers/budhani2.svg"].map((src, index) => (
//           <div
//             key={index + 3}
//             className="relative flex justify-center items-center w-[min(250px,25vw)] h-[min(250px,25vw)] rounded-full text-white bg-black cursor-pointer transition-all ease-in-out duration-600 hover:bg-white group"
//             style={{
//               backgroundImage: `url('/Sponsers/Bckground.svg')`,
//               backgroundSize: "cover",
//             }}
//           >
//             <div className="absolute w-[110%] h-[110%] rounded-full border-[1px] border-transparent flex items-center justify-center animation-rotate">
//               <div className="w-[3px] h-[30px] bg-[#cfc36d] absolute top-0 rounded"></div>
//               <div className="w-[3px] h-[30px] bg-[#cfc36d] absolute bottom-0 rounded"></div>
//             </div>
//             <span className="absolute w-4/5 text-center text-xl font-bold select-none transition-opacity duration-600 group-hover:opacity-0">
//               Sponsor {index + 4}
//             </span>
//             <Image
//               src={src}
//               alt={`Sponsor ${index + 4}`}
//               fill
//               className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-600"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Sponsers;

import React from "react";

const sponsors = [
  "/Sponsers/budhani2.svg",
  "/Sponsers/budhani2.svg",
  "/Sponsers/budhani2.svg",
  "/Sponsers/budhani2.svg",
  "/Sponsers/budhani2.svg",
  // Add more image paths if needed
];

const Sponsors: React.FC = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="container mx-auto py-8">
        <h1
          className="text-center mb-12 text-[#cfc36d] text-6xl"
          style={{ fontFamily: "PulzionFont1" }}
        >
          Our Sponsors
        </h1>

        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {sponsors.map((imagePath, index) => (
            <div
              key={index}
              className="flex justify-center relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-full h-full rounded-full border-r-[4px] border-primary animate-spin-slow z-10 border-x-emerald-400"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-[90%] h-[90%] rounded-full border-l-[4px] border-secondary animate-reverse-spin z-0 border-yellow-300"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <img
                  src={imagePath}
                  className="w-[70%] h-[70%] rounded-full"
                  alt={`Sponsor ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
