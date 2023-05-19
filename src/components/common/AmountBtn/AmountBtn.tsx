import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/store";
import { fetchModifyCartQuantity } from "../../../features/cartListSlice";
import * as S from "./style";

interface AmountBtnProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  stock?: number;
  productId?: number;
  cartId?: number;
}

function AmountBtn({
  count,
  setCount,
  stock,
  productId,
  cartId,
}: AmountBtnProps) {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state: RootState) => state.login.token) || "";

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
      if (productId !== undefined && cartId !== undefined) {
        dispatch(
          fetchModifyCartQuantity({
            TOKEN: token,
            product_id: productId,
            cart_item_id: cartId,
            quantity: count - 1,
            is_active: true,
          })
        );
      }
    }
  };

  const handleIncrease = () => {
    if (stock !== undefined && count < stock) {
      setCount(count + 1);
      if (productId !== undefined && cartId !== undefined) {
        dispatch(
          fetchModifyCartQuantity({
            TOKEN: token,
            product_id: productId,
            cart_item_id: cartId,
            quantity: count + 1,
            is_active: true,
          })
        );
      }
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
