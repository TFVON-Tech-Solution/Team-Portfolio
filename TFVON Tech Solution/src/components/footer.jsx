import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#222831] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">

        {/* Logo and Company Name */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="TFVON Logo" className="h-[70px] opacity-0" />
          <img src={logo} alt="TFVON Logo" className="h-[55px]" />
          <div className="text-left font-bold leading-5">
            TFVON <br /> Tech <br /> Solution
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start">
          <div className="font-semibold mb-1">Contact</div>
          <p>Phone: +63 095 938 4418</p>
          <p>Email: tfvon_techsolution@gmail.com</p>
        </div>

        {/* Social Media Section */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">LinkedIn</a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-xs mt-4 bg-[#191D24] py-4">
        <p>{'\u00A9'} 2025 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
