import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/css/navBar.css';
import logo from '../assets/logo.png';

const sections = ['home', 'about', 'team', 'project', 'contact'];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = (e, section) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${section}`);
    }
  };

  useEffect(() => {
    const handleScrollHighlight = () => {
      if (location.pathname !== '/') return;

      const scrollPosition = window.scrollY + 150;

      let current = 'home';
      sections.forEach((sec) => {
        const element = document.getElementById(sec);
        if (element && element.offsetTop <= scrollPosition) {
          current = sec;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScrollHighlight);
    handleScrollHighlight();

    return () => window.removeEventListener('scroll', handleScrollHighlight);
  }, [location.pathname]);

  return (
    <header className={`header ${activeSection === 'home' ? 'transparent' : ''}`}>
      <a href="/" className={`logo ${activeSection === 'home' ? 'black-text' : ''}`} onClick={(e) => handleScroll(e, 'home')}>
        <img src={logo} alt="Logo" style={{ height: '60px' }} />
        TFVON TECH SOLUTIONS
      </a>
      <nav className="navBar">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={(e) => handleScroll(e, section)}
            className={`${location.pathname === '/' && activeSection === section ? 'active' : ''} ${activeSection === 'home' ? 'black-text' : ''}`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
