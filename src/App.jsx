import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Orders from "./Pages/Orders";
import "./App.css";
import Product from "./Pages/Product";

function App() {
  return (
    <div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About Us</Link>
        <Link to={"/contact"}>Contact Us</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/cart"}>Cart</Link>
        <Link to={"/orders"}>Orders</Link>
      </div>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={About} path="/about" />
        <Route Component={Contact} path="/contact" />
        <Route Component={Products} path="/products" />
        <Route Component={Product} path="/product/:productId" />
        <Route Component={Cart} path="/cart" />
        <Route Component={Orders} path="/orders/:orderId/:userId" />
      </Routes>
    </div>
  );
}

export default App;
