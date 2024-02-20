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
              url='./test.png'
              info="what do u mean ew0hf0 9few09u f090euw f0fw[09fuw f9weuF9UEWF 0[UFE09WUF0 E9UF90WEUF 0W9EUF09UE F0UEW09F U0H FOCSUIH DUHIHAIS FIAGF IUSHFISH FIA I"
            />
            <ProjectCards
              url='./test.png'
              info="what do u mean ew0hf0 9few09u f090euw f0fw[09fuw f9weuF9UEWF 0[UFE09WUF0 E9UF90WEUF 0W9EUF09UE F0UEW09F U0H FOCSUIH DUHIHAIS FIAGF IUSHFISH FIA I"
            />
          </div>
          <div className='flex flex-col sm:flex-row gap-4'>
            <ProjectCards
              url='./test.png'
              info="what do u mean ew0hf0 9few09u f090euw f0fw[09fuw f9weuF9UEWF 0[UFE09WUF0 E9UF90WEUF 0W9EUF09UE F0UEW09F U0H FOCSUIH DUHIHAIS FIAGF IUSHFISH FIA I"
            />
            <ProjectCards
              url='./test.png'
              info="what do u mean ew0hf0 9few09u f090euw f0fw[09fuw f9weuF9UEWF 0[UFE09WUF0 E9UF90WEUF 0W9EUF09UE F0UEW09F U0H FOCSUIH DUHIHAIS FIAGF IUSHFISH FIA I"
            />
          </div>
          <div className='flex flex-col sm:flex-row gap-4 my-4'>
            <ProjectCards
              url='./test.png'
              info="what do u mean ew0hf0 9few09u f090euw f0fw[09fuw f9weuF9UEWF 0[UFE09WUF0 E9UF90WEUF 0W9EUF09UE F0UEW09F U0H FOCSUIH DUHIHAIS FIAGF IUSHFISH FIA I"
            />
            <ProjectCards
              url='./test.png'
              info="what do u mean ew0hf0 9few09u f090euw f0fw[09fuw f9weuF9UEWF 0[UFE09WUF0 E9UF90WEUF 0W9EUF09UE F0UEW09F U0H FOCSUIH DUHIHAIS FIAGF IUSHFISH FIA I"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Projects;
