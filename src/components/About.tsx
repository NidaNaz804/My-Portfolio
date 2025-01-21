import React from 'react';

const About = () => {
  return (
    <div id="about" className="container pt-16 px-4 md:pt-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" data-aos="fade-right">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg" data-aos="fade-up">
          I am a passionate and dedicated front-end developer with a knack for creating functional and user-friendly web applications. 
          Through my projects, such as a BMI calculator, To-Do List, Quiz App, Digital Clock, and more, I have honed my skills in React, 
          Next.js, TypeScript, and Tailwind CSS. I enjoy building intuitive interfaces and solving real-world problems through clean and 
          efficient code. With a strong foundation in modern web development, I am constantly learning and eager to take on new 
          challenges to expand my expertise. 
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-96" data-aos="flip-up">
          <img
            src="/aboutme.jpg"
            alt="About Me"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;





