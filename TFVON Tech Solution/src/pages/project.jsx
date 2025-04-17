import React from 'react';
import alumniSystem from '../assets/projects/alumniSystem.png';
import payrollSystem from '../assets/projects/payrollSystem.png';
import gvTechHRIS from '../assets/projects/GV TECH HRIS .png';
import hotelSystem from '../assets/projects/Hotel Management System.png';
import librarySystem from '../assets/projects/Library Management System.png';
import barangaySystem from '../assets/projects/Barangay.png';

const images = [
  alumniSystem,
  payrollSystem,
  gvTechHRIS,
  hotelSystem,
  librarySystem,
  barangaySystem,
];

const Project = () => {
  return (
    <section
      id="home"
      style={{ background: 'linear-gradient(to bottom right,rgb(37, 37, 37),rgb(41, 41, 41))' }}
      className="text-white min-h-screen py-[100px] px-5 flex flex-col items-center justify-center"
    >
      <h1 className="text-[50px] font-bold mb-10">
        <span className="text-white">TEAM</span> <span className="text-cyan-400">PROJECT</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((img, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={img}
              alt={`Project ${index + 1}`}
              className="w-[28rem] h-[16rem] object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
