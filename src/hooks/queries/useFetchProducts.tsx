import { useQuery } from "@tanstack/react-query";
import productAPI from "../../API/productAPI";

export const useFetchProduct = (currentPage: number) => {
  return useQuery(
    ["products", currentPage],
    () => {
      return productAPI.fetchProducts(currentPage);
    },
    { suspense: true }
  );
};

export default useFetchProduct;
