import { useParams, useSearchParams } from "react-router-dom";

export default function Orders() {
  const { orderId = "", userId = "" } = useParams();
  // const searchParms = useSearchParams();
  // console.log(searchParms[0].get("color"), searchParms[0].get("size"));
  return (
    <div>
      Order Id = {orderId} and userId = {userId}
    </div>
  );
}
