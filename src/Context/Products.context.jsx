import React, { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext({
  products: [],
  product: {},
});

export default function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([
    "Product 1",
    "Product 2",
    "Product 3",
  ]);
  return (
    <ProductsContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
