import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className="container pt-16 px-4 md:pt-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" data-aos="fade-right">
            Technologies I Work With
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg" data-aos="fade-up">
          I have a solid foundation in web development, specializing in HTML, CSS and JavaScript. 
          My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applicatioms. 
          I am also proficient in Tailwind CSS for efficient styling and design with a passion for learning.
          I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
          </p>
        </div>
            <div>
                <div className='grid grid-cols-2 text-red-700 text-3xl sm:text-4xl'>
                    <div className='space-y-2'>
                        <h2>TypeScript</h2>
                        <h2>React.js</h2>
                        <h2>Next.js</h2>
                    </div>
                    <div className='space-y-2'>
                        <h2>Tailwind CSS</h2>
                        <h2>Custom CSS</h2>
                        <h2>Node.js</h2>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills



