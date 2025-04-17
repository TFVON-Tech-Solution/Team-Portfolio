import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './assets/css/index.css';

import Navbar from './components/navBar';
import Footer from './components/footer';
import ScrollToTop from './components/scrollToTop';

import Home from './pages/home';
import About from './pages/about';
import Team from './pages/team';
import Project from './pages/project';
import Contact from './pages/contact';

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.hash?.replace('#', '');
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

const HomePage = () => (
  <>
    <section id="home" className="home-section">
      <Home />
    </section>
    <section id="about" className="about-section">
      <About />
    </section>
    <section id="team" className="team-section">
      <Team />
    </section>
    <section id="project" className="project-section">
      <Project />
    </section>
    <section id="contact" className="contact-section">
      <Contact />
    </section>
    <Footer />
  </>
);

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <ScrollToSection />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
