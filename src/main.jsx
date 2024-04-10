import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import ProductsContextProvider from "./Context/Products.context.jsx";
import UserContextProvider from "./Context/UserDetails.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductsContextProvider>
    <UserContextProvider>
      <Router>
        <App />
      </Router>
    </UserContextProvider>
  </ProductsContextProvider>
);
