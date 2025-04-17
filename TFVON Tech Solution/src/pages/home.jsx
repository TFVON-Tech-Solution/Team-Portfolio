import React, { useState, useEffect } from 'react';
import bg from '../assets/bg.png';
import '../assets/css/home.css';
import logo from '../assets/logo.png';
import useScrollButtonFunction from '../components/buttonFunction';
import { motion } from 'framer-motion';

const Home = () => {
  const scrollToSection = useScrollButtonFunction();

  const words = ["And", "Innovative", "IT", "Company", "Software Company", "Technology"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let word = words[currentWordIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      setDisplayText(word.substring(0, charIndex + 1));
      charIndex++;

      if (charIndex === word.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentWordIndex((prev) => prev === words.length - 1 ? 0 : prev + 1);
        }, 2000);
      }
    }, 150);

    return () => clearInterval(typeInterval);
  }, [currentWordIndex]);

  return (
    <>
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat py-10 px-5"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-end text-center md:text-right px-4 md:px-12">
          <h1 className="text-[30px] md:text-[48px] font-extrabold text-white leading-tight mb-6">
            Innovating Today,<br />Empowering Tomorrow's Tech
          </h1><br />
          <p className="text-white mb-8 text-base md:text-[18px] font-medium leading-relaxed">
            Join <strong>TFVON TECH SOLUTIONS</strong> – Your <br />
            Gateway to Innovation, Skills,<br />
            and Future-Ready Tech Careers.
          </p>
          <br />

          {/* Responsive Button Section */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-end items-center">
            <button
              onClick={() => scrollToSection('project')}
              className="w-[130px] h-[48px] bg-cyan-400 hover:bg-cyan-500 text-white font-semibold rounded-full transition duration-300"
            >
              Project
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="w-[130px] h-[48px] bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-full transition duration-300"
            >
              Team
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          <img src={logo} alt="TFVON Logo" className="max-w-[250px] md:max-w-full h-auto" />
        </div>
      </section>

      <section>
        <div className="min-h-screen bg-gradient-to-r from-cyan-500 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-5 md:p-8">
          <div className="text-center mb-10 md:mb-12">
            <h1 className="text-white text-lg md:text-2xl font-bold">Hi We are</h1>
            <h2 className="text-white text-3xl md:text-4xl font-extrabold">TFVON TECH SOLUTIONS</h2>
            <p className="text-white text-sm md:text-lg font-semibold">
              A Dynamic <span className="text-cyan-400">{displayText}</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[ 
              { title: "INTRODUCTION", text: "Our mission is to provide scalable, secure, and customer-centric technology solutions that drive success, foster innovation, and create value for our clients through excellence and ethical practices." },
              { title: "MISSION", text: "Our mission is to provide scalable, secure, and customer-centric technology solutions that drive success, foster innovation, and create value for our clients through excellence and ethical practices." },
              { title: "VISION", text: "At TFVON TECH SOLUTIONS, our vision is to be a global leader in innovative IT services, delivering cutting-edge digital transformation solutions that empower businesses." }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.08, rotate: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
                className="rounded-3xl border-2 border-cyan-400 p-6 md:p-8 w-[90%] md:w-96 min-h-[300px] text-white bg-slate-800 shadow-lg flex flex-col justify-center items-center text-center"
              >
                <h3 className="font-extrabold text-lg md:text-xl mb-4">{item.title}</h3>
                <p className="text-sm md:text-base leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
