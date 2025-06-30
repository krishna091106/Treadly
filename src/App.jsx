import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from "./componet/navbar";
import Home from "./componet/home";
import AllShoes from "./componet/allShoes";
import Demo from './componet/demo';
import Shoes from './componet/shoes';
import Store from './componet/store';
import ProductDetail from './componet/ProductDetail';

// Scroll to hash (#id) when URL changes
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <>
      <Navbar />
      <ScrollToHash />

      <Routes>
        <Route path="/" element={
          <>
            <Home />

            <Demo />

            <Shoes />

            <Store />
            
          </>
        } />

        <Route path="/Allshoes" element={<AllShoes />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
