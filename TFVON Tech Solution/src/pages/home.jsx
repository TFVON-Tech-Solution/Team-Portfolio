import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import bg from '../assets/bg.png';
import logo from '../assets/logo.png';

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat py-[100px] px-[20px]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Text Section - Now On the Left */}
      <div className="w-1/2 flex flex-col justify-center items-end text-right pl-10 pr-24">
        <h1 className="text-[48px] font-extrabold text-white leading-[1.2] mb-6">
          Innovating Today,<br />Empowering Tomorrow's Tech
        </h1>
        <br />
        <p className="text-white mb-8 text-[18px] font-medium leading-relaxed">
          Join <strong>TFVON TECH SOLUTIONS</strong> – Your <br /> Gateway
          to Innovation, Skills,<br />
          and Future-Ready Tech Careers.
        </p>
        <br />
        <br />
        <div className="flex gap-6">
          <Link to="/#project">
            <button className="w-[130px] h-[48px] bg-cyan-400 hover:bg-cyan-500 text-white font-semibold rounded-full transition duration-300">
              Project
            </button>
          </Link>
          <Link to="/#team">
            <button className="w-[130px] h-[48px] bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-full transition duration-300">
              Teams
            </button>
          </Link>
        </div>
      </div>

      {/* Logo Section - Now On the Right */}
      <div className="w-1/2 flex justify-center items-center">
        <img
          src={logo}
          alt="TFVON Logo"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Home;
