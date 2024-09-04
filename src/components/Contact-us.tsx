// components/ContactUs.tsx

import { FC } from "react";
import Image from "next/image";
import '../styles/font.css'

const ContactUs: FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center text-center bg-black p-8">
      <h1 className="text-5xl font-bold text-yellow-400 mb-12">
      <Image
              src="/CONTACT US.svg"
              alt="Gmail"
              width={500}
              height={200}
              className="mb-1"
            />
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl px-8">
        {/* Address Section */}
        <div className="text-left mb-12 md:mb-0 w-full md:w-1/3">
          <div className="flex items-center mb-4">
            <span className="text-red-500 mr-2 text-xl">
            <Image
              src="/location.svg"
              alt="Gmail"
              width={48}
              height={48}
              className="mb-1"
            />
            </span>
            <p className="font-bold text-xl text-white" style={{ fontFamily: 'PulzionFont1' }}>ADDRESS</p>
          </div>
          <p className="text-gray-300" style={{ fontFamily: 'PulzionFont' }}>Pune Institute of Computer Technology,</p>
          <p className="text-gray-300" style={{ fontFamily: 'PulzionFont' }}>Behind Bharati Vidyapeeth, Dhankawadi, Pune,</p>
          <p className="text-gray-300" style={{ fontFamily: 'PulzionFont' }}>Maharashtra-411043</p>
        </div>

        {/* Contact Information */}
        <div className="text-center mb-12 md:mb-0 w-full md:w-1/3">
          <div className="flex flex-col items-center mb-4">
            <Image
              src="/gmail.svg"
              alt="Gmail"
              width={48}
              height={48}
              className="mb-2"
            />
            <p className="text-gray-300" style={{ fontFamily: 'PulzionFont' }}>acm.pict@gmail.com</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-pink-500 text-3xl">📞</span>
            <p className="text-gray-300" style={{ fontFamily: 'PulzionFont' }}>Samarth Mali: (+91) 9156331100</p>
            <p className="text-gray-300" style={{ fontFamily: 'PulzionFont' }}>Pritika Rohera: (+91) 8087069750</p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.576077647539!2d73.8482586737186!3d18.45754717109928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1723792742131!5m2!1sen!2sin"
            width="100%"
            height="250"
            allowFullScreen
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center mt-12 space-x-8">
        <a
          href="https://www.facebook.com/PICTOfficial/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600"
        >
          <Image
            src="/facebook.svg"
            alt="Facebook"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </a>
        <a
          href="https://www.instagram.com/pict.pune/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500"
        >
          <Image
            src="/insta.svg"
            alt="Instagram"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </a>
        <a
          href="https://pict.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          <Image
            src="/internet.svg"
            alt="Website"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </a>
        <a
          href="https://www.linkedin.com/school/pune-institute-of-computer-technology/?originalSubdomain=in"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700"
        >
          <Image
            src="/linkedin.svg"
            alt="LinkedIn"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </a>
        <a
          href="https://x.com/punepict?lang=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <Image
            src="/twitter.svg"
            alt="Twitter"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
