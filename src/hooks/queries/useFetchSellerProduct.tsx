import { useQuery } from "@tanstack/react-query";
import sellerProductAPI from "../../API/sellerProductAPI";

function useFetchSellerProduct(token: string) {
  return useQuery(
    ["sellerProduct", token],
    () => {
      return sellerProductAPI.fetchSellerProduct(token);
    },
    { suspense: true }
  );
}

export default useFetchSellerProduct;
