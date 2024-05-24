import React from 'react';
import Cybertruck from '../../assets/Cybertruck.avif';
import "./teslahome.scss"

const HeroSection = () => {
  return (
    <header className="hero-section " id="home" style={{ backgroundImage: `url(${Cybertruck})` }}>
      <div className="hero-text">
        <h1>Experience the Future of Driving</h1>
        <p>Discover the innovation and performance of Tesla's flagship models.</p>
        <a href="#features" className="cta-button">Explore Now</a>
      </div>
    </header>
  );
};

export default HeroSection;
