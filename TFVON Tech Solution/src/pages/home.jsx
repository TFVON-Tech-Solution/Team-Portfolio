import React from 'react';
import bg from '../assets/bg.png'; // Adjust path if needed
import logo from '../assets/logo.png'; // Adjust path if needed

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat py-[100px] px-[20px]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Text Section - On the Left, aligned to the right */}
      <div className="w-1/2 flex flex-col justify-center items-end text-right px-10">
        <h1 className="text-4xl font-extrabold text-white leading-tight mb-4">
          Innovating Today,<br />Empowering Tomorrow's Tech
        </h1>
        <p className="text-white mb-6 text-lg">
          Join <strong>TFVON TECH SOLUTIONS</strong> – Your Gateway to Innovation,
          Skills, and Future-Ready Tech Careers.
        </p>
        <div className="flex space-x-4 justify-end">
          <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
            Project
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
            Teams
          </button>
        </div>
      </div>

      {/* Logo Section - On the Right */}
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
