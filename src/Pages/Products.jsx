import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ProductsContext } from "../Context/Products.context";

export default function Products() {
  const { products = [] } = useContext(ProductsContext);
  console.log(products);
  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product, index) => (
          <Link key={`product-link-${index}`} to={`/products/${index + 1}`}>
            {product}
          </Link>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
