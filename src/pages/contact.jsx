import React, { useState, useEffect } from "react";
import '../assets/css/contact.css';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
  };

  const handleModalClose = () => {
    setMessageSent(false);
    setFormData({
      firstName: '',
      lastName: '',
      mobileNumber: '',
      email: '',
      message: '',
    });
  };

  useEffect(() => {
    if (messageSent) {
      const timer = setTimeout(() => {
        handleModalClose();
      }, 4000); // 4 seconds
      return () => clearTimeout(timer);
    }
  }, [messageSent]);

  return (
    <section
      id="contact"
      className="pagesetting min-h-screen bg-gradient-to-b from-gray-900 to-[#323846] text-white py-[40px] px-[20px] animate-fade-in"
      style={{ marginTop: 0, paddingBottom: 20, paddingTop: 90 }}
    >
      {/* Top Header */}
      <div className="text-center mb-2 animate-slide-down">
        <h1 className="contact-us text-[60px] font-bold relative inline-block glowing-header">
          CONTACT US
        </h1>
        <p className="contact-text text-lg text-gray-300 mt-4 animate-fade-in-slow">
          Let’s talk! Whether you have a question or just want to say hi, we’ll try our best to get back to you.
        </p>
        <span className="line block w-[1020px] h-1 bg-white mx-auto mt-4 rounded-full animate-grow-line inline-block"></span>
      </div>

      {/* Centered Content */}
      <div className="mt-6 flex justify-center animate-fade-in-slow">
        <div className="pager w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-text-field space-y-6 animate-slide-right" style={{ marginTop: "95px" }}>
            <div className="grid grid-cols-2 gap-8">
              <div className="transition-transform hover:scale-105">
                <label htmlFor="firstName" className="block text-gray-200 mb-2">First Name</label>
                <input
                  required
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400/60 text-gray-900 mb-4 glow-input placeholder-black-500"
                  style={{ fontSize: "14px", padding: "10px", backgroundColor: "#D9D9D9" }}
                />
              </div>
              <div className="transition-transform hover:scale-105">
                <label htmlFor="lastName" className="block text-gray-200 mb-2">Last Name</label>
                <input
                  required
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400/60 text-gray-900 mb-4 glow-input placeholder-black-500"
                  style={{ fontSize: "14px", padding: "10px", backgroundColor: "#D9D9D9" }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="transition-transform hover:scale-105">
                <label htmlFor="mobileNumber" className="block text-gray-200 mb-2">Mobile Number</label>
                <input
                  required
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="Enter your mobile number"
                  inputMode="numeric"
                  pattern="\d{1,11}"
                  maxLength={11}
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 11);
                    handleChange(e);
                  }}
                  className="place-text w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400/60 text-gray-900 mb-4 glow-input placeholder-black-500"
                  style={{ fontSize: "14px", padding: "10px", backgroundColor: "#D9D9D9" }}
                />
              </div>
              <div className="transition-transform hover:scale-105">
                <label htmlFor="email" className="block text-gray-200 mb-2">Email</label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400/60 text-gray-900 mb-4 glow-input placeholder-black-500"
                  style={{ fontSize: "14px", padding: "10px", backgroundColor: "#D9D9D9" }}
                />
              </div>
            </div>

            <div className="transition-transform hover:scale-105">
              <label htmlFor="message" className="block text-gray-200 mb-2">Your Message</label>
              <textarea
                required
                id="message"
                name="message"
                placeholder="Write your message here"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-blue-400/60 text-gray-900 min-h-32 resize-y mb-4 glow-input placeholder-black-500"
                style={{ fontSize: "14px", padding: "10px", backgroundColor: "#D9D9D9" }}
              />
            </div>

            <div className="text-center animate-bounce-slow">
              <button
                type="submit"
                className="px-6 py-3 text-white font-semibold rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg submit-btn"
                style={{
                  background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                  width: "200px",
                  height: "45px",
                  backgroundSize: "200% 200%",
                  transition: "background-position 0.3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundPosition = "right center")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundPosition = "left center")
                }
              >
                Submit
              </button>
            </div>
          </form>

          {/* Social Links */}
          <div className="link-in social-links space-y-6 animate-slide-left" style={{ marginTop: "125px", marginLeft: "100px" }}>
            <ul className="space-y-6">
              {[
                {
                  icon: "https://tse3.mm.bing.net/th/id/OIP.sUyGUWZ2i7329ifXHBakXgHaHa?w=512&h=512&rs=1&pid=ImgDetMain",
                  name: "GitHub: tfvon.tech",
                  url: "https://github.com/TFVON-Tech-Solution/Team-Portfolio",
                },
                {
                  icon: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
                  name: "Instagram: @tfvon",
                  url: "https://www.instagram.com/tfvon",
                },
                {
                  icon: "https://tse2.mm.bing.net/th/id/OIP.T5VrbJ6XosfdUtseiJrgVwHaHa?rs=1&pid=ImgDetMain",
                  name: "Facebook: tfvon",
                  url: "https://www.facebook.com/tfvon",
                },
                {
                  icon: "https://tse4.mm.bing.net/th/id/OIP.TngkmpJ-SpaOnegeGtdedQHaHa?rs=1&pid=ImgDetMain",
                  name: "Website: tfvon.tech.solution.com",
                  url: "https://www.tfvon.tech.solution.com",
                },
              ].map((link, i) => (
                <li
                  key={i}
                  className="flex items-center transition-transform hover:scale-105 pulse-social gap-5"
                  style={{ marginBottom: "20px" }}
                >
                  <img
                    src={link.icon}
                    alt={link.name}
                    className="w-12 h-12 rounded-full object-cover animate-pulse border-2 border-blue-400"
                  />
                  <span className="mx-4 text-white text-xl">•</span>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-white px-4 py-2 block rounded-md transition-colors sparkle"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Message Sent Modal with Rocket Animation */}
      {messageSent && (
        <div className="messagebox fixed top-0 left-0 w-full h-full flex justify-center items-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full space-y-6 transform transition-all duration-300 ease-in-out scale-105">
            <div className="rocket-animation mb-4 flex justify-center">
              <div className="rocket">
                <div className="rocket-body bg-gray-600 rounded-t-lg w-8 h-20"></div>
                <div className="rocket-fin bg-gray-600 w-6 h-4"></div>
                <div className="rocket-flame bg-yellow-400 w-3 h-6 rounded-t-lg"></div>
              </div>
            </div>

            <div className="message-bg bg-white p-8 rounded-xl shadow-lg max-w-sm mx-auto">
              <div className="message-bg flex justify-center mb-6">
                <div className="text-6xl text-green-500 animate-bounce">
                  <i className="fas fa-check-circle"></i>
                </div>
              </div>

              <div className="message-title text-center">
                <p className="primary-title text-2xl font-semibold text-gray-800 mb-2">
                  Your message has been sent successfully!
                </p>
                <p className="second-smg text-md text-gray-600 mb-6">
                  We appreciate your feedback. Our team will get back to you shortly.
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  className="modal-btn"
                  onClick={handleModalClose}
                  style={{
                    padding: '9px 25px',
                    background: 'linear-gradient(90deg, #48bb78, #38a169)',
                    color: 'white',
                    fontWeight: '600',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(90deg, #38a169, #2f855a)';
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(90deg, #48bb78, #38a169)';
                    e.target.style.transform = 'scale(1)';
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow = '0 0 0 3px rgba(56, 161, 105, 0.6)';
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations & Custom Enhancements */}
      <style>
        {`
          .rocket-animation {
            animation: rocketAnimation 2s forwards;
          }

          @keyframes rocketAnimation {
            0% {
              transform: translateY(100px);
              opacity: 0;
            }
            50% {
              transform: translateY(-100px);
              opacity: 1;
            }
            100% {
              transform: translateY(-200px);
              opacity: 0;
            }
          }

          .rocket {
            width: 35px;
            height: 80px;
            position: relative;
            margin: 0 auto;
            background: #444;
            border-radius: 1000px;
          }

          .rocket-body {
            width: 100%;
            height: 80%;
            background: #888;
            border-radius: 100px;
          }

          .rocket-fin {
            position: absolute;
            left: 10px;
            bottom: -10px;
            width: 15px;
            height: 40px;
            background: #f00;
            border-radius: 50%;
          }

          .rocket-flame {
            position: absolute;
            left: 3px;
            bottom: -30px;
            width: 30px;
            height: 40px;
            background: orange;
            border-radius: 50%;
            animation: flameAnimation 0.3s infinite alternate;
          }

          @keyframes flameAnimation {
            0% { transform: scale(0.8); opacity: 0.5; }
            100% { transform: scale(1); opacity: 1; }
          }

          .pulse-social:hover {
            animation: pulseLink 1s infinite;
          }

          @keyframes pulseLink {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }

          .submit-btn:hover {
            animation: glowBtn 1.5s infinite;
          }

          @keyframes glowBtn {
            0%, 100% { box-shadow: 0 0 5px #3b82f6, 0 0 10px #3b82f6; }
            50% { box-shadow: 0 0 20px #3b82f6, 0 0 30px #3b82f6; }
          }

          .glowing-header {
            animation: glowingText 1.5s ease-in-out infinite;
          }

          @keyframes glowingText {
            0%, 100% { text-shadow: 0 0 5px #fff, 0 0 10px #fff; }
            50% { text-shadow: 0 0 20px rgb(31, 26, 31), 0 0 30px rgb(179, 175, 179); }
          }

          .glow-input:focus {
            border-color: #3b82f6;
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.7);
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
