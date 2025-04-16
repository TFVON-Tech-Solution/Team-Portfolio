import React from "react";
import logo from "../assets/logo.png"; // Import the logo image

const Footer = () => {
  return (
    <footer className="bg-[#222831] text-white p-5">
      {/* Logo and Company Name */}
      <div className="flex flex-col items-center mb-4">
        <div className="flex items-center gap-2 mb-2">
          <img src={logo} alt="TFVON Tech Solution Logo" className="w-12 h-auto" />
          <p className="text-lg font-bold">TFVON Tech Solution</p>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          
          <div className="flex justify-center gap-6">
            <p className="text-base font-light opacity-75 hover:opacity-100 transition cursor-pointer">
              Phone: +63 095 358 4418
            </p>
            <p className="text-base font-light opacity-75 hover:opacity-100 transition cursor-pointer">
              Email: tfvontechsolution@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#191D24] text-center py-2">
        <p className="text-sm">©2025 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
