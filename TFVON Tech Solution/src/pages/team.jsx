import React from 'react';
import '../assets/css/team.css';
import logo from '../assets/logo.png';
import TeamCard from '../components/teamCard';


const Team = () => {
  return (
    <section className="team-section">
      <div className="team-header">
        <div className="team-title-group">
          <h1 className="team-title">Our Developer Team </h1>
          <h4 className="team-subtitle">"Turning Coffee Into Code and Vision Into Reality"</h4>
        </div>
        <img src={logo} alt="Logo" className="team-logo" />
      </div>

      {/* TEAMCARD */}
      <TeamCard />

      <div className="layered-footer">
        <div className="footer-base"></div>
        <div className="footer-top"></div>
      </div>
    </section>
  );
};

export default Team;