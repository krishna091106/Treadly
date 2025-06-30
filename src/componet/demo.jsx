import React from 'react';
import { Link } from 'react-router-dom'; // 👈 make sure to import this
import './demo.css';

const Demo = () => {
  return (
    <div className="demo-box">
      <div className="box1">
        <Link to="/#casual" className="box">
          <img src={`${import.meta.env.BASE_URL}61FCvPodc4L._UY1000_.jpg`} alt="" />
          <h1>Casual</h1>
        </Link>
        <Link to="/#basketball" className="box">
          <img src={`${import.meta.env.BASE_URL}basketball.jpg`} alt="" />
          <h1>Basketball</h1>
        </Link>
        <Link to="/#formal-chelsea" className="box">
          <img src={`${import.meta.env.BASE_URL}formal8.jpg`} alt="" />
          <h1>Chelsea</h1>
        </Link>
        <Link to="/#gym" className="box">
          <img src={`${import.meta.env.BASE_URL}gym.jpg`} alt="" />
          <h1>Gym</h1>
        </Link>
      </div>

      <div className="box2">
        <h1>COSMOS STORES</h1>
        <p>MAKE THIS SEASON YOURS</p>
      </div>
    </div>
  );
};

export default Demo;
