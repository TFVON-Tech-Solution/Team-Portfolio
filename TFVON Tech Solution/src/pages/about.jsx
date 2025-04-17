import React from 'react';
import '../assets/css/about.css';
import htmlImage from '../assets/progLanguage/html.png';
import javascript from '../assets/progLanguage/java-script.png';
import php from '../assets/progLanguage/php.png';
import prog from '../assets/progLanguage/programming.png';
import css from '../assets/progLanguage/css.png';
import bullet from '../assets/components/bullet.png';

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-cyan-500 text-white py-[100px] px-[20px]"
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-start gap-10">
        {/* Left Content */}
        <div className="p-8 md:p-12 md:w-2/3 space-y-6">
          <h1 className="section text-4xl font-extrabold text-white flex items-center gap-2">
            <span className="text-red-500 text-5xl">
              <img src={bullet} alt="Bullet Icon" className="h-10 md:h-10" />
            </span>
            <span className="text-[50px]">ABOUT US</span>
          </h1>

          <div className="space-y-4 text-justify">
            <div className="intro">
              <h2 className="teamBg font-bold text-[25px]">Team Background</h2>
              <p>
                &nbsp;&nbsp;We are a small team of students and friends who enjoy building websites and learning more about coding.
                We started with basic HTML and CSS, then moved on to JavaScript and PHP.
              </p>
              <br />
              <p>
                &nbsp;&nbsp;Some of us focus on design, while others handle the behind-the-scenes work. We help each other, share
                ideas, and grow through practice.
              </p>
              <br />
              <p>This portfolio shows some of the projects we’ve created together.</p>
            </div>

            <hr className="border-white/30 my-4" />

            <div>
              <h2 className="area font-bold text-[25px]">Focus Area</h2>
              <div className="fend mt-2">
                <h3 className="font-semibold text-lg">Front-End</h3>
                <p>
                  &nbsp;&nbsp;With the use of HTML as structure and CSS for designing, our team focuses more on designing the page
                  using creative and user-friendly interfaces.
                </p>
              </div>
              <div className="mt-3">
                <h3 className="font-semibold text-lg">Back-End</h3>
                <p>
                  &nbsp;&nbsp;We also handle the behind-the-scenes processes using backend tools like PHP and MySQL to store and
                  manage data effectively.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column for Icons */}
        <div className="prog-icons md:w-1/3 flex flex-wrap items-center justify-center md:items-center md:justify-center gap-10">
          <img src={prog} alt="Programming Icon" className="w-20 md:w-24 object-contain" />
          <img src={htmlImage} alt="HTML Icon" className="w-20 md:w-24 object-contain" />
          <img src={css} alt="CSS Icon" className="w-20 md:w-24 object-contain" />
          <img src={php} alt="PHP Icon" className="w-20 md:w-24 object-contain" />
          <img src={javascript} alt="JavaScript Icon" className="w-20 md:w-24 object-contain" />
        </div>

      </div>
    </section>
  );
};

export default About;
