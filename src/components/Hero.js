import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <h1>Get Fit, Stay Healthy</h1>
      <p>Your fitness journey starts here. Join us today!</p>
      <button onClick={() => scrollToSection('services')}>Explore Services</button>
    </section>
  );
};

export default Hero;
