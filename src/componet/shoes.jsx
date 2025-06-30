import React from 'react';
import { Link } from 'react-router-dom';
import './shoes.css';

const shoesCategories = [
  {
    id: 'casual',
    title: 'Casual Shoes',
    products: [
      { id: 1, name: 'Nike SB Dunk', rating: 4.5, price: '₹12,999', reviews: '10.9k', img: 'nike b.jpg' },
      { id: 10, name: 'Nike Dunk Low White', rating: 5, price: '₹15,999', reviews: '13.4k', img: 'NIKE+DUNK+LOW.avif' },
      { id: 13, name: 'Samba OG Shoes', rating: 5, price: '₹16,999', reviews: '14.2k', img: 'Samba_OG_Shoes_White_IG1963_01_standard.avif' },
      { id: 14, name: 'New Balance 9060', rating: 4.5, price: '₹13,999', reviews: '11.8k', img: 'U9060GRY_030_P1.jpg' },
    ],
  },
  {
    id: 'basketball',
    title: 'Basketball Shoes',
    products: [
      { id: 4, name: 'Reebok Classic Red Blaze', rating: 4.5, price: '₹9,499', reviews: '9.5k', img: 'basketball.jpg' },
      { id: 3, name: 'Puma Street', rating: 4, price: '₹8,999', reviews: '8.2k', img: 'puma1.avif' },
      { id: 17, name: 'White Leather Sneaker', rating: 4, price: '₹8,499', reviews: '8.1k', img: '61FCvPodc4L._UY1000_.jpg' },
      { id: 16, name: 'Green Casuals', rating: 3.5, price: '₹5,999', reviews: '6.5k', img: '-473Wx593H-469496597-green-MODEL.avif' },
    ],
  },
  {
    id: 'formal-chelsea',
    title: 'Formal & Chelsea Shoes',
    products: [
      { id: 39, name: 'Jodhpur Boot', rating: 4.5, price: '₹18,499', reviews: '15.5k', img: 'formal18.jpg' },
      { id: 38, name: 'Chukka Boot', rating: 5, price: '₹20,999', reviews: '17.1k', img: 'formal17.jpg' },
      { id: 30, name: 'Tassel Loafer', rating: 4.5, price: '₹14,999', reviews: '12.5k', img: 'formal9.jpg' },
      { id: 23, name: 'Modern Oxford', rating: 4, price: '₹11,999', reviews: '9.9k', img: 'formal2.jpg' },
    ],
  },
  {
    id: 'gym',
    title: 'Gym Shoes',
    products: [
      { id: 7, name: 'Nike Free Metcon Black', rating: 4, price: '₹11,999', reviews: '9.8k', img: 'gym.jpg' },
      { id: 2, name: 'Adidas Ultraboost', rating: 5, price: '₹17,999', reviews: '12.1k', img: 'adidas1.jpg' },
      { id: 19, name: 'Red & Black Sports', rating: 4, price: '₹9,999', reviews: '9.3k', img: 'MP000000023806527_437Wx649H_202409232142381.avif' },
      { id: 18, name: 'Black & White High-Tops', rating: 4.5, price: '₹11,499', reviews: '10.8k', img: 'images.jpg' },
    ],
  },
];

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

const Shoes = () => {
  return (
    <div>
      {shoesCategories.map((category) => (
        <div key={category.id}>
          <div id={category.id} className="text-box-s">
            <h1 className="tag">{category.title}</h1>
            <p className="tag">Just in now</p>
          </div>
          <div className="shoes-container">
            {category.products.map((shoe, index) => (
              <div className="shoes-box" key={index}>
                <Link to={`/product/${shoe.id}`}>
                  <img
                    src={`${import.meta.env.BASE_URL}${shoe.img}`}
                    alt={shoe.name}
                  />
                  <div className="shoes-text">
                    <ul>
                      <h3>{shoe.name}</h3>
                      <p>{shoe.price}</p>
                    </ul>
                    <div className="stars">
                      {renderStars(shoe.rating)} <span>{shoe.rating}</span>
                      <p>{shoe.reviews}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shoes;
