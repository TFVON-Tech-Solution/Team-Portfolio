import React from 'react';
import '../assets/css/about.css';
import htmlImage from '../assets/progLanguage/html.png'; // eto ung gayahin mo vey, htmlImage 
import javascript from '../assets/progLanguage/java-script.png';

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-cyan-500 text-white py-[100px] px-[20px]"
    >
      <div className="p-9 text-left">
  <h1 className="text-[50px] font-bold text-left mb-6">ABOUT US</h1>

  <div className="flex flex-col lg:flex-row w-full p-8">
  {/* Left Content */}
  <div className="lg:w-1/2 w-full text-left list-none">
    
  <h2 className="text-2xl font-bold mb-6">Team Background</h2>

  <img src={htmlImage} alt="TFVON Logo" className="h-[55px]" />  {/* eto import image ung htmlImage sa import yan ang nilagay ko kaya gaagwion mo papaliotan moyun dipende sa image  */}
  <img src={javascript} alt="TFVON Logo" className="h-[55px]" /> {/* eto next example */}

<div className="space-y-5 pl-4 text-justify">
  <p>
    We are a small team of students and friends who enjoy building websites and learning more about coding.
    We started with basic HTML and CSS, then moved on to JavaScript and PHP.
  </p>

  <p>
    Some of us focus on design, while others handle the behind-the-scenes work. 
    We help each other, share ideas, and grow through practice.
  </p>

  <p>
    This portfolio shows some of the projects we’ve created together.
  </p>
</div>

{/* Divider line */}
<div className="w-full h-px bg-white mt-10 mb-6"></div>

<h2 className="text-2xl font-bold mb-4">Focus Area</h2>
    <h3 className="text-xl font-semibold mb-2">Front End</h3>
    <p className="mb-4">
      With the use of HTML as structure and CSS for designing, our team focuses more on designing the page using
      creative and user-friendly interfaces.
    </p>

    <h3 className="text-xl font-semibold mb-2">Back End</h3>
    <p className="mb-4">
      We also handle the behind-the-scenes processes using backend tools like PHP and MySQL to store and manage data effectively.
    </p>
  </div>
</div>

</div>
    </section>
  );
};

export default About;




