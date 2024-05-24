import React from 'react';
import "./teslahome.scss"

const Sustainability = () => {
  return (
    <section id="sustainability" className="sustainability">
      <h2>Sustainability at Its Core</h2>
      <div className="sustainability-details">
        <div className="detail-item">
          <h3>Environmental Impact</h3>
          <p>Information on how Tesla cars reduce carbon footprint.</p>
        </div>
        <div className="detail-item">
          <h3>Renewable Energy Integration</h3>
          <p>Details on solar products and Powerwall.</p>
        </div>
        <div className="detail-item">
          <h3>Recycling and Materials</h3>
          <p>Use of sustainable and recycled materials.</p>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
