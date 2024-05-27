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
import teslaModelBlue from '../../assets/teslaModelBlue.jpg';
import './product.scss'; // Import your SCSS file for styling

interface Product {
  name: string;
  description: string;
  price: string;
  variants: string[];
  colors: { name: string; image: string }[];
  image: string;
  detailedDescription: string;
  parts: { name: string; material: string }[];
}

const productDetails: Record<number, Product> = {
  1: {
    name: 'Model S',
    description: 'Description for Model S.',
    price: '$80,000',
    variants: ['Long Range', 'Plaid'],
    colors: [{ name: 'Red', image: teslaModelS }, { name: 'Blue', image: teslaModelBlue }],
    image: teslaModelS,
    detailedDescription: 'The Tesla Model S is an electric car that combines performance, safety, and utility. It has a long-range battery and dual motor all-wheel drive.',
    parts: [
      { name: 'Battery', material: 'Lithium-Ion' },
      { name: 'Body', material: 'Aluminum' },
      { name: 'Interior', material: 'Premium Synthetic' },
    ],
  },
  2: {
    name: 'Model 3',
    description: 'Description for Model 3.',
    price: '$40,000',
    variants: ['Standard Range Plus', 'Long Range', 'Performance'],
    colors: [{ name: 'Black', image: teslaModel3 }, { name: 'White', image: RoadsterWhite }],
    image: teslaModel3,
    detailedDescription: 'The Tesla Model 3 is a smaller, simpler, more affordable electric car. It is designed to achieve the highest safety ratings in every category.',
    parts: [
      { name: 'Battery', material: 'Lithium-Ion' },
      { name: 'Body', material: 'Aluminum and Steel' },
      { name: 'Interior', material: 'Premium Synthetic' },
    ],
  },
  3: {
    name: 'Model X',
    description: 'Description for Model X.',
    price: '$90,000',
    variants: ['Long Range', 'Plaid'],
    colors: [{ name: 'White', image: teslaModelX }, { name: 'Black', image: teslaModel3 }],
    image: teslaModelX,
    detailedDescription: 'The Tesla Model X is the safest, quickest, and most capable sport utility vehicle in history. It has falcon wing doors and seating for up to seven adults.',
    parts: [
      { name: 'Battery', material: 'Lithium-Ion' },
      { name: 'Body', material: 'Aluminum and Steel' },
      { name: 'Interior', material: 'Premium Synthetic' },
    ],
  },
  4: {
    name: 'Model Y',
    description: 'Description for Model Y.',
    price: '$50,000',
    variants: ['Long Range', 'Performance'],
    colors: [{ name: 'Black', image: teslaModelY }, { name: 'White', image: teslaModelX }],
    image: teslaModelY,
    detailedDescription: 'The Tesla Model Y is a versatile electric SUV that combines range, performance, and space. It has a spacious interior with an optional third row.',
    parts: [
      { name: 'Battery', material: 'Lithium-Ion' },
      { name: 'Body', material: 'Aluminum and Steel' },
      { name: 'Interior', material: 'Premium Synthetic' },
    ],
  },
  5: {
    name: 'Cybertruck',
    description: 'Featuring a self-healing urethane-based formula, these films are twice as thick as vinyl wraps, offering superior scratch resistance and durability. Environmentally friendly and covering all exterior stainless-steel surfaces, our films provide a seamless finish while safeguarding your vehicle\'s appearance against scratches and abrasions.',
    price: '$70,000',
    variants: ['Single Motor', 'Dual Motor', 'Tri Motor'],
    colors: [{ name: 'Stainless Steel', image: cybertruck }, { name: 'Black', image: teslaModelY }],
    image: cybertruck,
    detailedDescription: 'The Tesla Cybertruck has a distinctive design with a stainless steel exoskeleton. It is highly durable and offers exceptional performance both on and off-road.',
    parts: [
      { name: 'Exoskeleton', material: 'Ultra-Hard 30X Cold-Rolled Stainless Steel' },
      { name: 'Glass', material: 'Armor Glass' },
      { name: 'Interior', material: 'Premium Synthetic' },
    ],
  },
  6: {
    name: 'Roadster',
    description: 'Description for Roadster.',
    price: '$200,000',
    variants: ['Base', 'Founders Series'],
    colors: [{ name: 'Red', image: Roadster }, { name: 'Stainless Steel', image: RoadsterGrey }],
    image: Roadster,
    detailedDescription: 'The Tesla Roadster is the quickest car in the world, with record-setting acceleration, range, and performance. It is designed for speed and efficiency.',
    parts: [
      { name: 'Battery', material: 'Lithium-Ion' },
      { name: 'Body', material: 'Carbon Fiber' },
      { name: 'Interior', material: 'Premium Synthetic' },
    ],
  },
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

  const navigateToLogin = (e: any) => {
    e.stopPropagation();
    navigate('/login');
  };

  return (
    <div className="product-detail scroll-hidden">
      <div className="product-detail-container">
        <div className="image-container">
          <img src={selectedColor.image} alt={product.name} />
        </div>
        <div className="details-container">
          <h2>{product.name}</h2>
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
          <button className="build-and-price" onClick={navigateToLogin}>Build and Price</button>
        </div>
      </div>
      <div className="description-container">
        <h2>About {product.name}</h2>
        <p className="description">{product.detailedDescription}</p>
        <h3>Parts and Materials</h3>
        <ul>
          {product.parts.map((part, index) => (
            <li key={index}>
              <strong>{part.name}:</strong> {part.material}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
