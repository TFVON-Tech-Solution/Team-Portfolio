import React from 'react';
import '../assets/css/team.css';
import logo from '../assets/logo.png';
import TeamCard from '../components/teamCard';

const Team = () => {
  return (
    <section className="team-section min-h-screen px-6 py-8 bg-[linear-gradient(to_bottom_right,_#111827,_#1e293b,_#0e7490)] text-white text-center flex flex-col relative">
      <div className="team-header flex justify-between items-start mr-[53px]">
        <div className="team-title-group text-center mb-[10px]">
          <h1 className="team-title text-[2.5rem] font-bold text-left ml-5 mt-[30px] m-0">
            Our Developer Team
          </h1>
          <h4
            className="team-subtitle mt-[10px] font-extralight italic text-[#c9c9c9]"
            aria-label="Team Motto"
          >
            "Turning Coffee Into Code and Vision Into Reality"
          </h4>
        </div>
        <img
          src={logo}
          alt="TFVON Tech Solution Logo"
          className="team-logo h-[170px] pb-[10px] mb-2 transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      {/* TEAMCARD */}
      <TeamCard />

      <div className="layered-footer w-full h-[80px] mt-auto flex items-end relative ml-[-50px] mb-[-64px]">
        <div className="footer-base w-[70%] h-[88px] bg-[linear-gradient(to_right,_#656565,_#969696)] rounded-tr-[20px]"></div>
        <div className="footer-top absolute bottom-0 right-0 mr-[90px] w-[85%] h-[50px] bg-[linear-gradient(to_right,_#c9c3c3,_#e6e2e2)] rounded-tl-[20px] rounded-tr-[20px]"></div>
      </div>
    </section>
  );
};

export default Team;