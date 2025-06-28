import { Routes, Route } from 'react-router-dom';
import Navbar from "./componet/navbar";
import Home from "./componet/home";
import AllShoes from "./componet/allShoes";
import Demo from './componet/demo';
import Shoes from './componet/shoes';
import Store from './componet/store';
import ProductDetail from './componet/ProductDetail';

function App() {
  return (
    <>
      <Navbar />
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
