import React from 'react';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import '../assets/css/team.css';
import logo from '../assets/logo.png';


const images = import.meta.glob('../assets/*.png', { eager: true });

const teamMembers = [
  {
    name: 'Marc Andrei Toledo',
    role: 'FRONT-END',
    skills: ['Frameworks', 'React', 'CSS'],
    image: images['../assets/logo.png'].default,
    github: 'https://github.com/princeharvey',
    instagram: 'https://instagram.com/princeharvey',
    facebook: 'https://facebook.com/princeharvey',
  },
  {
    name: 'Reymart Omega',
    role: 'FRONT-END',
    skills: ['Frameworks', 'React', 'CSS'],
    image: images['../assets/logo.png'].default,
    github: 'https://github.com/princeharvey',
    instagram: 'https://instagram.com/princeharvey',
    facebook: 'https://facebook.com/princeharvey',
  },
  {
    name: 'Martin Louis Valentino',
    role: 'FRONT-END',
    skills: ['Frameworks', 'React', 'CSS'],
    image: images['../assets/logo.png'].default,
    github: 'https://github.com/princeharvey',
    instagram: 'https://instagram.com/princeharvey',
    facebook: 'https://facebook.com/princeharvey',
  },
  {
    name: 'Alen Fidelis',
    role: 'BACK-END',
    skills: ['Frameworks', 'MySQL', 'PHP'],
    image: images['../assets/logo.png'].default,
    github: 'https://github.com/princeharvey',
    instagram: 'https://instagram.com/princeharvey',
    facebook: 'https://facebook.com/princeharvey',
  },
  {
    name: 'Prince Harvey Nagtalon',
    role: 'FRONT-END',
    skills: ['Frameworks', 'React', 'CSS'],
    image: images['../assets/logo.png'].default,
    github: 'https://github.com/princeharvey',
    instagram: 'https://instagram.com/princeharvey',
    facebook: 'https://facebook.com/princeharvey',
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <div className="team-header">
        <h2 className="team-title">Our Developer Team</h2>
        <img src={logo} alt="Logo" className="team-logo" />
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-avatar" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <ul className="team-skills">
              {member.skills.map((skill, idx) => (
                <li key={idx}>• {skill}</li>
              ))}
            </ul>
            <div className="team-icons">
              <a href={member.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href={member.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href={member.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            </div>
          </div>
        ))}
      </div>
      <div className="layered-footer">
        <div className="footer-base"></div>
        <div className="footer-top"></div>
      </div>
    </section>
  );
};

export default Team;
