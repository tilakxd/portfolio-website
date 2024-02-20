import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import SocialIcon from '@/components/SocialIcon'
// Define the function Hero with props as parameters
function Hero({ inView, descRef }: { inView: boolean, descRef: any }) {
  return (
      <>
      <motion.div className='flex flex-col border-2 border-rose-400 p-6 rounded-lg max-w-4xl mx-auto max-h-full'
      initial={{ transform: 'translateY(30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
          ref={descRef}
          >
        <div className='flex'>
          <h1 className='text-white text-6xl'>Hey I'm {inView} <span className='text-rose-400 text-6xl'> Tilak </span>  </h1>
          <motion.div
            animate={{
              rotate: [0, 14, -8, 14, -4, 10, 0],
              transition: {
                duration: 5,
                repeat: Infinity,
                delay: 1,
                repeatType: 'reverse', // To create the waving motion
                ref: descRef,
              },
            }}
            className='text-6xl ml-5'
          >
            👋
          </motion.div>
        </div>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-white text-4xl pt-3">
            {inView &&
              <Typewriter
                options={{
                  delay: 30,
                  strings: ["I'm a Web Developer and student at ASU"],
                  loop: false,
                  autoStart: true,
                  deleteSpeed: 604800000,
                }}
              />}
          </p>
          <ul className='mt-6 flex flex-row gap-2'>
                <SocialIcon
                 url = "https://github.com/tilakxd"
                 icon = {<svg xmlns="http://www.w3.org/2000/svg" className= "h-8 w-8 fill-slate-500" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.28 9.28 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10"/></svg>}
                 
                 />
                 <SocialIcon
                 url = "https://discord.com/users/802929652758216724"
                 icon = {<svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8' viewBox="0 0 24 24"><path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"/></svg>}
                 
                 />
                 <SocialIcon
                 url = "https://www.linkedin.com/in/tilak-patel-ab56322a2/"
                 icon = {<svg xmlns="http://www.w3.org/2000/svg" className = 'h-8 w-8'viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5M7 17v-7"/><path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011"/></g></svg>}
                 
                 />
                 <SocialIcon
                 url = "mailto:tpatel42@asu.edu"
                 icon = {<svg xmlns="http://www.w3.org/2000/svg"className = 'h-8 w-8' viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"/></svg>}                 
                 />
          </ul>
        
        
      </motion.div>
      </>
      
  );
}

// Export Hero as default
export default Hero;
