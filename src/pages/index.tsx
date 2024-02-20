import React from 'react'
import Navbar from '@/components/Navbar'
import Divider from '@/components/Divider'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import { useInView } from 'react-intersection-observer';


const Index = () => {
  const [ref, inView] = useInView({
    threshold: 0.01,
    triggerOnce: true,
  });
  return (
    <div>
      <Navbar />
      <Divider />
      <Hero inView = {inView} descRef = {ref} />
      <About />
      <Projects />
      
    </div>
  )
}

export default Index