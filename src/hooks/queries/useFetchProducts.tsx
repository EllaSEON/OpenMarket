import { useQuery } from "@tanstack/react-query";
import productAPI from "../../API/productAPI";

export const useFetchProducts = (currentPage: number) => {
  return useQuery(
    ["products", currentPage],
    () => {
      return productAPI.fetchProducts(currentPage);
    },
    { suspense: true, staleTime: 1000 * 20 }
  );
};

export default useFetchProducts;
