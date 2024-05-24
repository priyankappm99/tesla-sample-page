import React from 'react';
import "./teslahome.scss"

const Performance = () => {
  return (
    <section id="performance" className="performance">
      <h2>Unmatched Performance</h2>
      <div className="performance-details">
        <div className="detail-item">
          <h3>Acceleration</h3>
          <p>0-60 mph times, top speed.</p>
        </div>
        <div className="detail-item">
          <h3>Range</h3>
          <p>Information on the driving range per charge.</p>
        </div>
        <div className="detail-item">
          <h3>Electric Powertrain</h3>
          <p>Benefits of Tesla’s electric motors.</p>
        </div>
      </div>
    </section>
  );
};

export default Performance;
