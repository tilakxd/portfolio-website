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
            />
            <ProjectCards
              url=''
              info="Currently in the Works"
              title=""
              sourcefile=""
            />
          </div>
          <div className='flex flex-col sm:flex-row gap-4'>
            <ProjectCards
              url=''
              info="Currently in the Works"
              title=""
              sourcefile=""
            />
            <ProjectCards
              url=''
              info="Currently in the Works"
              title=""
              sourcefile=""
            />
          </div>
          <div className='flex flex-col sm:flex-row gap-4 my-4'>
            <ProjectCards
              url=''
              info="Currently in the Works"
              title=""
              sourcefile=""
            />
            <ProjectCards
              url=''
              info="Currently in the Works"
              title=""
              sourcefile=""
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Projects;
