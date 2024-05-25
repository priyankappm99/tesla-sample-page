import React from 'react';
import { useParams } from 'react-router-dom';
import teslaModel3 from '../../assets/teslaModel3.avif';
import teslaModelY from '../../assets/teslaModelY.avif';
import teslaModelS from '../../assets/teslaModelS.avif';
import teslaModelX from '../../assets/teslaModelX.avif';
import cybertruck from '../../assets/Cybertruck.avif';
import Roadster from '../../assets/Roadster.jpg';
import './product.scss'; // Import your SCSS file for styling

interface Product {
  name: string;
  description: string;
  image: string;
}

const productDetails: Record<number, Product> = {
  1: { name: 'Model S', description: 'Description for Model S.',  image: teslaModelS },
  2: { name: 'Model 3', description: 'Description for Model 3.', image: teslaModel3 },
  3: { name: 'Model X', description: 'Description for Model Z.', image: teslaModelX },
  4: { name: 'Model Y', description: 'Description for Model Y.', image: teslaModelY },
  5: { name: 'Cybertruck', description: 'Featuring a self-healing urethane-based formula, these films are twice as thick as vinyl wraps, offering superior scratch resistance and durability. Environmentally friendly and covering all exterior stainless-steel surfaces, our films provide a seamless finish while safeguarding your vehicle\'s appearance against scratches and abrasions.', image: cybertruck },
  6: { name: 'Roadster', description: 'Description for Roadster.', image: Roadster },
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const productId = Number(id);
  const product = productDetails[productId];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail scroll-hidden">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ maxWidth: '100%', height: 'auto' }} />
      <div className="description-container">
        <h2>Elevate your {product.name}'s style and protection with our premium color paint films, exclusive to Tesla</h2>
        <p className="description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
