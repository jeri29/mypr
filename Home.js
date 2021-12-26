import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Home() {
  return (
    <>
    
      <HeroSection />
      <Cards />
      <Navbar />
      <Footer />
    </>
  );
}

export default Home;
