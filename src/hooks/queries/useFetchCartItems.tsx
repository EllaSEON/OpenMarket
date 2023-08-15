import { useQueries } from "@tanstack/react-query";
import productAPI from "../../API/productAPI";
import useFetchCartList from "./useFetchCartList";
import { CartType } from "../../types/Cart.type";

const useFetchCartItems = (token: string) => {
  const { data: cartList } = useFetchCartList(token);
  // console.log(cartList);

  const productIds = cartList.results.map((item: any) => {
    return item.product_id;
  });

  // console.log("Product IDs:", productIds);

  const queryInput = productIds.map((productId: string) => {
    return {
      queryKey: ["cartProductDetail", productId],
      queryFn: () => productAPI.fetchProductDetail(productId),
    };
  });
  // console.log("Query Input:", queryInput);

  const cartItemsResponses = useQueries({ queries: queryInput });

  // 결과를 기반으로 cartItems 생성
  const cartItems = cartList?.results?.map((item: CartType, index: any) => ({
    ...item,
    productDetail: cartItemsResponses[index]?.data,
  }));

  return { cartItems };
};

export default useFetchCartItems;
