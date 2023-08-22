import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/store";
import * as S from "./style";
import { QueryClient, useMutation } from "@tanstack/react-query";
import cartAPI from "../../../API/cartAPI";
import { setPaymentAmount } from "../../../features/paymentAmountSlice";
import useFetchCartItems from "../../../hooks/queries/useFetchCartItems";

interface AmountBtnProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  stock?: number;
  productId?: string;
  cartId?: number;
  isChecked?: boolean;
  productPrice?: number;
}

function AmountBtn({
  isChecked,
  count,
  setCount,
  stock,
  productId,
  cartId,
  productPrice,
}: AmountBtnProps) {
  const queryClient = new QueryClient();
  const dispatch = useAppDispatch();
  const token = useAppSelector((state: RootState) => state.login.token) || "";
  const { totalPrice, totalShippingFee } = useAppSelector(
    (state) => state.paymentAmount
  );
  const { refetch } = useFetchCartItems(token);

  const updateQuantityMutation = useMutation(cartAPI.updateCartQuantity, {
    onSuccess: () => {
      refetch();
    },
  });

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
    if (productId !== undefined && cartId !== undefined) {
      const quantityData = {
        token: token,
        product_id: productId,
        cart_item_id: cartId,
        quantity: count - 1,
        is_active: true,
      };
      updateQuantityMutation.mutate(quantityData);
    }
    if (isChecked && productPrice !== undefined) {
      dispatch(
        setPaymentAmount({
          totalPrice: totalPrice - productPrice,
          totalShippingFee: totalShippingFee,
        })
      );
    }
  };

  const handleIncrease = () => {
    if (stock !== undefined && count < stock) {
      setCount(count + 1);
    }
    if (productId !== undefined && cartId !== undefined) {
      const quantityData = {
        token: token,
        product_id: productId,
        cart_item_id: cartId,
        quantity: count + 1,
        is_active: true,
      };
      updateQuantityMutation.mutate(quantityData);
    }
    if (isChecked && productPrice !== undefined) {
      dispatch(
        setPaymentAmount({
          totalPrice: totalPrice + productPrice,
          totalShippingFee: totalShippingFee,
        })
      );
    }
  };

  return (
    <S.AmountBox>
      <S.CountBtn type="button" onClick={handleDecrease} disabled={count <= 1}>
        -
      </S.CountBtn>
      <S.AmountText>{count}</S.AmountText>
      <S.CountBtn
        type="button"
        onClick={handleIncrease}
        disabled={count >= (stock || 0)}
      >
        +
      </S.CountBtn>
    </S.AmountBox>
  );
}

export default AmountBtn;
