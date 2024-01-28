import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { BrowserRouter as Router, Routes, Route, BrowserRouter, } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import SearchItem from "./components/SearchItem";
import Cart from "./components/Cart";
import { items } from "./components/Data";
import Footer from "./components/footer/Footer"
import Login from "./components/frontend/Login";
import Signup from "./components/Signup";


const App = () => {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  return (
  
   <BrowserRouter>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route
            path="/"
            element={<Product cart={cart} setCart={setCart} items={data} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetail cart={cart} setCart={setCart} />}
          />
          <Route
            path="/search/:term"
            element={<SearchItem cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route
            path="/login"
            element={<Login/>}
          />
         < Route
            path="/signup"
            element={<Signup/>}
          />
         </Routes>
        <Footer />
    </BrowserRouter>
  );
};


export default App;
