import React, { useState } from 'react';
import '../assets/css/project.css';
import alumniSystem from '../assets/projects/alumniSystem.png';
import payrollSystem from '../assets/projects/payrollSystem.png';
import businessProject from '../assets/projects/Business.png';
import hotelSystem from '../assets/projects/Hotel Management System.png';
import librarySystem from '../assets/projects/Library Management System.png';

import alumniDemo from '../assets/projects/demo/Alumni.mp4';
import payrollDemo from '../assets/projects/demo/Expense-payroll system.mp4';
import businessDemo from '../assets/projects/demo/Business.mp4';
import hotelDemo from '../assets/projects/demo/hotelsystem.mp4';
import libraryDemo from '../assets/projects/demo/Library Management.mp4';

const images = [
  { img: alumniSystem, title: 'The Alumni Management System for CVSU-Imus tracks graduates employment and professional development through an online platform, helping improve curriculum and generate reports.', video: alumniDemo },
  { img: payrollSystem, title: 'exPense is a cloud-based payroll system that automates salary calculations, tax deductions, and bank transfers. It supports various pay structures and provides employees with ePayslips via a mobile app.', video: payrollDemo },
  { img: businessProject, title: 'Craves On the Go is an ordering and inventory system that helps manage pastry sales, track stock, and handle customer orders efficiently.', video: businessDemo },
  { img: hotelSystem, title: 'The Shangri-la Hotel Management System is a system designed to streamline hotel bookings, manage guest info, and improve overall hotel operations.', video: hotelDemo },
  { img: librarySystem, title: 'Libra Sphere is a system that helps libraries manage books, users, and borrowing activities efficiently.', video: libraryDemo },
];

const Project = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const openModal = (video) => {
    setActiveVideo(video);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveVideo(null);
  };

  return (
    <section
      id="home"
      style={{ background: 'linear-gradient(to bottom right,rgb(37, 37, 37),rgb(41, 41, 41))' }}
      className="text-white min-h-screen py-[100px] px-5 flex flex-col items-center justify-center"
    >
      <h1 className="team-project text-[50px] font-bold mb-10">
        <span className=" text-white">TEAM</span> <span className="text-cyan-400">PROJECT</span>
      </h1>

      <div className="project-card flex flex-wrap justify-center gap-8">
        {images.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center justify-center relative group w-[28rem] h-[16rem]">
              <img
                src={item.img}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
                onClick={() => openModal(item.video)} // Clicking the image opens the modal
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-800 to-transparent rounded-xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-[15px] font-bold text-center px-4">{item.title}</span>
                <button
                  onClick={() => openModal(item.video)}
                  className="mt-4 text-white px-4 py-2 rounded-lg text-sm cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[3rem] h-[3rem]"  // Increased size here
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                  </svg>
                </button>


              </div>
            </div>
            {index === 2 && <div className="w-full h-0" />}
          </React.Fragment>
        ))}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative w-[90%] max-w-3xl">
            <video src={activeVideo} controls autoPlay className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
