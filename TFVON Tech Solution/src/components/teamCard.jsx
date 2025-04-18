import React from 'react';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdAttachEmail } from "react-icons/md";
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
    email: 'toledomarcandrei385@gmail.com',
  },
  {
    name: 'Reymart Omega',
    role: 'FRONT-END',
    skills: ['Frameworks', 'React', 'CSS'],
    image: images['../assets/team/omega.png'].default,
    github: 'https://github.com/Reymart18',
    instagram: 'https://instagram.com/princeharvey',
    facebook: 'https://facebook.com/princeharvey',
    email: 'omegareymart@gmail.com',
  },
  {
    name: 'Martin Louis Valentino',
    role: 'FRONT-END',
    skills: ['Frameworks', 'React', 'CSS'],
    image: images['../assets/team/valentino.png'].default,
    github: 'https://github.com/Tihnn',
    instagram: 'https://instagram.com/princeharvey',
    facebook: 'https://facebook.com/princeharvey',
    email: 'martinmalapo@gmail.com',
  },
  {
    name: 'Alen Fidelis',
    role: 'BACK-END & FRONT-END',
    skills: ['Frameworks', 'MySQL', 'PHP', 'React JS', 'CSS', 'Javasript'],
    image: images['../assets/team/fidelis.png'].default,
    github: 'https://github.com/Yrria',
    instagram: 'https://instagram.com/princeharvey',
    facebook: 'https://facebook.com/princeharvey',
    email: 'fidelisalen@gmail.com',
  },
  {
    name: 'Prince Harvey Nagtalon',
    role: 'FRONT-END',
    skills: ['Frameworks', 'React', 'CSS'],
    image: images['../assets/team/nagtalon.png'].default,
    github: 'https://github.com/hrvy821',
    instagram: 'https://instagram.com/princeharvey',
    facebook: 'https://facebook.com/princeharvey',
    email: 'nagtalonprinceharvey@gmail.com',
  },
];

// Team component
const TeamCard = () => {
  return (
    <div className="grid gap-20 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-items-center mb-16">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-card w-[270px] h-[470px] bg-gray-800 border border-cyan-400 rounded-[20px] p-4 flex flex-col items-center shadow-[0_0_10px_rgba(0,255,255,0.2)] transition-transform duration-300 hover:scale-105">
          <img src={member.image} alt={member.name} className="team-avatar w-[130px] h-[130px] rounded-full object-cover mb-6 mt-2 bg-[#222222]" />
          <h3 className="team-name text-[19px] font-extrabold mb-6">{member.name}</h3>
          <p className="team-role text-[13.2px] font-bold uppercase mb-2 text-left w-full pl-1">{member.role}</p>
          <ul className="team-skills text-[12px] list-none p-0 mb-4 leading-[1.2] text-left w-full pl-1">
            <span className="block font-bold mb-1 " >Skills</span>
            {member.skills.map((skill, idx) => (
              <li key={idx}>• {skill}</li>
            ))}
          </ul>

          <div className="team-icons flex flex-col items-center text-white text-[12px]">
            {/* Email section */}
            {member.email && (
              <div className="mb-[2px] text-[12px]">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-2 underline hover:text-[#22d3ee]"
                >
                  <MdAttachEmail className="text-lg" /> {member.email}
                </a>
              </div>
            )}


            {/* Social icons */}
            <div className="flex justify-center gap-4 text-[1.4rem] mt-auto">
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 cursor-pointer hover:text-cyan-400 hover:scale-125"
              >
                <FaGithub />
              </a>
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 cursor-pointer hover:text-cyan-400 hover:scale-125"
              >
                <FaInstagram />
              </a>
              <a
                href={member.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 cursor-pointer hover:text-cyan-400 hover:scale-125"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
