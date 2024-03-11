import React from 'react';
import ProjectCards from './ProjectCards';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <>
      <section id='projects' className='max-w-4xl mx-auto flex w-full flex-col items-center mt-16'>
        <motion.div
          className="font-leaguespartan text-center font-bold text-5xl text-text mt-8"
          initial={{ transform: 'translateY(30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          <h1 className='text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-rose-400  mb-3'>
            Projects
          </h1>
          <div className='flex flex-col sm:flex-row gap-6 my-4'>
            <ProjectCards
              url='./project1.png'
              info="Revamped personal portfolio website using React, Next.js, Tailwind CSS, and Framer Motion. Enhances user experience with smooth animations and transitions. Ensure responsiveness and SEO optimization. Deployed the updated website with vercel."
              title="Portfolio Website"
              sourcefile="https://github.com/tilakxd/portfolio-website"
              demoLink=''
              liveDemo=''
            />
            <ProjectCards
              url='./project2.png'
              info="
              I developed a Next.js app with Mongoose for anime watch lists, integrating JWT authentication for secure user access. Using Tailwind CSS, I crafted intuitive interfaces for seamless list creation and sharing. CRUD capabilities enabled efficient management of entries, while Vercel deployment ensured scalability and reliability. RESTful APIs facilitated smooth data communication between frontend and backend."
              title="Anishare"
              sourcefile="https://github.com/tilakxd/anishare"
              demoLink='https://anishare.vercel.app/'
              liveDemo='Live Demo'
            />
          </div>
          <div className='flex flex-col sm:flex-row gap-4'>
            <ProjectCards
              url=''
              info="Currently in the Works"
              title=""
              sourcefile=""
              demoLink=''
              liveDemo=''
            />
            <ProjectCards
              url=''
              info="Currently in the Works"
              title=""
              sourcefile=""
              demoLink=''
              liveDemo=''
            />
          </div>
          <div className='flex flex-col sm:flex-row gap-4 my-4'>
            <ProjectCards
              url=''
              info="Currently in the Works"
              title=""
              sourcefile=""
              demoLink=''
              liveDemo=''
            />
            <ProjectCards
              url=''
              info="Currently in the Works"
              title=""
              sourcefile=""
              demoLink=''
              liveDemo=''
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Projects;
