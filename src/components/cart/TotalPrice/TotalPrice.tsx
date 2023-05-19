import MinusIcon from "../../../assets/images/icon-minus-line.svg";
import PlusIcon from "../../../assets/images/icon-plus-line.svg";
import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/store";
import * as S from "./style";

function TotalPrice() {
  const selectedTotalPrice = useAppSelector(
    (state: RootState) => state.cartList.selectedTotalPrice
  );
  return (
    <S.PriceTextWrapper>
      <S.PriceBox>
        <S.PriceCategoryTxt>총 상품금액</S.PriceCategoryTxt>
        <strong>{selectedTotalPrice.toLocaleString()}</strong>
        <span> 원</span>
      </S.PriceBox>
      <img src={MinusIcon} alt="마이너스 아이콘" />
      <S.PriceBox>
        <S.PriceCategoryTxt>상품 할인</S.PriceCategoryTxt>
        <strong>0</strong>
        <span> 원</span>
      </S.PriceBox>
      <img src={PlusIcon} alt="플러스 아이콘" />
      <S.PriceBox>
        <S.PriceCategoryTxt>배송비</S.PriceCategoryTxt>
        <strong>0</strong>
        <span> 원</span>
      </S.PriceBox>
      <S.PriceBox>
        <S.PriceCategoryTxt>결제 예정 금액</S.PriceCategoryTxt>
        <S.PaymentPriceTxt>
          {selectedTotalPrice.toLocaleString()}
        </S.PaymentPriceTxt>
        <span> 원</span>
      </S.PriceBox>
    </S.PriceTextWrapper>
  );
}

export default TotalPrice;
