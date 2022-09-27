import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import About from '../../components/About';
import Creation from '../../components/Creation';
import Team from '../../components/Team';
import Event from '../../components/Event';
import Faq from '../../components/Faq';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero />
      <About />
      <Creation />
      <Event />
      <Team />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home
