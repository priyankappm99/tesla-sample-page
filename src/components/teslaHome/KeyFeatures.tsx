import React from 'react';
import './teslahome.scss'; // Import your SCSS file
import teslaModelS from '../../assets/teslaModelS.avif';

const KeyFeatures = () => {
  return (
    <section id="features" className="key-features" style={{ backgroundImage: `url(${teslaModelS})` }}>
      <h2>Key Features</h2>
      <div className="features-list">
        <div className="feature-item">
          <h3>Autopilot</h3>
          <p>Description of Tesla's advanced driver-assistance system.</p>
        </div>
        <div className="feature-item">
          <h3>Interior</h3>
          <p>Highlights of the luxurious and tech-forward interior design.</p>
        </div>
        <div className="feature-item">
          <h3>Charging</h3>
          <p>Information about charging options and Supercharger network.</p>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
