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
    <header
      className={`header fixed top-0 left-0 w-full h-[50px] z-[100] text-white transition-colors duration-300 ease-in-out ${activeSection === 'home'
        ? 'bg-[rgba(33,33,33,0.58)]'
        : 'bg-[#212121]'
        }`}
    >
      <div className="nav-container w-full h-full flex items-center justify-between px-[3%]">
        <a href="/"
          className="logo flex items-center gap-[10px] font-bold text-white no-underline text-[18px]"
          onClick={(e) => handleScroll(e, 'home')}
        >
          <img className="imagelogo" src={logo} alt="Logo" style={{ height: '40px' }} />
          <span className="navtitle">TFVON TECH SOLUTIONS</span>
        </a>

        <div
          className="hamburger hidden flex-col gap-1 cursor-pointer z-[101]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`bar w-[25px] h-[3px] bg-white transition-all duration-300 ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar w-[25px] h-[3px] bg-white transition-all duration-300 ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar w-[25px] h-[3px] bg-white transition-all duration-300 ${menuOpen ? 'open' : ''}`}></div>
        </div>

        <nav className={`navBar ${menuOpen ? 'open' : ''} ${activeSection === 'home' && menuOpen ? 'transparent' : ''}`}>
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => handleScroll(e, section)}
              className={`group relative text-white no-underline text-[18px] py-[5px] transition-colors duration-300 ${activeSection === section ? 'active font-bold text-cyan-300' : ''
                }`}
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
