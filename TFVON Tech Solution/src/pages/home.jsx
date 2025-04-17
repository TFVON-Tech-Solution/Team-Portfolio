import React from 'react';
import bg from '../assets/bg.png';
import '../assets/css/home.css';
import logo from '../assets/logo.png';
import useScrollButtonFunction from '../components/buttonFunction'; // import the hook
import { motion } from 'framer-motion'; // don't forget this import

const Home = () => {
  const scrollToSection = useScrollButtonFunction();

  return (
    <>
      <section
        id="home"
        className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat py-[100px] px-[20px]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Text Section - Left Side */}
        <div className="w-1/2 flex flex-col justify-center items-end text-right pl-10 pr-24">
          <h1 className="text-[48px] font-extrabold text-white leading-[1.2] mb-6">
            Innovating Today,<br />Empowering Tomorrow's Tech
          </h1>
          <p className="text-white mb-8 text-[18px] font-medium leading-relaxed">
            Join <strong>TFVON TECH SOLUTIONS</strong> – Your <br />
            Gateway to Innovation, Skills,<br />
            and Future-Ready Tech Careers.
          </p>
          <div className="flex gap-6">
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

        {/* Logo Section - Right Side */}
        <div className="w-1/2 flex justify-center items-center">
          <img src={logo} alt="TFVON Logo" className="max-w-full h-auto" />
        </div>
      </section>

      {/* Second Section */}
      <section>
        <div className="min-h-screen bg-gradient-to-r from-cyan-500 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-8">
          <div className="text-center mb-12">
            <h1 className="text-white text-2xl font-bold">Hi We our</h1>
            <h2 className="text-white text-4xl font-extrabold">TFVON TECH SOLUTIONS</h2>
            <p className="text-white text-lg font-semibold">
              A Dynamic <span className="text-cyan-400">A</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl border-2 border-cyan-400 p-6 w-80 text-white bg-slate-800"
            >
              <h3 className="font-extrabold text-lg mb-2">INTRODUCTION</h3>
              <p className="text-justify text-sm">
                while our mission is to provide scalable, secure, and customer-centric
                technology solutions that drive success, foster innovation, and create
                value for our clients through excellence and ethical practices.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl border-2 border-cyan-400 p-6 w-80 text-white bg-slate-800"
            >
              <h3 className="font-extrabold text-lg mb-2">Mission</h3>
              <p className="text-justify text-sm">
                while our mission is to provide scalable, secure, and customer-centric
                technology solutions that drive success, foster innovation, and create
                value for our clients through excellence and ethical practices.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl border-2 border-cyan-400 p-6 w-80 text-white bg-slate-800"
            >
              <h3 className="font-extrabold text-lg mb-2">Vision</h3>
              <p className="text-justify text-sm">
                At TFVON TECH SOLUTIONS, our vision is to be a global leader in
                innovative IT services, delivering cutting-edge digital transformation
                solutions that empower businesses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
