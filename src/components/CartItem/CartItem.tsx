import { useState } from "react";
import * as S from "./style";
import Button from "../../components/common/Button/Button";
import Img from "../../assets/images/img.png";
import { Item } from "../../features/cartListSlice";

interface CartItemProps {
  cartItem: Item | null;
}

function CartItem({ cartItem }: CartItemProps) {
  const [count, setCount] = useState(1);
  return (
    <S.ProductList>
      <input type="checkbox" />
      <S.ProductInfoBox>
        <img src={Img} alt="상품이미지" />
        <div>
          <S.ShopText>백엔드글로벌</S.ShopText>
          <S.ProductNameTxt>딥러닝 개발자 무릎 담요</S.ProductNameTxt>
          <S.ProductPriceTxt>17500원</S.ProductPriceTxt>
          <S.ShipText>택배배송/무료배송</S.ShipText>
        </div>
      </S.ProductInfoBox>
      <S.AmountBox count={count} setCount={setCount} />
      <S.TotalPriceWrapper>
        <S.TotalPriceTxt>17500원</S.TotalPriceTxt>
        <Button type="button" size="s">
          삭제
        </Button>
      </S.TotalPriceWrapper>
    </S.ProductList>
  );
}

export default CartItem;
