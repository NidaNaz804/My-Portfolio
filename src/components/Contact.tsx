import React from 'react';
import { FiMail } from 'react-icons/fi';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Contact = () => {
  return (
    <div id="contact" className="pt-32 container px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Get in Touch Section */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white" data-aos="fade-right">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-lg" data-aos="fade-up">
            Drop me a line, give me a call, or send a message by submitting the form below.
          </p>
          <div className="flex items-center space-x-2" data-aos="fade-up" data-aos-delay="200">
            <FiMail size={20} className="text-red-500" />
            <span className="text-gray-300">nidanaz804@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2" data-aos="fade-up" data-aos-delay="400">
            <BsFillTelephoneFill size={20} className="text-red-500" />
            <span className="text-gray-300">(+92) 333-3255677</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="space-y-8">
          {/* Name Input */}
          <div className="flex flex-col gap-1" data-aos="fade-left">
            <label htmlFor="name" className="text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="h-10 bg-transparent border border-red-800 rounded-md px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Name"
            />
          </div>
          {/* Email Input */}
          <div className="flex flex-col gap-1" data-aos="fade-left" data-aos-delay="200">
            <label htmlFor="email" className="text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="h-10 bg-transparent border border-red-800 rounded-md px-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Email"
            />
          </div>
          {/* Message Textarea */}
          <div className="flex flex-col gap-1" data-aos="fade-left" data-aos-delay="400">
            <label htmlFor="message" className="text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="bg-transparent border border-red-800 rounded-md px-3 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Message"
            />
          </div>
          {/* Submit Button */}
          <button
            className="bg-red-800 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-300"
            data-aos="zoom-in"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
