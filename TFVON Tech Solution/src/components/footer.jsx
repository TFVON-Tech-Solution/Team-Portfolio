import React from "react";
import '../assets/css/footer.css';
import logo from "../assets/logo.png"; // Import the logo image

const Footer = () => {
  return (
    <footer className="bg-[#222831] text-white p-5">
      {/* Logo and Company Name */}
      <div className="flex flex-col items-center mb-4">
        <div className="flex items-center gap-2 mb-2">
          <img src={logo} alt="TFVON Tech Solution Logo" className="logo w-12 h-20px" />
          <p className="title text-lg font-bold font-20px">TFVON Tech Solution</p>
        </div>

        {/* Contact Information */}
        <div className="contacts text-center">

          <div className="flex justify-center gap-6">
            <div className="flex gap-2">
              <p className="phone text-base font-light opacity-75 hover:opacity-100 transition cursor-pointer">
                Phone:
              </p>
              <p className="phone text-base font-light opacity-75 hover:opacity-100 transition cursor-pointer">
                +63 095 358 4418
              </p>
            </div>
            <div className="flex gap-2">
              <p className="email text-base font-light opacity-75 hover:opacity-100 transition cursor-pointer">
                Email:
              </p>
              <p className="email text-base font-light opacity-75 hover:opacity-100 transition cursor-pointer">
                tfvontechsolution@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="copyright bg-[#191D24] text-center py-2">
        <p className="text-copy text-sm">©2025 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
