import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/store";
import * as S from "./style";
import { useMutation } from "@tanstack/react-query";
import cartAPI from "../../../API/cartAPI";

interface AmountBtnProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  stock?: number;
  productId?: string;
  cartId?: number;
  isChecked?: boolean;
  productPrice?: number;
  setTotalPrice?: React.Dispatch<React.SetStateAction<number>>;
}

function AmountBtn({
  isChecked,
  count,
  setCount,
  stock,
  productId,
  cartId,
  productPrice,
  setTotalPrice,
}: AmountBtnProps) {
  const token = useAppSelector((state: RootState) => state.login.token) || "";

  const updateQuantityMutation = useMutation(cartAPI.updateCartQuantity, {
    onSuccess: () => {},
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
      setTotalPrice?.((prev) => prev - productPrice);
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
      setTotalPrice?.((prev) => prev + productPrice);
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
