import React from 'react'

// import local from '../src/font'

// import logo from 'src/components/Hero'

const Hero = () => {

  let logo = document.querySelector('#logo')
let bg = document.querySelector('#bg2')

window.addEventListener('scroll', ()=>{
    let value = scrollY;
    logo.style.marginTop = value * 2.7 + 'px';
    // robo.style.marginRight = value * 2.5 + 'px';
    
  } )
  return (
    <div className='static'>
      <div className="container h-auto max-w-full m-0 p-0">
      <div className="vid w-full h-full">
        <video className="z-[-1] h-[100%] w-[100%] absolute object-cover rotate-180 justify-center bg-blend-darken" src="src\components\Hero\bg_video.mp4"  autoplay="{true}" loop muted></video>
        </div>
      <nav className='z-10 flex justify-between bg-blend-lighten'>
            <div className="logo px-10 py-10 transition-all duration-300 hover:scale-110">
                <img src="src\components\Hero\logo.png" alt="" />
            </div>
            <div className="text-white mb-8 flex justify-center items-center gap-24">
                <a className='font-diary hover:bg-[#e7b14c]  hover:text-green-900 px-3 py-3 rounded-2xl text-xl' href="#">HOME</a>
                <a className='font-diary hover:bg-[#e7b14c] hover:text-green-900 px-3 py-3 rounded-2xl text-xl' href="#">ABOUT</a>
                <a className='font-diary hover:bg-[#e7b14c] hover:text-green-900 px-3 py-3 rounded-2xl text-xl' href="#">GLIMPSES</a>
                <a className='font-diary hover:bg-[#e7b14c] hover:text-green-900 px-3 py-3 rounded-2xl text-xl' href="#">SPONSORS</a>
                <a className='font-diary hover:bg-[#e7b14c] hover:text-green-900 px-3 py-3 rounded-2xl text-xl' href="#">EVENTS</a>
                <a className='font-diary hover:bg-[#e7b14c] hover:text-green-900 px-3 py-3 rounded-2xl text-xl' href="#">TEAM</a>
            </div>
           <div className='mr-10 mt-8'>
           <button className='text-green-700 font-diary px-5 py-4 rounded-2xl border-[#27D342] text-xl hover:bg-green-700 hover:text-white hover:border-white'>LOGIN</button>
           </div>
        </nav>
       
        {/* <img class="absolute h-auto max-w-full" src="src\components\Hero\bg2.png" alt="image description"/> */}
        {/* <img src="src\components\Hero\bg1.png" className='absolute z-[-1] h-auto' alt="" /> */}
        
        {/* <img src="src\components\Hero\download(2).png"/>
    <img src="src\components\Hero\download(3).png" id="mountain-right"/> */}
    <div className="logo h-full mt-56 flex justify-center items-center">
    <img className=" px-10 transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-[#26d241]  " src="src\components\Hero\logo.svg" id="logo"/></div>
    <img className="absolute top-[70%] border-t-4 border-green-500 object-cover w-[100vw]" src="src\components\Hero\file1.png" id="bg2"/>
    
      </div>
    </div>
  )
}

export default Hero
