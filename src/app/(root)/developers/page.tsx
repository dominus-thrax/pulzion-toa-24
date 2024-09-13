import React from "react";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon
import Image from "next/image"; // Import Next.js Image component
import Particles from "@/components/magicui/particles";
import { teamMembers } from "@/data/data";

export default function Home() {
  return (
    <div className="relative text-white h-content">
      {/* Make sure Particles have a lower z-index */}
      {/* <Particles
        className="fixed inset-0 z-0 min-h-screen"
        quantity={200}
        size={1}
        ease={80}
        color="#ffffff"
        refresh
      /> */}

      {/* Ensure content has a higher z-index */}
      <section className="relative py-12 bg-transparent sm:py-16 lg:py-20 h-content">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Image
              src="/assets/teams/Web team.png"
              alt="web team"
              width={700}
              height={250}
            />
          </div>

          {/* Grid for team members */}
          <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 md:mt-20 gap-x-8 gap-y-12 lg:gap-x-16 xl:gap-x-20 lg:grid-cols-4 md:grid-cols-2">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative">
                <Image
                  className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44"
                  src={member.image} // Correct path for Next.js public folder
                  alt={`${member.name} profile`}
                  width={176} // Set the width of the image
                  height={176} // Set the height of the image
                  quality={100} // Optionally set image quality
                />
                <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">
                  {member.name}
                </p>
                <div className="mt-2 text-base font-normal text-white font-pj">
                  {member.position.map((role, idx) => (
                    <p key={idx} className="mb-1">
                      {role}
                    </p>
                  ))}
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300"
                >
                  <FaLinkedin size={20} className="mr-2" />
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Pulzion leads */}
        {/* <div className="relative flex justify-center mt-5">
          <Image
            src={`/assets/teams/Pulzion'24 Leads.png`}
            alt="Pulzion Leads"
            width={500}
            height={150}
          />
        </div>
        <div className="relative grid max-w-6xl grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-20 mx-auto mt-12 text-center sm:px-0 md:mt-20 gap-x-8 gap-y-12 lg:gap-x-16 xl:gap-x-20">
          {Leads.map((member, index) => (
            <div key={index}>
              <Image
                className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44"
                src={member.image}
                alt={`${member.name} profile`}
                width={176}
                height={176}
                quality={100}
              />
              <p className="mt-5 text-lg font-bold text-white sm:text-xl sm:mt-8 font-pj">
                {member.name}
              </p>
              <div className="mt-2 text-base font-normal text-white font-pj">
                {member.position.map((role, idx) => (
                  <p key={idx} className="mb-1">
                    {role}
                  </p>
                ))}
              </div>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-3 text-blue-500 hover:text-blue-300"
              >
                <FaLinkedin size={20} className="mr-2" />
                LinkedIn
              </a>
            </div>
          ))}
        </div> */}
      </section>
    </div>
  );
}
