// ContactUs.tsx
import React from 'react';
import localFont from "next/font/local";
import Particles from "@/components/magicui/particles";


const sixtyfour = localFont({
  src: "../../../public/font/Sixtyfour-Regular-VariableFont_BLED,SCAN.ttf",
});

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center p-8 relative bg-black">
      <Particles
        className="absolute inset-0"
        quantity={200}
        size={1.0}
        ease={80}
        color="#ffffff"
        refresh
      />
      {/* Contact Us Title */}
      <h1
        className={`${sixtyfour.className} text-center mb-12 text-[#cfc36d] text-6xl`}
      >
        Contact Us
      </h1>

      {/* Contact Information and Message Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mb-8 z-30 ">

        {/* Contact Information */}
        <div className="bg-[#013220]/70 p-6 rounded-lg w-full lg:w-1/3 h-auto lg:h-96 flex flex-col justify-between border-2 border-yellow-700">
          <h3 className="text-3xl mb-4 text-center text-white" style={{ fontFamily: 'Wallpoet' }}>Contact Information</h3>

          {/* Phone Numbers */}
          <div className="flex items-start mb-4">
            {/* Update the image location below */}
            <img
              src="/assets/landing/contact-us/"
              alt="Phone"
              className="w-6 h-6 mr-3"
            />
            <div>
              <p className="text-sm text-pretty text-white" style={{ fontFamily: 'Wallpoet' }}>Samarth Mali: (+91) 9156931100</p>
              <p className="text-sm text-pretty text-white" style={{ fontFamily: 'Wallpoet' }}>Pritika Rohera: (+91) 8087606750</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start mb-4">
            {/* Update the image location below */}
            <img
              src="/assets/landing/contact-us/"
              alt="Email"
              className="w-6 h-6 mr-3"
            />
            <p className="text-sm text-pretty text-white" style={{ fontFamily: 'Wallpoet' }}>acm.pict@gmail.com</p>
          </div>

          {/* Address */}
          <div className="flex items-start mb-4">
            {/* Update the image location below */}
            <img
              src="/path/to/location-icon.png"
              alt="Location"
              className="w-6 h-6 mr-3"
            />
            <p className="text-sm text-pretty text-white" style={{ fontFamily: 'Wallpoet' }}>
              Pune Institute of Computer Technology, Behind Bharati Vidyapeeth, Dhankawadi, Pune,
              Maharashtra-411043
            </p>
          </div>
        </div>

        {/* Send a Message Form */}
        <div className="bg-[#013220]/70 p-6 rounded-lg w-full lg:w-1/3 h-auto lg:h-96 flex flex-col justify-between border-2 border-yellow-700 ">
          <h3 className="text-3xl mb-4 text-center text-white" style={{ fontFamily: 'Wallpoet' }}>Send a Message</h3>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-4 text-white rounded-md focus:outline-none bg-transparent border-b border-gray-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-4 text-white rounded-md focus:outline-none bg-transparent border-b border-gray-300"
            />
            <textarea
              placeholder="Message"
              className="w-full p-2 mb-4 text-white rounded-md focus:outline-none bg-transparent border-b border-gray-300"
              rows={3}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-transparent border border-white text-white p-2 rounded-md transition">
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-yellow-300" style={{ fontFamily: "Wallpoet" }}>FOLLOW US</h3>
        <div className="flex justify-center space-x-6">


          {/* Social Media Links */}
          <a href="https://www.facebook.com/PICTOfficial/" target="_blank" rel="noopener noreferrer">
            {/* Update the image location below */}
            <img src="/assets/landing/contact-us/facebook icon.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/pict.pune/?hl=en" target="_blank" rel="noopener noreferrer">
            {/* Update the image location below */}
            <img src="/assets/landing/contact-us/instagram icon.png" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="https://pict.edu/" target="_blank" rel="noopener noreferrer">
            {/* Update the image location below */}
            <img src="/assets/landing/contact-us/web icon.png" alt="Website" className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/school/pune-institute-of-computer-technology/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
            {/* Update the image location below */}
            <img src="/assets/landing/contact-us/linkedn icon.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="https://x.com/punepict?lang=en" target="_blank" rel="noopener noreferrer">
            {/* Update the image location below */}
            <img src="/assets/landing/contact-us/x new2 icon.png" alt="Twitter" className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.576077647539!2d73.8482586737186!3d18.45754717109928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1723792742131!5m2!1sen!2sin"
          width="70%"
          height="400"
          className="rounded-lg"
          allowFullScreen
          loading="lazy"
          
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
