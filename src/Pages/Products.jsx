import { Link } from "react-router-dom";

export default function Products() {
  const products = ["Product1", "product2", "Product3"];
  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product, index) => (
          <Link to={`/product/${index + 1}`}>{product}</Link>
        ))}
      </div>
    </div>
  );
}
