import React from 'react';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import '../assets/css/team.css';

// TEAM DATA
import teamMembers from './teamData';

const teamCard = () => {
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

export default teamCard;