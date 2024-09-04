"use client"
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// const VerticalText = ({ text }) => {
//   return (
//     <div className="flex flex-col items-center">
//       {text.split('').map((char, index) => (
//         <span key={index} className="text-3xl">
//           {char}
//         </span>
//       ))}
//     </div>
//   );
// };

const Event = ({ name }) => (
  <div className="flex items-center justify-center h-screen">
    <h1 className="text-4xl font-bold">{name}</h1>
  </div>
);
const Timeline = () => {
  const navigate = useNavigate();

  const events = [
    { name: 'CODEX', path: '/codex' },
    { name: 'CODELICIOUS', path: '/codelicious' },
    { name: 'HIRE HUSTLE', path: '/hire-hustle' },
    { name: 'WEBNAPP', path: '/webnapp' },
    { name: 'DATAQUEST', path: '/dataquest' },
    { name: 'COMPUTE-N-COMPETE', path: '/compute-n-compete' },
  ];

  const nonTechEvents = [
    { name: 'NON TECH 1', path: '/non-tech-1' },
    { name: 'NON TECH 2', path: '/non-tech-2' },
    { name: 'NON TECH 3', path: '/non-tech-3' },
    { name: 'NON TECH 4', path: '/non-tech-4' },
    { name: 'NON TECH 5', path: '/non-tech-5' },
    { name: 'NON TECH 6', path: '/non-tech-6' },
  ];

  return (
    <div className='bg-black'>
    <div className='flex justify-center text-[#cfc36d] font-diary pt-12 '>
      <h1 className='text-[50px] mb-12'>EVENTS</h1>
      </div>
    <div className="flex justify-center space-x-[32rem] items-center text-green-300">
      <div className="flex items-center">
        <div className='font-VT323 text-[54px] text-yellow-300 mb-4 mr-32'>
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
        <img className='w-[50px] h-[900px] pt-6 mr-4' src="src\components\Events\Group 84.png" alt="" />
        </div>
        <div className='flex flex-col space-y-24'>
        {events.map((event, index) => (
          <button
            key={index}
            className=""
            onClick={() => navigate(event.path)}
          >
            <div className="flex text-[#00910E] font-wallpoet hover:text-[#AD8439] py-6">{event.name}</div>
          </button>
          
        ))}
        </div>
      </div>  
      <div className="flex items-center">
       
        <div className='flex flex-col space-y-24'>
        {nonTechEvents.map((event, index) => (
          <button
            key={index}
            className=""
            onClick={() => navigate(event.path)}
          >
            <div className="text-[#00910E] font-wallpoet hover:text-[#AD8439] py-8">{event.name}</div>
          </button>
        ))}
        </div>
        <div>
        <img className='w-[50px] h-[1000px] ml-4 pt-2' src="src\components\Events\Group 84.png" alt="" />
        </div>
        <div className='font-VT323 text-[50px] text-yellow-300 mb-4 ml-32'>
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

function App1() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Timeline />} />
        <Route path="/codex" element={<Event name="CODEX" />} />
        <Route path="/codelicious" element={<Event name="CODELICIOUS" />} />
        <Route path="/hire-hustle" element={<Event name="HIRE HUSTLE" />} />
        <Route path="/webnapp" element={<Event name="WEBNAPP" />} />
        <Route path="/dataquest" element={<Event name="DATAQUEST" />} />
        <Route path="/compute-n-compete" element={<Event name="COMPUTE-N-COMPETE" />} />
        <Route path="/non-tech-1" element={<Event name="NON TECH 1" />} />
        <Route path="/non-tech-2" element={<Event name="NON TECH 2" />} />
        <Route path="/non-tech-3" element={<Event name="NON TECH 3" />} />
        <Route path="/non-tech-4" element={<Event name="NON TECH 4" />} />
        <Route path="/non-tech-5" element={<Event name="NON TECH 5" />} />
        <Route path="/non-tech-6" element={<Event name="NON TECH 6" />} />
      </Routes>
    </Router>
  );
}

export default App1;
