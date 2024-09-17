import React from 'react';
import { IconType } from 'react-icons';
import Image from 'next/image';

type Data = {
  title: string;
  description: string;
  imageUrl: string;
};

type TimelineProps = {
  datas: Data[];
  icon: IconType;
};

const Timeline: React.FC<TimelineProps> = ({ datas, icon }) => {
  return (
    <div className="w-full mx-auto my-10">
      <div className="flex flex-col items-center">
        {/* Event */}
        {datas.map((data, index) => (
          <div
            key={index}
            className={`flex flex-col items-center w-full animate-slide-in ${
              index % 2 === 0 ? 'animate-fade-in-right' : 'animate-fade-in-left'
            }`}
          >
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              } justify-center items-center`}
            >
              <div className="w-10/12 md:w-16 h-20 md:h-16 bg-[#edaa42] text-white rounded-t-xl md:rounded-full flex items-center justify-center relative z-10 shadow-lg">
                {React.createElement(icon, { size: 32 })}
              </div>
              <div className="hidden md:block bg-pink-500 w-5 h-[2px]" />
              <div className="flex flex-col md:flex-row-reverse items-center mb-10 rounded-xl relative w-10/12 md:w-8/12 h-96 md:h-40 transition-transform duration-300">
                <div className="bg-transparent rounded-xl w-full flex flex-col md:flex-row-reverse h-full md:justify-center items-center">
                  <div className="bg-pink-300 text-purple-600 font-semibold text-lg h-20 md:h-full w-full md:w-1/6 rounded-xl shadow-md mb-0 md:ml-4 relative">
                    <Image
                      src={data.imageUrl}
                      alt="image"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      className="md:rounded-xl"
                    />
                  </div>
                  <div className="w-full md:w-5/6 px-3 h-40">
                    <h3 className="text-lg md:text-xl font-semibold text-white uppercase">{data.title}</h3>
                    <p className="mt-2 md:h-28 h-60 overflow-y-scroll no-scrollbar text-white">{data.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`hidden lg:block absolute bg-pink-500 w-[2px] h-20 translate-y-32 ${
                index % 2 === 0 ? 'right-60' : 'left-60'
              } ${index === datas.length - 1 ? 'lg:hidden' : ''}`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
