import React from "react";
import Image from "next/image";

export default function TechCard() {
  return (
    <div className="w-full flex flex-col text-[#94fbcf]">
      {/* Logo */}
      <div className="flex justify-center mt-[50px]">
        <Image
          src="/assets/Tech-Evolution/TechEvolution.png"
          alt="title"
          width={1000}
          height={300}
          className="relative z-10"
        />
      </div>

      {/* Pendulum */}
      <div className="flex justify-center relative h-[300px] overflow-visible">
        <div className="relative w-[200px] md:w-[300px] h-[300px]">
          <Image
            src="/assets/Tech-Evolution/pendulum.png"
            alt="Pendulum"
            width={150}
            height={300}
            className="absolute top-[-80px] left-[125px] transform origin-top animate-swing z-0"
          />
        </div>
      </div>

      {/* Images and Text */}
      <div className="relative w-full h-[1000px] flex flex-col justify-center items-center mt-[-350px]">
        {/* Gramophone Image Positioned in the Top Left Corner */}
        <div className="absolute top-0 left-0 p-4">
          <Image
            src="/assets/Tech-Evolution/gramophone.png"
            alt="gramophone"
            width={600}
            height={200}
          />
        </div>

        {/* Centered Text */}
        <div className="w-[40%] md:w-[40%] text-center mt-4">
          <h1 className="font-custom text-customColor text-xl md:text-3xl">
            Transistors
          </h1>
          <p className="font-custom text-customColor text-lg md:text-2xl mt-2">
            Invented in 1947, transistors replaced vacuum tubes with smaller,
            more efficient semiconductor devices. They enabled the
            miniaturization of electronics and the development of early
            computers like the IBM 7090.
          </p>
        </div>

        {/* Radio Image Positioned in the Top Right Corner */}
        <div className="absolute top-28 md:top-67 right-0 p-4">
          <Image
            src="/assets/Tech-Evolution/radio.png"
            alt="radio"
            width={500}
            height={400}
            layout="fixed"
            quality={100}
            className="rounded-xl "
          />
        </div>

        {/* Transistor Image Positioned Below Transistor Text on the Right */}
        <div className="absolute top-[500px] right-20 p-4">
          <Image
            src="/assets/Tech-Evolution/transitor.png"
            alt="transistor"
            width={250}
            height={250}
            layout="fixed"
            quality={100}
            className="rounded-xl "
          />
        </div>
      </div>

      {/* Typewriter Image Positioned in the Top Right Corner */}
      <div className="relative w-full h-[7000px] flex flex-col justify-center items-center mt-[-300px]">
        <div className="absolute top-0 left-0 p-4">
          <Image
            src="/assets/Tech-Evolution/typewriter.png"
            alt="typewriter"
            width={600}
            height={550}
            layout="fixed"
            quality={100}
            className="rounded-xl "
          />
        </div>

        <div className="absolute top-[350px] left-52 w-[40%] md:w-[40%] text-center">
          <h1 className="font-custom text-customColor text-xl md:text-3xl">
            First Computers
          </h1>
          <p className="font-custom text-customColor text-lg md:text-2xl mt-2">
            The ENIAC (1945) and UNIVAC I (1951) were among the first electronic
            general-purpose computers. These massive machines used vacuum tubes
            and punch cards, marking a shift to electronic systems from
            mechanical computing devices.
          </p>
        </div>
        <div className="absolute top-[85px] right-96 p-4">
          <Image
            src="/assets/Tech-Evolution/computer.png"
            alt="computer"
            width={350}
            height={300}
            layout="fixed"
            quality={100}
            className="rounded-xl "
          />
        </div>
        <div className="absolute top-[700px] left-5 p-4">
          <Image
            src="/assets/Tech-Evolution/semiconductor.png"
            alt="semiconductor"
            width={450}
            height={450}
            layout="fixed"
            quality={100}
            className="rounded-xl "
          />
        </div>
        <div className="absolute right-80 top-[800px] w-[40%] md:w-[40%] text-center mt-4">
          <h1 className="font-custom text-customColor text-xl md:text-3xl">
            Semiconductors
          </h1>
          <p className="font-custom text-customColor text-lg md:text-2xl mt-2">
            The 1960s saw the advancement of silicon semiconductors, crucial for
            modern electronics. They enabled the creation of integrated
            circuits, leading to more efficient and compact electronic devices.
          </p>
        </div>
        <div className="absolute right-0 top-[430px]">
          <div
            className="relative w-[450px] h-[450px] overflow-hidden"
            style={{ transform: "translateX(40%)" }}
          >
            <Image
              src="/assets/Tech-Evolution/vinyl.png"
              alt="vinyl"
              width={450}
              height={450}
              className="absolute inset-0 w-full h-full object-cover animate-rotate rounded-xl "
              layout="fixed"
              quality={100}
            />
          </div>
        </div>
        <div className="absolute top-[1000px] right-52 p-4">
          <Image
            src="/assets/Tech-Evolution/ic.jpg"
            alt="IC"
            width={350}
            height={200}
            layout="fixed"
            quality={100}
            className="rounded-xl "
          />
        </div>
        <div className="absolute left-80 top-[1150px] w-[40%] md:w-[40%] text-center mt-4">
          <h1 className="font-custom text-customColor text-xl md:text-3xl">
            Integrated Circuit
          </h1>
          <p className="font-custom text-customColor text-lg md:text-2xl mt-2">
            Introduced in the 1960s, ICs combined multiple transistors into a
            single chip, reducing size and cost. This technology was essential
            for the development of computers and consumer electronics.
          </p>
        </div>
        <div className="absolute top-[1200px] left-0 p-4">
          <Image
            src="/assets/Tech-Evolution/gui.png"
            alt="GUI"
            width={650}
            height={650}
            layout="fixed"
            quality={100}
            className="rounded-xl "
          />
        </div>
        <div className="absolute -right-30 top-[1450px] w-[30%] md:w-[40%] text-center mt-4">
          <h1 className="font-custom text-customColor text-xl md:text-3xl">
            GUI
          </h1>
          <p className="font-custom text-customColor text-lg md:text-2xl mt-2">
            The 1980s saw the introduction of GUIs, making computers more
            user-friendly with graphical elements like windows and icons. This
            innovation transformed personal and professional computing.
          </p>
        </div>
        <div className="absolute top-[1250px] -right-36 p-4">
          <Image
            src="/assets/Tech-Evolution/tv.png"
            alt="television"
            width={650}
            height={650}
            layout="fixed"
            quality={100}
            className="rounded-xl "
          />
        </div>
        <div className="absolute top-[1800px] left-[950px] p-4">
          <Image
            src="/assets/Tech-Evolution/network.jpeg"
            alt="network"
            width={500}
            height={500}
            layout="fixed"
            quality={100}
            className="rounded-xl "
          />
        </div>
        <div className=" absolute left-80  top-[1900px] w-[30%] md:w-[40%] text-center mt-4">
          <h1 className="font-custom text-customColor text-xl md:text-3xl">
            Networking
          </h1>
          <p className="font-custom text-customColor text-lg md:text-2xl mt-2">
            The 1990s brought advancements like Ethernet and Wi-Fi, enabling
            fast and reliable data transfer. These technologies facilitated the
            growth of LANs and the internet, transforming global communication.
          </p>
        </div>
        <div className="absolute top-[2000px] left-5 p-4">
          <Image
            src="/assets/Tech-Evolution/vr.png"
            alt="Virtual Reality"
            width={450}
            height={450}
            layout="fixed"
            quality={100}
            className="rounded-xl "
          />
        </div>
        <div className=" absolute right-96  top-[2250px] w-[30%] md:w-[40%] text-center mt-4">
          <h1 className="font-custom text-customColor text-xl md:text-3xl">
            Virtual Reality and Augmented reality
          </h1>
          <p className="font-custom text-customColor text-lg md:text-2xl mt-2">
            VR and AR technologies emerged in the 1990s, with VR creating
            immersive environments and AR overlaying digital information on the
            real world. They have since advanced in gaming, training, and
            practical applications.
          </p>
        </div>
        <div className="absolute top-[2350px] right-0 p-4">
          <Image
            src="/assets/Tech-Evolution/robot1.png"
            alt="robot"
            width={450}
            height={450}
            layout="fixed"
            quality={100}
            className="rounded-xl "
          />
        </div>
        <div className="absolute top-[2800px] right-32 p-4">
          <Image
            src="/assets/Tech-Evolution/blockchain.png"
            alt="blockchain"
            width={250}
            height={250}
            layout="fixed"
            quality={100}
            className="rounded-xl "
          />
        </div>
        <div className="absolute top-[2750px] left-0 p-4">
          <div
            className="relative w-[500px] h-[500px] overflow-hidden"
            style={{ transform: "translateX(-40%)" }}
          >
            <Image
              src="/assets/Tech-Evolution/arc.png"
              alt="arc"
              width={1000}
              height={1000}
              className="absolute rounded-xl inset-0 object-cover animate-rotate w-full h-full"
              layout="fixed"
              quality={100}
            />
          </div>
        </div>

        <div className=" absolute left-72  top-[2600px] w-[30%] md:w-[40%] text-center mt-4">
          <h1 className="font-custom text-customColor text-xl md:text-3xl">
            Blockchain Technology
          </h1>
          <p className="font-custom text-customColor text-lg md:text-2xl mt-2">
            Introduced with Bitcoin in 2008, blockchain offers decentralized,
            secure data recording. Its applications extend beyond
            cryptocurrencies to areas like supply chain management and smart
            contracts.
          </p>
        </div>
        <div className="absolute top-[2800px] right-44p-4">
          <Image
            src="/assets/Tech-Evolution/va.png"
            alt="voice asistant"
            width={250}
            height={250}
            layout="fixed"
            quality={100}
            className="rounded-xl "
          />
        </div>
        <div className=" absolute right-32  top-[3200px] w-[30%] md:w-[40%] text-center mt-4">
          <h1 className="font-custom text-customColor text-xl md:text-3xl">
            virtual asistant
          </h1>
          <p className="font-custom text-customColor text-lg md:text-2xl mt-2">
            Voice-activated AI assistants like Amazon’s Alexa and Google
            Assistant gained prominence in the 2010s. They use natural language
            processing to perform tasks and control smart devices.
          </p>
        </div>
        <div className="absolute top-[3500px] right-24 p-4">
          <Image
            src="/assets/Tech-Evolution/smart-home.jpeg"
            alt="smart homes"
            width={350}
            height={350}
            layout="fixed"
            quality={100}
            className="rounded-xl "
          />
        </div>
        <div className=" absolute left-96 top-[3450px] w-[30%] md:w-[40%] text-center mt-4">
          <h1 className="font-custom text-customColor text-xl md:text-3xl">
            Smart Homes
          </h1>
          <p className="font-custom text-customColor text-lg md:text-2xl mt-2">
            Smart home technology evolved in the 2010s, featuring devices like
            smart thermostats and security systems. These innovations offer
            enhanced automation, energy efficiency, and remote control.
          </p>
        </div>
        <div className="absolute top-[3650px] left-24 p-4">
          <Image
            src="/assets/Tech-Evolution/5g.jpg"
            alt="5G"
            width={350}
            height={350}
            layout="fixed"
            quality={100}
            className="rounded-xl "
          />
        </div>
        <div className=" absolute right-80 top-[3850px] w-[30%] md:w-[40%] text-center mt-4">
          <h1 className="font-custom text-customColor text-xl md:text-3xl">
            5G
          </h1>
          <p className="font-custom text-customColor text-lg md:text-2xl mt-2">
            5G technology, developed from the IMT-2000 project, offers
            high-speed data transfer, low latency, and reliability. It supports
            advancements in autonomous vehicles, smart cities, and IoT
            applications.
          </p>
        </div>
        <div className="absolute top-[4250px] right-24 p-4">
          <Image
            src="/assets/Tech-Evolution/quantumcomputer.jpg"
            alt="quantum"
            width={550}
            height={450}
            layout="fixed"
            quality={100}
            className="rounded-xl "
          />
        </div>
        <div className=" absolute left-28 top-[4350px] w-[30%] md:w-[40%] text-center mt-4">
          <h1 className="font-custom text-customColor text-xl md:text-3xl">
            Quantum Computer
          </h1>
          <p className="font-custom text-customColor text-lg md:text-2xl mt-2">
            Quantum computing, proposed by Richard Feynman and advanced by
            Google’s Sycamore processor, performs complex calculations at high
            speeds. It promises revolutionary impacts in finance, logistics, and
            healthcare.
          </p>
        </div>
        <div className="absolute top-[4650px] left-24 p-4">
          <Image
            src="/assets/Tech-Evolution/ai.png"
            alt="AI"
            width={350}
            height={550}
            layout="fixed"
            quality={100}
            className="rounded-xl "
          />
        </div>
        <div className=" absolute right-56 top-[4700px] w-[30%] md:w-[40%] text-center mt-4">
          <h1 className="font-custom text-customColor text-xl md:text-3xl">
            Artificial Intelligence
          </h1>
          <p className="font-custom text-customColor text-lg md:text-2xl mt-2">
            Quantum computing, proposed by Richard Feynman and advanced by
            Google’s Sycamore processor, performs complex calculations at high
            speeds. It promises revolutionary impacts in finance, logistics, and
            healthcare.
          </p>
        </div>
      </div>
    </div>
  );
}
