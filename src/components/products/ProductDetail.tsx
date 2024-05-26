import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import teslaModel3 from '../../assets/teslaModel3.avif';
import teslaModelY from '../../assets/teslaModelY.avif';
import teslaModelS from '../../assets/teslaModelS.avif';
import teslaModelX from '../../assets/teslaModelX.avif';
import cybertruck from '../../assets/Cybertruck.avif';
import Roadster from '../../assets/Roadster.jpg';
import RoadsterGrey from '../../assets/RoadsterGrey.avif';
import RoadsterWhite from '../../assets/RoadsterWhite.jpg';

import teslaModelBlue from '../../assets/teslaModelBlue.jpg'
import './product.scss'; // Import your SCSS file for styling

interface Product {
  name: string;
  description: string;
  price: string;
  variants: string[];
  colors: { name: string; image: string }[];
  image: string;
}

const productDetails: Record<number, Product> = {
  1: { name: 'Model S', description: 'Description for Model S.', price: '$80,000', variants: ['Long Range', 'Plaid'], colors: [{ name: 'Red', image: teslaModelS }, { name: 'Blue', image: teslaModelBlue }], image: teslaModelS },
  2: { name: 'Model 3', description: 'Description for Model 3.', price: '$40,000', variants: ['Standard Range Plus', 'Long Range', 'Performance'], colors: [{ name: 'Black', image: teslaModel3 }, { name: 'White', image: RoadsterWhite }], image: teslaModel3 },
  3: { name: 'Model X', description: 'Description for Model X.', price: '$90,000', variants: ['Long Range', 'Plaid'], colors: [{ name: 'White', image: teslaModelX }, { name: 'Black', image: teslaModel3 }], image: teslaModelX },
  4: { name: 'Model Y', description: 'Description for Model Y.', price: '$50,000', variants: ['Long Range', 'Performance'], colors: [{ name: 'Black', image: teslaModelY }, { name: 'White', image: teslaModelX }], image: teslaModelY },
  5: { name: 'Cybertruck', description: 'Featuring a self-healing urethane-based formula, these films are twice as thick as vinyl wraps, offering superior scratch resistance and durability. Environmentally friendly and covering all exterior stainless-steel surfaces, our films provide a seamless finish while safeguarding your vehicle\'s appearance against scratches and abrasions.',
   price: '$70,000', variants: ['Single Motor', 'Dual Motor', 'Tri Motor'], colors: [{ name: 'Stainless Steel', image: cybertruck }, { name: 'Black', image: teslaModelY }], image: cybertruck },
  6: { name: 'Roadster', description: 'Description for Roadster.', price: '$200,000', variants: ['Base', 'Founders Series'], colors: [{ name: 'Red', image: Roadster }, { name: 'Stainless Steel', image: RoadsterGrey }], image: Roadster },
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const productId = Number(id);
  const product = productDetails[productId];
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail scroll-hidden">
      <div className="product-detail-container">
        <div className="image-container">
          <img src={selectedColor.image} alt={product.name} />
        </div>
        <div className="details-container">
          <p className="price">Price: {product.price}</p>
          <div className="color-selector">
            <h3>Select Color:</h3>
            {product.colors.map((color, index) => (
              <button
                key={index}
                className={selectedColor.name === color.name ? 'active' : ''}
                onClick={() => setSelectedColor(color)}
              >
                {color.name}
              </button>
            ))}
          </div>
          <button className="build-and-price" onClick={() => navigate(`/customize/${productId}`)}>Build and Price</button>
        </div>
      </div>
      <div className="description-container">
        <h2>{product.name}</h2>
        <p className="description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
