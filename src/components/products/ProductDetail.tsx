import React from 'react';
import { useParams } from 'react-router-dom';
import teslaModelS from '../../assets/teslaModelS.avif';
import teslaModelZ from '../../assets/teslaModelZ.webp';
import teslaModelX from '../../assets/teslaModelX.avif';
import teslaModelY from '../../assets/teslaModelY.avif';
import cybertruck from '../../assets/Cybertruck.avif';
import Roadster from '../../assets/Roadster.jpg';

interface Product {
  name: string;
  description: string;
  image: string;
}

const productDetails: Record<number, Product> = {
  1: { name: 'Model S', description: 'Description for Model S.',  image: teslaModelS },
  2: { name: 'Model 3', description: 'Description for Model Z.', image: teslaModelZ },
  3: { name: 'Model X', description: 'Description for Model X.', image: teslaModelX },
  4: { name: 'Model Y', description: 'Description for Model Y.', image: teslaModelY },
  5: { name: 'Cybertruck', description: 'Description for Cybertruck.', image: cybertruck },
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
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
