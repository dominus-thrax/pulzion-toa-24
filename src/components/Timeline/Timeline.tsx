// import { useRouter } from 'next/router';

// interface Event {
//   name: string;
//   path: string;
// }

// const Timeline = () => {
//   const router = useRouter();

//   const events: Event[] = [
//     { name: 'CODEX', path: '/events/codex' },
//     { name: 'CODELICIOUS', path: '/events/codelicious' },
//     { name: 'HIRE HUSTLE', path: '/events/hire-hustle' },
//     { name: 'WEBNAPP', path: '/events/webnapp' },
//     { name: 'DATAQUEST', path: '/events/dataquest' },
//     { name: 'COMPUTE-N-COMPETE', path: '/events/compute-n-compete' },
//   ];

//   const nonTechEvents: Event[] = [
//     { name: 'NON TECH 1', path: '/events/non-tech-1' },
//     { name: 'NON TECH 2', path: '/events/non-tech-2' },
//     { name: 'NON TECH 3', path: '/events/non-tech-3' },
//     { name: 'NON TECH 4', path: '/events/non-tech-4' },
//     { name: 'NON TECH 5', path: '/events/non-tech-5' },
//     { name: 'NON TECH 6', path: '/events/non-tech-6' },
//   ];

//   return (
//     <div className="bg-black">
//       <div className="flex justify-center text-[#cfc36d] font-diary pt-12">
//         <h1 className="text-[50px] mb-12">EVENTS</h1>
//       </div>
//       <div className="flex justify-center space-x-[32rem] items-center text-green-300">
//         <div className="flex items-center">
//           <div className="font-VT323 text-[54px] text-yellow-300 mb-4 mr-32">
//             <div>T</div>
//             <div>E</div>
//             <div>C</div>
//             <div>H</div>
//             <div>N</div>
//             <div>I</div>
//             <div>C</div>
//             <div>A</div>
//             <div>L</div>
//           </div>
//           <div>
//             <img
//               className="w-[50px] h-[900px] pt-6 mr-4"
//               src="/images/Group84.png"
//               alt="Vertical Line"
//             />
//           </div>
//           <div className="flex flex-col space-y-24">
//             {events.map((event, index) => (
//               <button
//                 key={index}
//                 onClick={() => router.push(event.path)}
//               >
//                 <div className="flex text-[#00910E] font-wallpoet hover:text-[#AD8439] py-6">{event.name}</div>
//               </button>
//             ))}
//           </div>
//         </div>
//         <div className="flex items-center">
//           <div className="flex flex-col space-y-24">
//             {nonTechEvents.map((event, index) => (
//               <button
//                 key={index}
//                 onClick={() => router.push(event.path)}
//               >
//                 <div className="text-[#00910E] font-wallpoet hover:text-[#AD8439] py-8">{event.name}</div>
//               </button>
//             ))}
//           </div>
//           <div>
//             <img
//               className="w-[50px] h-[1000px] ml-4 pt-2"
//               src="/images/Group84.png"
//               alt="Vertical Line"
//             />
//           </div>
//           <div className="font-VT323 text-[50px] text-yellow-300 mb-4 ml-32">
//             <div>N</div>
//             <div>O</div>
//             <div>N</div>
//             <div>T</div>
//             <div>E</div>
//             <div>C</div>
//             <div>H</div>
//             <div>N</div>
//             <div>I</div>
//             <div>C</div>
//             <div>A</div>
//             <div>L</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timeline;
// import React from 'react';
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';

// type TimelineElement = {
//   key: number;
//   date: string;
//   icon: 'work' | 'school' | 'custom1' | 'custom2';
//   title: string;
//   location: string;
//   description: string;
//   buttonText?: string;
// };

// const timelineElements: TimelineElement[] = [
//   {
//     key: 1,
//     date: 'January 2023',
//     icon: 'work',
//     title: 'Started New Job',
//     location: 'New York, NY',
//     description: 'Started a new job as a software engineer at XYZ Corp.',
//     buttonText: 'View Details',
//   },
//   // Add more elements here
// ];

// const iconStyles = {
//   work: { background: '#06D6A0' },
//   school: { background: '#f9c74f' },
//   custom1: { background: '#FF6347' },
//   custom2: { background: '#4682B4' },
//   default: { background: '#E0E0E0' },
// };

// const iconPaths = {
//   work: '/Contact Us/facebook.svg',
//   school: '/Contact Us/facebook.svg',
//   custom1: '/Contact Us/facebook.svg',
//   custom2: '/Contact Us/facebook.svg',
//   default: '/default-icon.svg',
// };

// const TimelineIcon: React.FC<{ iconType: TimelineElement['icon'] }> = ({ iconType }) => (
//   <img src={iconPaths[iconType] || iconPaths.default} alt={`${iconType} Icon`} />
// );

// const TimelineElementComponent: React.FC<{ element: TimelineElement }> = ({ element }) => {
//   const { key, date, icon, title, location, description, buttonText } = element;
//   const showButton = Boolean(buttonText);

//   return (
//     <VerticalTimelineElement
//       key={key}
//       date={date}
//       dateClassName="date"
//       iconStyle={iconStyles[icon] || iconStyles.default}
//       icon={<TimelineIcon iconType={icon} />}
//     >
//       <h3 className="vertical-timeline-element-title">{title}</h3>
//       <h5 className="vertical-timeline-element-subtitle">{location}</h5>
//       <p id="description">{description}</p>
//       {showButton && (
//         <a
//           className={`button ${icon === 'work' ? 'workButton' : 'schoolButton'}`}
//           href="/"
//         >
//           {buttonText}
//         </a>
//       )}
//     </VerticalTimelineElement>
//   );
// };

// const Timeline: React.FC = () => (
//   <div>
//     <h1 className="title">Timeline</h1>
//     <VerticalTimeline>
//       {timelineElements.map(element => (
//         <TimelineElementComponent key={element.key} element={element} />
//       ))}
//     </VerticalTimeline>
//   </div>
// );

// export default Timeline;
