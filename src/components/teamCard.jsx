import React, { useState } from 'react';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdAttachEmail } from "react-icons/md";
import '../assets/css/team.css';

// Import all images from the team folder
const images = import.meta.glob('../assets/team/*.png', { eager: true });

// Team component
const TeamCard = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: 'Marc Andrei Toledo',
      role: 'FRONT-END DEVELOPER',
      skills: ['Frameworks', 'Figma', 'React', 'CSS', 'JavaScript', 'Bootstrap',],
      projects: ['Portfolio Website', 'E-commerce App', 'Landing Page'],
      frameworks: ['React', 'Bootstrap', 'Tailwind CSS'],
      image: images['../assets/team/toledo.png'].default,
      github: 'https://github.com/MarcAndrei00',
      instagram: 'https://instagram.com/princeharvey',
      facebook: 'https://www.facebook.com/marcandrei123',
      email: 'toledomarcandrei385@gmail.com',
      number: '09048576543',
    },
    {
      name: 'Reymart Omega',
      role: 'FRONT-END DEVELOPER',
      skills: ['Frameworks', 'React', 'CSS'],
      projects: ['Dashboard UI', 'Blog Website'],
      frameworks: ['React', 'Material UI'],
      image: images['../assets/team/omega.png'].default,
      github: 'https://github.com/Reymart18',
      instagram: 'https://instagram.com/princeharvey',
      facebook: 'https://www.facebook.com/JRFUTBOLEROS',
      email: 'omegareymart@gmail.com',
      number: '09385948574',
    },
    {
      name: 'Martin Louis Valentino',
      role: 'FRONT-END DEVELOPER',
      skills: ['Frameworks', 'React', 'CSS'],
      projects: ['Portfolio Website', 'Landing Page'],
      frameworks: ['React', 'Tailwind CSS', 'Bootstrap'],
      image: images['../assets/team/valentino.png'].default,
      github: 'https://github.com/Tihnn',
      instagram: 'https://instagram.com/princeharvey',
      facebook: 'https://www.facebook.com/profile.php?id=100009755924546',
      email: 'martinmalapo@gmail.com',
      number: '09303840958',
    },
    {
      name: 'Alen Fidelis',
      role: 'FULL STACK DEVELOPER',
      skills: ['Frameworks', 'MySQL', 'PHP', 'React JS', 'CSS', 'JavaScript'],
      projects: ['E-commerce Backend', 'API Development'],
      frameworks: ['React', 'Laravel'],
      image: images['../assets/team/fidelis.png'].default,
      github: 'https://github.com/Yrria',
      instagram: 'https://instagram.com/princeharvey',
      facebook: 'https://www.facebook.com/lnfdls',
      email: 'fidelisalen@gmail.com',
      number: '09951254753',
    },
    {
      name: 'Prince Harvey Nagtalon',
      role: 'FRONT-END DEVELOPER',
      skills: ['Frameworks', 'React', 'CSS'],
      projects: ['Portfolio Website', 'Landing Page'],
      frameworks: ['React', 'Bootstrap'],
      image: images['../assets/team/nagtalon.png'].default,
      github: 'https://github.com/hrvy821',
      instagram: 'https://instagram.com/princeharvey',
      facebook: 'https://www.facebook.com/harvey.nagtalon.9',
      email: 'nagtalonprinceharvey@gmail.com',
      number: '09849504736',
    },
  ]);

  const [selectedMember, setSelectedMember] = useState(null);
  const [isExiting, setIsExiting] = useState(false);

  const handleCardClick = (member) => {
    setSelectedMember(member);
    setIsExiting(false);
  };

  const closeModal = () => {
    setIsExiting(true);
    setTimeout(() => {
      setSelectedMember(null);
      setIsExiting(false);
    }, 300); // Match the duration of the exit animation
  };

  return (
    <>
      <div className="team-grid flex flex-wrap justify-center gap-16 mb-16">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="team-card flex flex-row bg-[#323846] text-white w-[480px] h-[570px] rounded-sm overflow-hidden shadow-[0_0_20px_#17a5bb] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
            onClick={() => handleCardClick(member)}
          >
            <img
              src={member.image}
              alt={`Profile picture of ${member.name}`}
              className="team-image w-[40%] object-cover bg-[#323846]"
            />
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
              <div className="team-contact text-center mt-4">
                <p className=" team-email text-[0.73rem] text-[#bbb] mb-2">{member.number}</p>
                <p className="team-email text-[0.73rem] text-[#bbb] mb-4">{member.email}</p>
                <div className="team-icons flex justify-center gap-6 mt-2">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-white hover:text-gray-300 transition-transform transform hover:scale-110"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-white hover:text-gray-300 transition-transform transform hover:scale-110"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-white hover:text-gray-300 transition-transform transform hover:scale-110"
                  >
                    <FaFacebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMember && (
        <div
          className={`modal-overlay fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 ${
            isExiting ? 'animate-fadeOut' : 'animate-fadeIn'
          }`}
          onClick={closeModal}
        >
          <div
            className="modal-content bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#0e7490] text-white p-8 rounded-lg shadow-2xl w-[90%] max-w-[900px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Section */}
            <div className="flex flex-col items-center mb-6">
              <img
                src={selectedMember.image}
                alt={`Profile picture of ${selectedMember.name}`}
                className="w-32 h-48 object-cover rounded-md mb-4 shadow-lg"
              />
              <h2 className="text-2xl font-bold text-cyan-400">{selectedMember.name}</h2>
              <p className="text-md font-semibold bg-[#112240] px-4 py-2 rounded mt-2">
                Role: {selectedMember.role}
              </p>
            </div>

            {/* Skills Section */}
            <div className="w-full mb-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {selectedMember.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-[#112240] px-4 py-2 rounded text-white shadow-md"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks Section */}
            <div className="w-full mb-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">Frameworks</h3>
              <div className="grid grid-cols-2 gap-3">
                {selectedMember.frameworks.map((framework, idx) => (
                  <div
                    key={idx}
                    className="bg-[#112240] px-4 py-2 rounded text-white shadow-md"
                  >
                    {framework}
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div className="w-full">
              <h3 className="text-lg font-semibold text-cyan-400 mb-3">Projects</h3>
              <div className="grid grid-cols-2 gap-3">
                {selectedMember.projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="bg-[#112240] px-4 py-2 rounded text-white shadow-md"
                  >
                    {project}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamCard;
