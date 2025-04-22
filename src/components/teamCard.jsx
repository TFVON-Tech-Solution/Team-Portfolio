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
    skills: ['Frameworks', 'Figma', 'React', 'CSS', 'Javasript', 'Bootstrap',],
    image: images['../assets/team/toledo.png'].default,
    github: 'https://github.com/MarcAndrei00',
    instagram: 'https://instagram.com/princeharvey',
    facebook: 'https://www.facebook.com/marcandrei123',
    email: 'toledomarcandrei385@gmail.com',
    number: '09048576543',
  },
  {
    name: 'Reymart Omega',
    role: 'FRONT-END',
    skills: ['Frameworks', 'React', 'CSS'],
    image: images['../assets/team/omega.png'].default,
    github: 'https://github.com/Reymart18',
    instagram: 'https://instagram.com/princeharvey',
    facebook: 'https://www.facebook.com/JRFUTBOLEROS',
    email: 'omegareymart@gmail.com',
    number: '09385948574',
  },
  {
    name: 'Martin Louis Valentino',
    role: 'FRONT-END',
    skills: ['Frameworks', 'React', 'CSS'],
    image: images['../assets/team/valentino.png'].default,
    github: 'https://github.com/Tihnn',
    instagram: 'https://instagram.com/princeharvey',
    facebook: 'https://www.facebook.com/profile.php?id=100009755924546',
    email: 'martinmalapo@gmail.com',
    number: '09303840958',
  },
  {
    name: 'Alen Fidelis',
    role: 'BACK-END & FRONT-END',
    skills: ['Frameworks', 'MySQL', 'PHP', 'React JS', 'CSS', 'Javasript'],
    image: images['../assets/team/fidelis.png'].default,
    github: 'https://github.com/Yrria',
    instagram: 'https://instagram.com/princeharvey',
    facebook: 'https://www.facebook.com/lnfdls',
    email: 'fidelisalen@gmail.com',
    number: '09951254753',
  },
  {
    name: 'Prince Harvey Nagtalon',
    role: 'FRONT-END',
    skills: ['Frameworks', 'React', 'CSS'],
    image: images['../assets/team/nagtalon.png'].default,
    github: 'https://github.com/hrvy821',
    instagram: 'https://instagram.com/princeharvey',
    facebook: 'https://www.facebook.com/harvey.nagtalon.9',
    email: 'nagtalonprinceharvey@gmail.com',
    number: '09849504736',
  },
];

// Team component
const TeamCard = () => {
  return (
    <div className="team-grid flex flex-wrap justify-center gap-16 mb-16">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-card flex flex-row bg-[#323846] text-white w-[480px] h-[570px] rounded-sm overflow-hidden shadow-[0_0_20px_#17a5bb] transition-transform duration-300 ease-in-out hover:scale-105">
          <img src={member.image} alt={member.name} className="team-image w-[40%] object-cover bg-[#323846]" />
          <div className="team-info flex flex-col justify-between w-[60%] p-4 text-left">
            <div>
              <h3 className="team-name text-[1.31rem] font-bold text-[#00bcd4] my-[1.8rem]">
                {member.name}
              </h3>
              <p className="team-role text-[0.85rem] font-semibold text-[#ccc] mt-8 mb-4">
                {member.role}
              </p>
              <ul className="team-skills text-[0.80rem] text-[#bbb] mb-[0.7rem]">
                <span className="block font-bold text-white mb-[0.2rem]">Skills</span>
                {member.skills.map((skill, idx) => (
                  <li key={idx}>• {skill}</li>
                ))}
              </ul>
            </div>

            <div>
              {member.number && (
                <div className="team-email text-[0.70rem] text-white">
                  <a
                    href={`tel:${member.number}`}
                    className="flex items-center justify-center gap-[0.3rem] pb-[2px] hover:text-cyan-300 transition-colors"
                  >
                    {member.number}
                  </a>
                </div>
              )}

              {member.email && (
                <div className="team-email text-[0.70rem] text-white">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center gap-[0.3rem] pb-[2px] hover:text-cyan-300 transition-colors"
                  >
                    {member.email}
                  </a>
                </div>
              )}

              <div className="team-icons flex justify-center items-center gap-[0.8rem] text-[1.4rem] pt-[15px] pb-[8px]">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition duration-300 ease-in-out hover:text-[#00e5ff] hover:scale-125"
                >
                  <FaGithub />
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition duration-300 ease-in-out hover:text-[#00e5ff] hover:scale-125"
                >
                  <FaInstagram />
                </a>
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition duration-300 ease-in-out hover:text-[#00e5ff] hover:scale-125"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

  );
};

export default TeamCard;
