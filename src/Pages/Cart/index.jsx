import CardDetailsContextProvider from "../../Context/CardDetails.context";
import Cart from "./Cart";

export default function CartIndex() {
  return (
    <CardDetailsContextProvider>
      <Cart />
    </CardDetailsContextProvider>
  );
}
