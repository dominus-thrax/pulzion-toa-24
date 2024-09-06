"use client";

import React from 'react';
import Link from 'next/link';

export const Event1: React.FC<{ name: string }> = ({ name }) => (
  <div className="flex items-center justify-center h-screen">
    <h1 className="text-4xl font-bold">{name}</h1>
  </div>
);

const Event: React.FC = () => {
  const events = [
    'CODEX',
    'CODELICIOUS',
    'HIRE HUSTLE',
    'WEBNAPP',
    'DATAQUEST',
    'COMPUTE-N-COMPETE',
  ];

  const nonTechEvents = [
    'NON TECH 1',
    'NON TECH 2',
    'NON TECH 3',
    'NON TECH 4',
    'NON TECH 5',
    'NON TECH 6',
  ];

  return (
    <div className='bg-black pr-10 pl-10'>
      <div className='flex justify-center text-[#cfc36d] font-diary pt-12'>
        <h1 className='text-[50px] mb-12'>EVENTS</h1>
      </div>
      <div className="flex justify-center space-x-[32rem] items-center text-green-300">
        <div className="flex items-center">
          <div className='text-[54px] text-yellow-300 mb-4 mr-32' style={{ fontFamily: 'Pulzionfont' }}>
            <div>T</div>
            <div>E</div>
            <div>C</div>
            <div>H</div>
            <div>N</div>
            <div>I</div>
            <div>C</div>
            <div>A</div>
            <div>L</div>
          </div>
          <div>
            <img className='w-[50px] h-[900px] pt-6 mr-4' src="/Events/Group 84.png" alt="" />
          </div>
          <div className='flex flex-col space-y-24'>
            {events.map((event, index) => (
              <Link
                key={index}
                href={`/events/${event.toLowerCase().replace(/ /g, '-')}`}
                className="flex text-[#00910E] font-wallpoet hover:text-[#AD8439] py-5"
              >
                {event}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <div className='flex flex-col space-y-24'>
            {nonTechEvents.map((event, index) => (
              <Link
                key={index}
                href={`/events/${event.toLowerCase().replace(/ /g, '-')}`}
                className="text-[#00910E] font-wallpoet hover:text-[#AD8439] py-5"
              >
                {event}
              </Link>
            ))}
          </div>
          <div>
            <img className='w-[50px] h-[1000px] ml-4 pt-2' src="/Events/Group 84.png" alt="" />
          </div>
          <div className='text-[50px] text-yellow-300 mb-4 ml-32' style={{ fontFamily: 'Pulzionfont' }}>
            <div>N</div>
            <div>O</div>
            <div>N</div>
            <div>T</div>
            <div>E</div>
            <div>C</div>
            <div>H</div>
            <div>N</div>
            <div>I</div>
            <div>C</div>
            <div>A</div>
            <div>L</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
