import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';
import { shoesData } from './allShoes';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const shoe = shoesData.find((s) => s.id === parseInt(id));

  if (!shoe) {
    return <h2>Shoe not found!</h2>;
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {'★'.repeat(fullStars)}
        {hasHalfStar && '⯨'}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };

  const goBack = () => {
    navigate(-1); // Go back one step in history
  };
  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img src={shoe.img} alt={shoe.name} />
      </div>
      <div className="product-info">
        <h1>{shoe.name}</h1>
        <div className="stars">
          {renderStars(shoe.rating)} <span>{shoe.rating}</span>
          <p>({shoe.reviews} reviews)</p>
        </div>
        <p className="price">{shoe.price}</p>
        <p className="description">
          This is a great shoe. It's comfortable, stylish, and perfect for any occasion. 
          Buy it now and you won't regret it!
        </p>
        <button  onClick={goBack} className="back">
      ← Back
    </button>
      </div>
    </div>
  );
};

export default ProductDetail;