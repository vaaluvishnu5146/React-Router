import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../Context/Products.context";

export default function Product() {
  const { productId } = useParams();
  const { products = [] } = useContext(ProductsContext);
  console.log("Product page", products);
  return <div>Product is {productId}</div>;
}
