import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import * as S from "./style";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import cartAPI from "../../../API/cartAPI";
import { setPaymentAmount } from "../../../features/paymentAmountSlice";

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
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.login.token) || "";
  const { totalPrice, totalShippingFee } = useAppSelector(
    (state) => state.paymentAmount
  );
  const queryClient = useQueryClient();
  const updateQuantityMutation = useMutation(cartAPI.updateCartQuantity, {
    onSuccess() {
      queryClient.invalidateQueries(["cartList"]);
    },
  });

  const handleDecrease = () => {
    if (isChecked && count > 1) {
      setCount(count - 1);
    }
    if (isChecked && productId !== undefined && cartId !== undefined) {
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
    if (isChecked && stock !== undefined && count < stock) {
      setCount(count + 1);
    }
    if (isChecked && productId !== undefined && cartId !== undefined) {
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
