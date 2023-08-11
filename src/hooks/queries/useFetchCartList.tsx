import { useQuery } from "@tanstack/react-query";
import cartAPI from "../../API/cartAPI";

export const useFetchCartList = (token: string) => {
  return useQuery(
    ["CartList", token],
    () => {
      return cartAPI.fetchCartList(token);
    },
    { suspense: true }
  );
};

export default useFetchCartList;
