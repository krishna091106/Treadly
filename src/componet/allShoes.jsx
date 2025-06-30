import React from 'react';
import { Link } from 'react-router-dom';
import './shoes.css';

export const shoesData = [
  { id: 1, name: 'Nike SB Dunk', rating: 4.5, price: '₹12,999', reviews: '10.9k', img: 'nike b.jpg' },
  { id: 2, name: 'Adidas Ultraboost', rating: 5, price: '₹17,999', reviews: '12.1k', img: 'adidas1.jpg' },
  { id: 3, name: 'Puma Street', rating: 4, price: '₹8,999', reviews: '8.2k', img: 'puma1.avif' },
  { id: 4, name: 'Reebok Classic Red Blaze', rating: 4.5, price: '₹9,499', reviews: '9.5k', img: 'basketball.jpg' },
  { id: 5, name: 'Casual Retro Sneaker', rating: 3.5, price: '₹6,999', reviews: '7.1k', img: 'c.jpg' },
  { id: 6, name: 'Chelsea Boots Brown', rating: 5, price: '₹14,999', reviews: '11.2k', img: 'chelsea.jpg' },
  { id: 7, name: 'Nike Free Metcon Black', rating: 4, price: '₹11,999', reviews: '9.8k', img: 'gym.jpg' },
  { id: 10, name: 'Nike Dunk Low White', rating: 5, price: '₹15,999', reviews: '13.4k', img: 'NIKE+DUNK+LOW.avif' },
  { id: 11, name: 'Nike Waffle Navy', rating: 4.5, price: '₹10,999', reviews: '10.5k', img: 'NIKE+WAFFLE+NAV.avif' },
  { id: 12, name: 'Palermo Sneakers', rating: 4, price: '₹7,999', reviews: '7.8k', img: 'Palermo-Sneakers.avif' },
  { id: 13, name: 'Samba OG Shoes', rating: 5, price: '₹16,999', reviews: '14.2k', img: 'Samba_OG_Shoes_White_IG1963_01_standard.avif' },
  { id: 14, name: 'New Balance 9060', rating: 4.5, price: '₹13,999', reviews: '11.8k', img: 'U9060GRY_030_P1.jpg' },
  { id: 15, name: 'BMW M Motorsport', rating: 4, price: '₹9,999', reviews: '9.1k', img: "BMW-M-Motorsport-Drift-Cat-5-Ultra-II-Kid's-Sneakers.avif" },
  { id: 16, name: 'Green Casuals', rating: 3.5, price: '₹5,999', reviews: '6.5k', img: '-473Wx593H-469496597-green-MODEL.avif' },
  { id: 17, name: 'White Leather Sneaker', rating: 4, price: '₹8,499', reviews: '8.1k', img: '61FCvPodc4L._UY1000_.jpg' },
  { id: 18, name: 'Black & White High-Tops', rating: 4.5, price: '₹11,499', reviews: '10.8k', img: 'images.jpg' },
  { id: 19, name: 'Red & Black Sports', rating: 4, price: '₹9,999', reviews: '9.3k', img: 'MP000000023806527_437Wx649H_202409232142381.avif' },
  { id: 22, name: 'Classic Chelsea', rating: 4.5, price: '₹13,999', reviews: '11.1k', img: 'formal1.jpg' },
  { id: 23, name: 'Modern Oxford', rating: 4, price: '₹11,999', reviews: '9.9k', img: 'formal2.jpg' },
  { id: 24, name: 'Suede Tassel Loafer', rating: 5, price: '₹16,999', reviews: '13.9k', img: 'formal3.jpg' },
  { id: 25, name: 'Leather Derby', rating: 4.5, price: '₹14,999', reviews: '12.3k', img: 'formal4.jpg' },
  { id: 26, name: 'Wingtip Brogue', rating: 4, price: '₹12,999', reviews: '10.7k', img: 'formal5.jpg' },
  { id: 27, name: 'Velvet Slipper', rating: 5, price: '₹18,999', reviews: '15.1k', img: 'formal6.jpg' },
  { id: 28, name: 'Patent Leather Oxford', rating: 4.5, price: '₹15,999', reviews: '13.2k', img: 'formal7.jpg' },
  { id: 29, name: 'Double Monk Strap', rating: 4, price: '₹13,499', reviews: '11.3k', img: 'formal8.jpg' },
  { id: 30, name: 'Tassel Loafer', rating: 4.5, price: '₹14,999', reviews: '12.5k', img: 'formal9.jpg' },
  { id: 31, name: 'Plain Toe Derby', rating: 4, price: '₹11,499', reviews: '9.6k', img: 'formal10.jpg' },
  { id: 32, name: 'Cap Toe Oxford', rating: 5, price: '₹17,999', reviews: '14.8k', img: 'formal11.jpg' },
  { id: 33, name: 'Split Toe Derby', rating: 4.5, price: '₹15,499', reviews: '12.9k', img: 'formal12.jpg' },
  { id: 34, name: 'Wholecut Oxford', rating: 4, price: '₹13,999', reviews: '11.6k', img: 'formal13.jpg' },
  { id: 35, name: 'Saddle Shoe', rating: 5, price: '₹19,999', reviews: '16.2k', img: 'formal14.jpg' },
  { id: 36, name: 'Apron Toe Derby', rating: 4.5, price: '₹16,499', reviews: '13.8k', img: 'formal15.jpg' },
  { id: 37, name: 'Bicycle Toe Derby', rating: 4, price: '₹12,499', reviews: '10.4k', img: 'formal16.jpg' },
  { id: 38, name: 'Chukka Boot', rating: 5, price: '₹20,999', reviews: '17.1k', img: 'formal17.jpg' },
  { id: 39, name: 'Jodhpur Boot', rating: 4.5, price: '₹18,499', reviews: '15.5k', img: 'formal18.jpg' },
  { id: 42, name: 'Kiltie Loafer', rating: 4.5, price: '₹17,499', reviews: '14.5k', img: 'formal21.jpg' }
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

const AllShoes = () => {
  return (
    <section id="all-Shoes">
      <div></div>
      <div className="text-box-s">
        <h1>All Brand Shoes</h1>
        <p>Just in now</p>
      </div>
      <div className="shoes-container">
        {shoesData.map((shoe) => (
          <div className="shoes-box" key={shoe.id}>
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
    </section>
  );
};

export default AllShoes;
