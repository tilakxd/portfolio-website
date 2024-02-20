import React from 'react';
import { motion } from "framer-motion";

const Navbar = () => {
  const handleClickScroll = () => {
    const element = document.getElementById('about');
    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ 
            top: elementPosition - 60,
            behavior: 'smooth'
        });
    }
};
  return (
    <motion.div
      initial={{ transform: 'translateY(-30px)', opacity: 0 }}
      animate={{ transform: 'translateY(0px)', opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96] }}
      className='fixed w-full flex justify-center mt-3'
      style={{ zIndex: 9999 }} // Ensure the navbar appears above other content
    >
      <nav className='flex border-2 border-rose-400 rounded-lg h-16 bg-black w-full max-w-screen-sm'>
        <div className='flex flex-row justify-between items-center w-full px-5'>
          <img draggable="false" src="/me.png" className='h-10 w-10' alt="" />
          <div className="flex">
            <button onClick={handleClickScroll} className='text-rose-400 hover:bg-rose-300 rounded-lg h-8 mx-2'>About Me</button>
            <button className='text-rose-400 hover:bg-rose-300 rounded-lg h-8 mx-2'>Projects</button>
          </div>
          <a href='https://github.com/framer/motion/issues/2398' target='_blank' className='text-rose-400 hover:bg-rose-300 rounded-lg h-8 pt-1'>Source</a>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
