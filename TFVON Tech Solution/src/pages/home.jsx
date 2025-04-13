import React from 'react';
import bg from '../assets/bg.png'; // Adjust path if needed

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat py-[100px] px-[20px]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="text-[50px] text-white font-bold">
        Welcome to TFVON Tech Solution
      </h1>
    </section>
  );
};

export default Home;