import React, { useState, useEffect } from 'react';
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

import htmlLogo from '../assets/progLanguage/logo-html.png';
import cssLogo from '../assets/progLanguage/logo-css.png';
import jsLogo from '../assets/progLanguage/logo-javascript.png';
import phpLogo from '../assets/progLanguage/logo-php.png';
import bootstrapLogo from '../assets/progLanguage/logo-bootstrap.png';

const images = [
  {
    img: alumniSystem,
    title:
      'The Alumni Management System for CVSU-Imus tracks graduates employment and professional development through an online platform, helping improve curriculum and generate reports.',
    video: alumniDemo,
  },
  {
    img: payrollSystem,
    title:
      'exPense is a cloud-based payroll system that automates salary calculations, tax deductions, and bank transfers. It supports various pay structures and provides employees with ePayslips via a mobile app.',
    video: payrollDemo,
  },
  {
    img: businessProject,
    title:
      'Craves On the Go is an ordering and inventory system that helps manage pastry sales, track stock, and handle customer orders efficiently.',
    video: businessDemo,
  },
  {
    img: hotelSystem,
    title:
      'The Shangri-la Hotel Management System is a system designed to streamline hotel bookings, manage guest info, and improve overall hotel operations.',
    video: hotelDemo,
  },
  {
    img: librarySystem,
    title:
      'Libra Sphere is a system that helps libraries manage books, users, and borrowing activities efficiently.',
    video: libraryDemo,
  },
];

const Project = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [mobileView, setMobileView] = useState(false);
  const [activeMobileCard, setActiveMobileCard] = useState(null); // track which card is active on mobile

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 768);
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openModal = (video) => {
    setActiveVideo(video);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveVideo(null);
  };

  const handleCardClick = (index, video) => {
    if (!mobileView) {
      openModal(video); // desktop click = open modal
      return;
    }

    if (activeMobileCard === index) {
      openModal(video); // second tap = open video
    } else {
      setActiveMobileCard(index); // first tap = show details
    }
  };

  return (
    <section
      id="home"
      style={{
        background: 'linear-gradient(to bottom right,rgb(37, 37, 37),rgb(41, 41, 41))',
      }}
      className="text-white min-h-screen py-[100px] px-5 flex flex-col items-center justify-center"
    >
      <h1 className="team-project text-[50px] font-bold mb-10">
        <span className=" text-white">TEAM</span>{' '}
        <span className="text-cyan-400">PROJECT</span>
      </h1>

      <div className="project-card flex flex-wrap justify-center gap-8">
        {images.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center justify-center relative group w-[28rem] h-[16rem] cursor-pointer">
              <img
                src={item.img}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black via-gray-800 to-transparent rounded-xl flex flex-col items-center justify-center 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  mobileView && activeMobileCard === index ? 'opacity-100' : ''
                }`}
              >
                <span className="text-white text-[15px] font-bold text-center px-4">
                  {item.title}
                </span>
                <div
                  className="mt-4 text-white px-4 py-2 rounded-lg text-sm cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the card click
                    handleCardClick(index, item.video); // Show video only when play button is clicked
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[2.5rem] h-[2.5rem]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                    />
                  </svg>
                </div>
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
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}

      <div className="logo-sec flex justify-center gap-8 mt-20">
        <img src={htmlLogo} alt="HTML Logo" className="html w-[6rem] h-[6rem] sm:w-[4rem] sm:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[6rem] lg:h-[6rem]" />
        <img src={cssLogo} alt="CSS Logo" className="css w-[6rem] h-[6rem] sm:w-[4rem] sm:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[6rem] lg:h-[6rem]" />
        <img src={jsLogo} alt="JavaScript Logo" className="js w-[6rem] h-[6rem] sm:w-[4rem] sm:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[6rem] lg:h-[6rem]" />
        <img src={phpLogo} alt="PHP Logo" className="php w-[6rem] h-[6rem] sm:w-[4rem] sm:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[6rem] lg:h-[6rem]" />
        <img src={bootstrapLogo} alt="Bootstrap Logo" className="bootstrap w-[6rem] h-[6rem] sm:w-[4rem] sm:h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[6rem] lg:h-[6rem]" />
      </div>
    </section>
  );
};

export default Project;
