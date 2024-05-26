import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import teslaModel3 from '../../assets/teslaModel3.avif';
import teslaModelY from '../../assets/teslaModelY.avif';
import teslaModelS from '../../assets/teslaModelS.avif';
import teslaModelX from '../../assets/teslaModelX.avif';
import cybertruck from '../../assets/Cybertruck.avif';
import Roadster from '../../assets/Roadster.jpg';
import './product.scss';

const products = [
  { id: 1, name: 'Model S', description: 'The Tesla Model S is a remarkable electric sedan that delivers unparalleled performance with its dual motor all-wheel drive and long-range battery, capable of accelerating from 0 to 60 mph in just 2.3 seconds.', image: teslaModelS, price: '$80,000' },
  { id: 2, name: 'Model 3', description: 'The Tesla Model 3 offers an exceptional blend of performance, safety, and spaciousness, featuring a minimalist design, a range of over 350 miles, and the latest autonomous driving technology.', image: teslaModel3, price: '$60,000' },
  { id: 3, name: 'Model X', description: 'The Tesla Model X stands out as the safest, quickest, and most capable SUV, equipped with falcon wing doors, a range of up to 360 miles, and seating for up to seven adults.', image: teslaModelX, price: '$65,000' },
  { id: 4, name: 'Model Y', description: 'The Tesla Model Y is a versatile electric SUV that combines functionality and style, offering a spacious interior, a range of over 300 miles, and advanced autopilot capabilities.', image: teslaModelY, price: '$70,000' },
  { id: 5, name: 'Cybertruck', description: 'The Tesla Cybertruck redefines toughness and versatility with its ultra-hard 30X cold-rolled stainless steel exoskeleton, bulletproof glass, and an estimated range of over 500 miles.', image: cybertruck, price: '$90,000' },
  { id: 6, name: 'Roadster', description: 'The Tesla Roadster is the ultimate electric supercar, boasting a top speed of over 250 mph, a 0-60 mph time of just 1.9 seconds, and an impressive range of 620 miles per charge.', image: Roadster, price: '$75,000' },
];

const truncateDescription = (description:any, maxLength:any) => {
  if (description.length <= maxLength) {
    return description;
  }
  return description.substring(0, maxLength) + '...';
};

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  const handleSearch = (event:any) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const paginate = (pageNumber:any) => setCurrentPage(pageNumber);

  return (
    <section className="product-list-page">
      <div className="search-bar">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search models..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
          />
          <SearchIcon className="search-icon" />
        </div>
      </div>
      <h2>All Tesla Models</h2>
      <div className="product-list">
        {currentProducts.map(product => (
          <div key={product.id} className="product-item">
            <div className="product-image" style={{ backgroundImage: `url(${product.image})` }} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
              <p>{truncateDescription(product.description, 100)}</p>
              <Link to={`/products/${product.id}`} className="book-now-button">Book Now</Link>
            </div>
          </div>
        ))}
      </div>
      <ul className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <li key={index}>
            <button
              className={index + 1 === currentPage ? 'active' : ''}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
