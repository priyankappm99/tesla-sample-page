import React from 'react';
import { Link } from 'react-router-dom';
import teslaModel3 from '../../assets/teslaModel3.avif';
import teslaModelS from '../../assets/teslaModelS.avif';
import teslaModelX from '../../assets/teslaModelX.avif';
import './product.scss'; // Import your SCSS file

const products = [
    { id: 1, name: 'Model S', description: 'Description for Model S.', image: teslaModelS },
    { id: 2, name: 'Model 3', description: 'Description for Model 3.', image: teslaModel3 },
    { id: 3, name: 'Model X', description: 'Description for Model X.', image: teslaModelX },  
];

const ProductSection = () => {
  return (
    <section id="models" className="product-section scroll-hidden" style={{ backgroundImage: `url(${teslaModelX})` }}>
      <h2>Our Models</h2>
      <div className="product-list">
        {products.map(product => (
          <Link to={`/products/${product.id}`} key={product.id} className="product-item">
            <div className="product-image" style={{ backgroundImage: `url(${product.image})` }} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="book-now-button">Book Now</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="view-all-container">
        <Link to="/products" className="view-all-button">View All</Link>
      </div>
    </section>
  );
};

export default ProductSection;
