import React from 'react';
import '../assets/css/project.css';
import alumniSystem from '../assets/projects/alumniSystem.png';
import payrollSystem from '../assets/projects/payrollSystem.png';
import gvTechHRIS from '../assets/projects/GV TECH HRIS .png';
import hotelSystem from '../assets/projects/Hotel Management System.png';
import librarySystem from '../assets/projects/Library Management System.png';
import barangaySystem from '../assets/projects/Barangay.png';

const images = [
  { img: alumniSystem, title: 'The Alumni Management System for CVSU-Imus tracks graduates employment and professional development through an online platform, helping improve curriculum and generate reports.' },
  { img: payrollSystem, title: 'exPense is a cloud-based payroll system that automates salary calculations, tax deductions, and bank transfers. It supports various pay structures and provides employees with ePayslips via a mobile app.' },
  { img: gvTechHRIS, title: 'GV Tech’s cloud-based HR system streamlines payroll, benefits, attendance, and employee self-service while centralizing data and providing real-time analytics for efficient and compliant HR management.' },
  { img: hotelSystem, title: 'The Hotel Management System handles bookings, check-ins, check-outs, and room assignments for efficient hotel operations.' },
  { img: librarySystem, title: 'Libra Sphere is a system that helps libraries manage books, users, and borrowing activities efficiently.' },
  { img: barangaySystem, title: 'The Barangay System is software that helps manage local services like resident registration, permit issuance, and complaints, making operations faster and more efficient.' },
];

const Project = () => {
  return (
    <section
      id="home"
      style={{ background: 'linear-gradient(to bottom right,rgb(37, 37, 37),rgb(41, 41, 41))' }}
      className="text-white min-h-screen py-[100px] px-5 flex flex-col items-center justify-center"
    >
      <h1 className="team-project text-[50px] font-bold mb-10">
        <span className=" text-white">TEAM</span> <span className="text-cyan-400">PROJECT</span>
      </h1>

      <div className="project-card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((item, index) => (
          <div key={index} className="flex items-center justify-center relative group">
          {/* Image */}
          <img
            src={item.img}
            alt={`Project ${index + 1}`}
            className="w-[28rem] h-[16rem] object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
          />
          {/* Overlay on hover with vertical gradient starting from below */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-800 to-transparent rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-[15px] font-bold text-center p-4 mx-6">{item.title}</span>
          </div>
        </div>
        
        ))}
      </div>
    </section>
  );
};

export default Project;
