import { useState } from "react";
import Button from "../../components/common/Button/Button";
import Img from "../../assets/images/img.png";
import MinusIcon from "../../assets/images/icon-minus-line.svg";
import PlustIcon from "../../assets/images/icon-plus-line.svg";
import * as S from "./style";

function CartPage() {
  const [count, setCount] = useState(1);
  return (
    <S.CartPageLayout>
      <S.CartText>장바구니</S.CartText>
      <S.MenuUl>
        <input type="checkbox" />
        <li>상품정보</li>
        <li>수량</li>
        <li>상품금액</li>
      </S.MenuUl>
      <S.ProductList>
        <input type="checkbox" />
        <S.ProductInfoBox>
          <img src={Img} alt="상품이미지" />
          <div>
            <S.lightColoredTxt>백엔드글로벌</S.lightColoredTxt>
            <S.ProductNameTxt>딥러닝 개발자 무릎 담요</S.ProductNameTxt>
            <S.ProductPriceTxt>17,500원</S.ProductPriceTxt>
            <S.lightColoredTxt>택배배송/무료배송</S.lightColoredTxt>
          </div>
        </S.ProductInfoBox>
        <S.AmountBox count={count} setCount={setCount} />
        <S.TotalPriceWrapper>
          <S.TotalPriceTxt>17,500원</S.TotalPriceTxt>
          <Button type="button" size="s">
            삭제
          </Button>
        </S.TotalPriceWrapper>
      </S.ProductList>
      <S.PriceTextWrapper>
        <S.PriceBox>
          <S.PriceCategoryTxt>총 상품금액</S.PriceCategoryTxt>
          <strong>46,500</strong>
          <span> 원</span>
        </S.PriceBox>
        <img src={MinusIcon} alt="마이너스 아이콘" />
        <S.PriceBox>
          <S.PriceCategoryTxt>상품 할인</S.PriceCategoryTxt>
          <strong>0</strong>
          <span> 원</span>
        </S.PriceBox>
        <img src={PlustIcon} alt="플러스 아이콘" />
        <S.PriceBox>
          <S.PriceCategoryTxt>배송비</S.PriceCategoryTxt>
          <strong>0</strong>
          <span> 원</span>
        </S.PriceBox>
        <S.PriceBox>
          <S.PriceCategoryTxt>결제 예정 금액</S.PriceCategoryTxt>
          <S.PaymentPriceTxt>0</S.PaymentPriceTxt>
          <span> 원</span>
        </S.PriceBox>
      </S.PriceTextWrapper>
    </S.CartPageLayout>
  );
}

export default CartPage;
