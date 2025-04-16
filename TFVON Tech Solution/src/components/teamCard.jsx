import React from 'react';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import '../assets/css/team.css';

// Import all images from the team folder
const images = import.meta.glob('../assets/team/*.png', { eager: true });

// Team data
const teamMembers = [
  {
    name: 'Marc Andrei Toledo',
    role: 'FRONT-END',
    skills: ['Frameworks', 'React', 'CSS'],
    image: images['../assets/team/toledo.png'].default,
    github: 'https://github.com/MarcAndrei00',
    instagram: 'https://instagram.com/princeharvey',
    facebook: 'https://facebook.com/princeharvey',
  },
  {
    name: 'Reymart Omega',
    role: 'FRONT-END',
    skills: ['Frameworks', 'React', 'CSS'],
    image: images['../assets/team/omega.png'].default,
    github: 'https://github.com/Reymart18',
    instagram: 'https://instagram.com/princeharvey',
    facebook: 'https://facebook.com/princeharvey',
  },
  {
    name: 'Martin Louis Valentino',
    role: 'FRONT-END',
    skills: ['Frameworks', 'React', 'CSS'],
    image: images['../assets/team/valentino.png'].default,
    github: 'https://github.com/Tihnn',
    instagram: 'https://instagram.com/princeharvey',
    facebook: 'https://facebook.com/princeharvey',
  },
  {
    name: 'Alen Fidelis',
    role: 'BACK-END & FRONT-END',
    skills: ['Frameworks', 'MySQL', 'PHP', 'React JS', 'CSS', 'Java', 'Javasript'],
    image: images['../assets/team/fidelis.png'].default,
    github: 'https://github.com/Yrria',
    instagram: 'https://instagram.com/princeharvey',
    facebook: 'https://facebook.com/princeharvey',
  },
  {
    name: 'Prince Harvey Nagtalon',
    role: 'FRONT-END',
    skills: ['Frameworks', 'React', 'CSS'],
    image: images['../assets/team/nagtalon.png'].default,
    github: 'https://github.com/hrvy821',
    instagram: 'https://instagram.com/princeharvey',
    facebook: 'https://facebook.com/princeharvey',
  },
];

// Team component
const TeamCard = () => {
  return (
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
  );
};

export default TeamCard;
