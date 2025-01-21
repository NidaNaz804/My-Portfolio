import React from 'react';
import NavBar from './NavBar';

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Content */}
      <div className="container flex flex-col-reverse lg:flex-row items-center justify-center h-[calc(100vh-60px)] py-12">
        {/* Hero Text */}
        <div className="text-center lg:text-left px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Nida Naz
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Frontend Developer
          </h2>
        </div>

        {/* Hero Image */}
        <div className="mb-8 lg:mb-0">
          <img
            src="/potfolio-pic.jpg"
            alt="Nida Naz"
            className="w-40 h-40 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;