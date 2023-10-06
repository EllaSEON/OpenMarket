import { useQuery } from "@tanstack/react-query";
import productAPI from "../../API/productAPI";

export const useFetchProductDetail = (productId: string) => {
  return useQuery(
    ["productDetail", productId],
    () => {
      return productAPI.fetchProductDetail(productId);
    },
    { suspense: true, staleTime: 1000 * 20 }
  );
};

export default useFetchProductDetail;
