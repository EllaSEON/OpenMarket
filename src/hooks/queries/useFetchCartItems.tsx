import { useQueries } from "@tanstack/react-query";
import productAPI from "../../API/productAPI";
import useFetchCartList from "./useFetchCartList";
import { CartItemType, CartType } from "../../types/Cart.type";

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

  // 각 상품의 수량 * 가격
  const productTotalPrices = cartItems.map((item: CartItemType) => {
    const productPrice = item.productDetail?.price || 0;
    const productQuantity = item.quantity || 0;
    return productPrice * productQuantity;
  });

  const initialTotalPrice = productTotalPrices.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
    0
  );

  //배송비
  const deliveryFeeArray = cartItems.map(
    (item: CartItemType) => item.productDetail?.shipping_fee
  );
  const initialDeliveryFee = deliveryFeeArray.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
    0
  );

  return {
    cartItems,
    initialTotalPrice,
    initialDeliveryFee,
  };
};

export default useFetchCartItems;
