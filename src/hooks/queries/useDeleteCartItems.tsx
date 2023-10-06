import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import cartAPI from "../../API/cartAPI";
import { setPaymentAmount } from "../../features/paymentAmountSlice";
import { OldDataResultsType, ProductDetailType } from "../../types/Cart.type";

interface useDeleteCartItemType {
  totalPrice: number;
  totalShippingFee: number;
  cartItem: ProductDetailType;
  count: number;
}

export interface oldDataType {
  count: number;
  next: string | null; //"https://openmarket.weniv.co.kr/cart/?page=2"
  previous: string | null;
  results: OldDataResultsType[];
}

interface DeleteCartItemMutationDataType {
  cart_item_id: number;
  token: string;
}

export function useDeleteCartItem({
  totalPrice,
  totalShippingFee,
  cartItem,
  count,
}: useDeleteCartItemType) {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.login.token) || "";

  const deleteCartItemMutation = useMutation(cartAPI.deleteCartItem, {
    onSuccess: (data: any) => {
      const itemPrice = cartItem.price;
      const itemShippingFee = cartItem.shipping_fee;
      dispatch(
        setPaymentAmount({
          totalPrice: totalPrice - itemPrice * count,
          totalShippingFee: totalShippingFee - itemShippingFee,
        })
      );
    },
    onMutate: async (data: DeleteCartItemMutationDataType) => {
      // 낙관적 업데이트를 덮어쓰지 않기위해 쿼리를 수동으로 삭제

      await queryClient.cancelQueries({
        queryKey: ["cartList", token],
      });
      // 이전값
      const previousCartItems = queryClient.getQueryData(["cartList", token]);

      // 새로운 값으로 낙관적 업데이트를 진행
      queryClient.setQueryData(
        ["cartList", token],
        (oldData: oldDataType | undefined) => {
          if (!oldData) return;
          const filteredData = oldData.results.filter(
            (item: OldDataResultsType) =>
              item.cart_item_id !== data.cart_item_id
          );
          return { ...oldData, results: filteredData };
        }
      );
      // 값이 들어있는 context 객체 반환
      return { previousCartItems };
    },
    // mutation이 실패해서 데이터 업데이트가 되지 않았을때 onMutate에서 반환된 이전의 백업된 context를 사용하여 롤백 진행
    onError: (_, context: any) => {
      queryClient.setQueryData(["cartList", token], context.previousCartItems);
    },
  });

  return { deleteCartItemMutation };
}
