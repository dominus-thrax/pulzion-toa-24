import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Particles from '../magicui/particles';
import Link from 'next/link'; // Import Link for navigation

const events = [
  { name: 'CODEX', path: '/events/23', image: '/assets/landing/events/t1.png' },
  { name: 'CODELICIOUS', path: '/events/25', image: '/assets/landing/events/t2.png' },
  { name: 'COMPUTE-N-COMPETE', path: '/events/compute-n-compete', image: '/assets/landing/events/t3.png' },
  { name: 'DATAQUEST', path: '/events/18', image: '/assets/landing/events/t4.png' },
  { name: 'WEBNAPP', path: '/events/17', image: '/assets/landing/events/t5.png' },
  { name: 'ELECTROQUEST', path: '/events/15', image: '/assets/landing/events/t6.png' },
];

const nonTechEvents = [
  { name: 'HIRE HUSTLE', path: '/events/22', image: '/assets/landing/events/nt1.png' },
  { name: 'DEXTROUS', path: '/events/21', image: '/assets/landing/events/nt2.png' },
  { name: 'FANDOM', path: '/events/24', image: '/assets/landing/events/nt3.png' },
  { name: 'INSIGHT', path: '/events/20', image: '/assets/landing/events/nt4.png' },
  { name: 'FREEZE THE SECOND', path: '/events/19', image: '/assets/landing/events/nt5.png' },
  { name: 'PAPER PRESENTATION', path: '/events/paper-presentation', image: '/assets/landing/events/nt6.png' },
];

const VerticalText = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {text.split('').map((char: string, index: number) => (
        <span key={index} className="text-sm md:text-3xl p-2">{char}</span>
      ))}
    </div>
  );
};

const Events = () => {
  return (
    <div className='bg-black text-white relative w-full min-h-content pt-10'>
      <Particles
        className="absolute inset-0 z-0"
        quantity={200}
        size={1.0}
        ease={80}
        color="#ffffff"
        refresh
      />
      <div className='text-[#cfc36d] text-center text-2xl md:text-6xl'>
        EVENTS
      </div>
      <div className="relative z-10 grid grid-cols-2 w-full h-full">
        {/* Left Section: Non-Technical Events */}
        <div className='grid grid-cols-4'>
          {/* NonTechnical Vertical Text: 1/4 of the space */}
          <div className='col-span-1 justify-self-center'>
            <VerticalText text="NONTECHNICAL" />
          </div>

          {/* Non-Technical Timeline: 3/4 of the space */}
          <div className="col-span-3">
            <Timeline position="right" sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}>
              {nonTechEvents.map((event, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        backgroundColor: '#000', 
                        backgroundImage: `url(${event.image})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat', 
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        // border: '2px solid #ffffff', // Optional white border
                      }}
                    />
                    {index < nonTechEvents.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent sx={{ width: '300px', height: '100px' }}>
                    <Link href={event.path}>
                      <span className="text-white hover:no-underline hover:text-[#94fbcf] text-xs md:text-lg">{event.name}</span>
                    </Link>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>

        {/* Right Section: Technical Events */}
        <div className="grid grid-cols-4">
          {/* Technical Timeline: 3/4 of the space */}
          <div className="col-span-3 mt-10">
            <Timeline position="left" sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}>
              {events.map((event, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot
                      sx={{
                        backgroundColor: '#000',
                        backgroundImage: `url(${event.image})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        // border: '2px solid #ffffff', // Optional white border
                      }}
                    />
                    {index < events.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent sx={{ width: '300px', height: '100px' }}>
                    <Link href={event.path}>
                      <span className="text-white hover:no-underline hover:text-[#94fbcf] text-xs md:text-lg">{event.name}</span>
                    </Link>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>

          {/* Technical Vertical Text: 1/4 of the space */}
          <div className='col-span-1 justify-self-center'>
            <VerticalText text="TECHNICAL" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
