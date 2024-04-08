import { useParams } from "react-router-dom";

export default function Product() {
  const { productId } = useParams();
  return <div>Product is {productId}</div>;
}
