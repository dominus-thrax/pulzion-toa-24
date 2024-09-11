import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; // Import LinkedIn icon
import Particles from '@/components/magicui/particles';

export default function Home() {
  return (


    <div className='text-white'>
        <Particles
        className="absolute inset-0"
        quantity={200}
        size={1.0}
        ease={80}
        color="#ffffff"
        refresh
      />
      <section className="py-12 bg-black sm:py-16 lg:py-20"> 
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">WEB TEAM</h2>
          </div>

          {/* First row with 2 circles */}
          <div className="grid max-w-6xl grid-cols-2 px-20 mx-auto mt-12 text-center sm:px-0 md:mt-20 gap-x-8 gap-y-12 lg:gap-x-16 xl:gap-x-20">
            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://media.licdn.com/dms/image/v2/D4D35AQEftkqB0B7RJQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1720061479289?e=1726682400&v=beta&t=J8CruQiZoHwraONAoy46UrlWFGKyi8A5gRYW6Mdh6hc" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Devashish Bhirdi</p>
              <p className="mt-2 text-base font-normal text-white font-pj">EMS Frontend Lead </p>
              <a href="https://www.linkedin.com/in/devashish-bhirdi-53835529a/?trk=opento_nprofile_details" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://media.licdn.com/dms/image/v2/D4D03AQH8k909fMKRwQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1697737619560?e=1731542400&v=beta&t=TQ4vu7E_VLGm7SaoAngAvNXAnnZ3QaAZh_dNj_Xg0Kc" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Shreekar Gade</p>
              <p className="mt-2 text-base font-normal text-white font-pj">EMS Frontend Lead</p>
              <a href="https://www.linkedin.com/in/shreekar-gade-2a9937257/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Second row with 4 circles */}
          <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-8 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-1.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
              <p className="mt-2 text-base font-normal text-white font-pj">Co founder, Chairman, Executive Director</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
              <p className="mt-2 text-base font-normal text-white font-pj">Co founder, Chairman, Executive Director</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
              <p className="mt-2 text-base font-normal text-white font-pj">Co founder, Chairman, Executive Director</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
              <p className="mt-2 text-base font-normal text-white font-pj">Co founder, Chairman, Executive Director</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-8 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-1.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
              <p className="mt-2 text-base font-normal text-white font-pj">Co founder, Chairman, Executive Director</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
              <p className="mt-2 text-base font-normal text-white font-pj">Co founder, Chairman, Executive Director</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
              <p className="mt-2 text-base font-normal text-white font-pj">Co founder, Chairman, Executive Director</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
              <p className="mt-2 text-base font-normal text-white font-pj">Co founder, Chairman, Executive Director</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-8 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-1.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
              <p className="mt-2 text-base font-normal text-white font-pj">Co founder, Chairman, Executive Director</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
              <p className="mt-2 text-base font-normal text-white font-pj">Co founder, Chairman, Executive Director</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
              <p className="mt-2 text-base font-normal text-white font-pj">Co founder, Chairman, Executive Director</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Jerome Bell</p>
              <p className="mt-2 text-base font-normal text-white font-pj">Co founder, Chairman, Executive Director</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-12 sm:mt-16">
            <svg className="w-auto h-4 mx-auto text-white" viewBox="0 0 172 16" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
              {/* Custom SVG content */}
            </svg>
          </div>

          <div className="max-w-3xl mx-auto mt-12 space-y-8 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:mt-16 sm:gap-x-16">
            {/* Additional content if needed */}
          </div>
        </div>






{/*Pulzion leads*/}


        <h2 className="text-3xl font-bold text-center text-white sm:text-4xl xl:text-5xl font-pj">Pulzion'24 leads</h2>


        <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-8 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://media.licdn.com/dms/image/v2/D4D03AQHWxrvbNwh1nA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712215975316?e=1731542400&v=beta&t=zl_POajfrpiPrp23fOZbxybtrDqkr9O3snpyxc1otUQ" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Aashlesh Wawge              </p>
              <p className="mt-2 text-base font-normal text-white font-pj">Overall Lead</p>
              <a href="https://www.linkedin.com/in/aashlesh-wawge-928a12277/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://media.licdn.com/dms/image/v2/D4D35AQGxGq_OKboLpQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1722874004888?e=1726682400&v=beta&t=5RW7GRQmB50IWtqPv6uJYYXqWWleUBUEWT7g93OAMEk" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Harsha Pareek</p>
              <p className="mt-2 text-base font-normal text-white font-pj">Overall Lead</p>
              <a href="https://www.linkedin.com/in/harshapareek/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://media.licdn.com/dms/image/v2/D4D03AQFEuBmZ-bU1Ew/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1680755247308?e=1731542400&v=beta&t=vT2L_UCMOec596UfImu_EuMxrDDFL0tE8AuxgE7-NWg" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Tanish Khot</p>
              <p className="mt-2 text-base font-normal text-white font-pj">Overall Lead</p>
              <a href="https://www.linkedin.com/in/tanishkhot/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Anjali Changedia</p>
              <p className="mt-2 text-base font-normal text-white font-pj">Overall Lead</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>



{/*Operational leads */}




          <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-8 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://media.licdn.com/dms/image/v2/D4D03AQHTGSCUDetmBQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1665287618022?e=1731542400&v=beta&t=_ETBh2gLlmYDzspMwzEbhvOeIH1phsnemGzkHSieWCI" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Aditya Uttarwar              </p>
              <p className="mt-2 text-base font-normal text-white font-pj">Operational Lead</p>
              <a href="https://www.linkedin.com/in/aditya-uttarwar-ab7795245/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://media.licdn.com/dms/image/v2/D4D35AQEsGxVna4vloQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1696680205324?e=1726686000&v=beta&t=Zs4kGFEVjKPgmzhg5_nw2gvHzTSVxmRCiKKSSkixYy8"alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Prabhu Anpat              </p>
              <p className="mt-2 text-base font-normal text-white font-pj">Operational Lead</p>
              <a href="https://www.linkedin.com/in/prabhu-anpat-40aa46263/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Madhura Pawar              </p>
              <p className="mt-2 text-base font-normal text-white font-pj">Operational Lead</p>
              <a href="https://www.linkedin.com/in/madhura-pawar-98b728291/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Atharva raut              </p>
              <p className="mt-2 text-base font-normal text-white font-pj">Operational Lead</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>



          {/*Budget Leads and social media leads  */}

          <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-8 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://media.licdn.com/dms/image/v2/D4D03AQFcf_pwN4st5w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718952562773?e=1731542400&v=beta&t=C64oCcT51n_bWezur0yiXqhvx1OHJtVnaT-12FOcmXU" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Neeraj Magdum              </p>
              <p className="mt-2 text-base font-normal text-white font-pj">Budget Lead</p>
              <a href="https://www.linkedin.com/in/neerajmagdum/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://media.licdn.com/dms/image/v2/D4D03AQEAL4nWJBrkqw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708853520219?e=1731542400&v=beta&t=GBbcA2H2MZu8k6s62R5MtqnRzeD3xNnuYdYpJvWxBgc" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Shreeya Daga </p>
              <p className="mt-2 text-base font-normal text-white font-pj">Budget Lead</p>
              <a href="https://www.linkedin.com/in/shreeya-daga/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://media.licdn.com/dms/image/v2/D5635AQEYdRvWgjxbjg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1723626924366?e=1726686000&v=beta&t=KRPEiwu0RDzH4b1K4KJVTTflHuw38IBDzvFFX_bxCkU" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Rishikesh Chaudhari </p>
              <p className="mt-2 text-base font-normal text-white font-pj"> Social Media Lead</p>
              <a href="https://www.linkedin.com/in/rushikeshchaudhari/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://media.licdn.com/dms/image/v2/D4D03AQHMXWYSNmSUqg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1685126244801?e=1731542400&v=beta&t=y7KBt75iO7cdmkXiayppKgIG3LNU3vpFx4cm-NNcQf0" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Shraddha Gangurde </p>
              <p className="mt-2 text-base font-normal text-white font-pj"> Social Media Lead</p>
              <a href="https://www.linkedin.com/in/shraddha-gangurde-abb8941a5/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>
            </div>


{/* Schedule and Marketing leads*/}



<div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-8 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
<div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://media.licdn.com/dms/image/v2/D4D35AQGUndIOhOApiQ/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1713018652297?e=1726686000&v=beta&t=bAxh45o8R3B6U9PY7fUZ4wPMCF0sxcHUFhRowADUB6k" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Anish Kachane</p>
              <p className="mt-2 text-base font-normal text-white font-pj">Marketing Lead</p>
              <a href="https://www.linkedin.com/in/anishkhachane/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://media.licdn.com/dms/image/v2/D5603AQH1Cr2fdGgVlw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1682744683441?e=1731542400&v=beta&t=eeGVhqiJexLpi7BujMIuuxfjfkkssZ1a90mjTo-Gljo" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Kartik Tichkule</p>
              <p className="mt-2 text-base font-normal text-white font-pj">Marketing Lead</p>
              <a href="https://www.linkedin.com/in/kartik-tichkule/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://media.licdn.com/dms/image/v2/D4D03AQGXPh3hkq39XA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696416191264?e=1731542400&v=beta&t=Jtipu-dfxvY_EN-SR3SO8hDFGpxkSdhQZWZ8md-Kang" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Sameer Dhande </p>
              <p className="mt-2 text-base font-normal text-white font-pj"> Marketing Lead</p>
              <a href="https://www.linkedin.com/in/sameer-dhande-51a02b257/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://media.licdn.com/dms/image/v2/D4E03AQEk-dyo6VAGMg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698369932782?e=1731542400&v=beta&t=4TzWtzwSu_Cu5uagpLhOFcEGBG8v9NI_CoRWFA9wVTo" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Manasi Waghe</p>
              <p className="mt-2 text-base font-normal text-white font-pj"> Marketing Lead</p>
              <a href="https://www.linkedin.com/in/manasi-waghe/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>
            </div>

            <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-8 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://media.licdn.com/dms/image/v2/D4D03AQEaP25Z7mkusw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1668830580153?e=1731542400&v=beta&t=V9i2b7cIqzBqN3TRlTIG-lmODXDodhDa5jbMUh50wf4" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Ayush Deshmukh </p>
              <p className="mt-2 text-base font-normal text-white font-pj">Marketing Lead</p>
              <a href="https://www.linkedin.com/in/ayush-deshmukh-07b46b257/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Vidhi Koul              </p>
              <p className="mt-2 text-base font-normal text-white font-pj">Marketing Lead</p>
              <a href="https://www.linkedin.com/in/shreeya-daga/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Sarvesh Joshi               </p>
              <p className="mt-2 text-base font-normal text-white font-pj"> Marketing Lead</p>
              <a href="https://www.linkedin.com/in/rushikeshchaudhari/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Gaurav Waghmare</p>
              <p className="mt-2 text-base font-normal text-white font-pj"> Video Editing  Lead</p>
              <a href="https://www.linkedin.com/in/shraddha-gangurde-abb8941a5/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>
            </div>
      

{/*Publicity leads*/}
<div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-8 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-1.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Pratik Survase              </p>
              <p className="mt-2 text-base font-normal text-white font-pj">Publicity Lead</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Ishwari Gadewar              </p>
              <p className="mt-2 text-base font-normal text-white font-pj">Publicity Lead</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Pranav Kale              </p>
              <p className="mt-2 text-base font-normal text-white font-pj">Publicity Lead</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Rutuja Gangawane              </p>
              <p className="mt-2 text-base font-normal text-white font-pj">Publicity Lead</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>


{/*decoration Leads*/}

<div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-8 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-1.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Vedika Thakur              </p>
              <p className="mt-2 text-base font-normal text-white font-pj">Decoration Lead</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Prathamesh Naik              </p>
              <p className="mt-2 text-base font-normal text-white font-pj">Decoration Lead</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Ajinkya Kachare              </p>
              <p className="mt-2 text-base font-normal text-white font-pj">Decoration Lead</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Sonali Birajdar              </p>
              <p className="mt-2 text-base font-normal text-white font-pj">Decoration Lead</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
                        
                        {/* Content and design leads */}


<div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-8 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-1.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Anjali rambhad              </p>
              <p className="mt-2 text-base font-normal text-white font-pj">Content Lead</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Farkhanda Dalal              </p>
              <p className="mt-2 text-base font-normal text-white font-pj">Content Lead</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Diya Bhat              </p>
              <p className="mt-2 text-base font-normal text-white font-pj">Design Lead</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Soham Phatak              </p>
              <p className="mt-2 text-base font-normal text-white font-pj">Design Lead</p>
              <a href="https://linkedin.com/in/jerome-bell" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>

{/* Flashmob leads*/}

<div className="grid max-w-6xl grid-cols-2 px-20 mx-auto mt-12 text-center sm:px-0 md:mt-20 gap-x-8 gap-y-12 lg:gap-x-16 xl:gap-x-20">
            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Tanisha Jain              </p>
              <p className="mt-2 text-base font-normal text-white font-pj">Flashmob Lead </p>
              <a href="https://www.linkedin.com/in/devashish-bhirdi-53835529a/?trk=opento_nprofile_details" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>

            <div>
              <img className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 " src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png" alt="" />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">Tanvi Pattewar              </p>
              <p className="mt-2 text-base font-normal text-white font-pj">Flashmob Lead</p>
              <a href="https://www.linkedin.com/in/shreekar-gade-2a9937257/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300">
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>
          </div>



      </section>
    </div>
  );
}
