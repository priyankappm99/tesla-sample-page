import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import teslaModelS from '../../assets/teslaModelS.avif';
import teslaModelZ from '../../assets/teslaModelZ.webp';
import teslaModelX from '../../assets/teslaModelX.avif';
import teslaModelY from '../../assets/teslaModelY.avif';
import cybertruck from '../../assets/Cybertruck.avif';
import Roadster from '../../assets/Roadster.jpg';
import './product.scss'; 

const products = [
    { id: 1, name: 'Model S', description: 'Description for Model S.', image: teslaModelS },
    { id: 2, name: 'Model 3', description: 'Description for Model Z.', image: teslaModelZ },
    { id: 3, name: 'Model X', description: 'Description for Model X.', image: teslaModelX },
    { id: 4, name: 'Model Y', description: 'Description for Model Y.', image: teslaModelY },
    { id: 5, name: 'Cybertruck', description: 'Description for Cybertruck.', image: cybertruck },
    { id: 6, name: 'Roadster', description: 'Description for Roadster.', image: Roadster },
];

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event:any) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="product-list-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search models..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <SearchIcon className="search-icon" />
      </div>
      <h2>All Tesla Models</h2>
      <div className="product-list scroll-hidden">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-item">
            <div className="product-image" style={{ backgroundImage: `url(${product.image})` }} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <Link to={`/products/${product.id}`} className="book-now-button">Book Now</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
