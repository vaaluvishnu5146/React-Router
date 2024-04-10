import { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Orders from "./Pages/Orders";
import "./App.css";
import Product from "./Pages/Product";
import Index from "./Pages";
import CartIndex from "./Pages/Cart";
import { UserDetailsContext } from "./Context/UserDetails.context";

function App() {
  const { userName } = useContext(UserDetailsContext);
  return (
    <div className="container">
      <div className="sidebar">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About Us</Link>
        <Link to={"/contact"}>Contact Us</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/cart"}>Cart</Link>
        <Link to={"/orders"}>Orders</Link>
      </div>
      <div className="content-container">
        <div className="header">{userName}</div>
        <div className="route-rendering-area">
          <Routes>
            <Route Component={Home} path="/" />
            <Route Component={About} path="/about" />
            <Route Component={Contact} path="/contact" />
            <Route Component={Index} path="/products">
              <Route Component={Product} path="/products/:productId" />
            </Route>
            <Route Component={CartIndex} path="/cart" />
            <Route Component={Orders} path="/orders/:orderId/:userId" />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
