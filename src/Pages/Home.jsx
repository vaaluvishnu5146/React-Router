import { useContext } from "react";
import { ProductsContext } from "../Context/Products.context";

export default function Home() {
  const { products = [] } = useContext(ProductsContext);
  console.log("Home page", products);
  return <div>Home</div>;
}
