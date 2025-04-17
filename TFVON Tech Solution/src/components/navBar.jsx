import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/css/navBar.css';
import logo from '../assets/logo.png';

const sections = ['home', 'about', 'team', 'project', 'contact'];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, section) => {
    e.preventDefault();
    setMenuOpen(false);
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
      <div className="nav-container">
      <a href="/" className="logo" onClick={(e) => handleScroll(e, 'home')}>
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
          <span>TFVON TECH SOLUTIONS</span>
        </a>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>

        <nav className={`navBar ${menuOpen ? 'open' : ''} ${activeSection === 'home' && menuOpen ? 'transparent' : ''}`}>
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => handleScroll(e, section)}
              className={`${activeSection === section ? 'active' : ''}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
