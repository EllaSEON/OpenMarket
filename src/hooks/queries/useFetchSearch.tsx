import { useQuery } from "@tanstack/react-query";
import productAPI from "../../API/productAPI";

export const useFetchSearch = (keyword: string) => {
  return useQuery(
    ["search", keyword],
    () => {
      return productAPI.fetchSearch(keyword);
    },
    { suspense: true }
  );
};

export default useFetchSearch;
