import { useQuery } from "@tanstack/react-query";
import productAPI from "../../API/productAPI";

export const useProduct = (currentPage: number) => {
  return useQuery(["products", currentPage], () => {
    return productAPI.fetchProducts(currentPage);
  });
};

export default useProduct;
