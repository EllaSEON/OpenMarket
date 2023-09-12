import styled from "styled-components";
import MinusIcon from "../../../assets/images/icon-minus-line.svg";
import PlusIcon from "../../../assets/images/icon-plus-line.svg";
import Loading from "../../common/Loading/Loading";
import { useAppSelector } from "../../../store/hooks";

function TotalPrice() {
  const { totalPrice, totalShippingFee } = useAppSelector(
    (state) => state.paymentAmount
  );
  return (
    <PriceTextWrapper>
      <PriceBox>
        <PriceCategoryTxt>총 상품금액</PriceCategoryTxt>
        <strong>{totalPrice.toLocaleString()}</strong>
        <span> 원</span>
      </PriceBox>
      <IconImg src={MinusIcon} alt="마이너스 아이콘" />
      <PriceBox>
        <PriceCategoryTxt>상품 할인</PriceCategoryTxt>
        <strong>0</strong>
        <span> 원</span>
      </PriceBox>
      <IconImg src={PlusIcon} alt="플러스 아이콘" />
      <PriceBox>
        <PriceCategoryTxt>배송비</PriceCategoryTxt>
        <strong> {totalShippingFee.toLocaleString()}</strong>
        <span> 원</span>
      </PriceBox>
      <PriceBox>
        <PriceCategoryTxt>결제 예정 금액</PriceCategoryTxt>
        <PaymentPriceTxt>
          {(totalPrice + totalShippingFee).toLocaleString()}
        </PaymentPriceTxt>
        <span> 원</span>
      </PriceBox>
    </PriceTextWrapper>
  );
}

export default TotalPrice;

export const PriceTextWrapper = styled.div`
  width: 100%;
  margin-top: 8rem;
  display: grid;
  grid-template-columns: 1fr 34px 1fr 34px 1fr 1fr;
  padding: 46px 91px 39px 112px;
  background-color: #f2f2f2;
  border-radius: 10px;
  img {
    align-self: center;
    width: 3.4rem;
    height: 3.4rem;
  }
  @media screen and (max-width: 450px) {
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
  }
`;

export const PriceBox = styled.div`
  text-align: center;
  strong {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 30px;
  }
  span {
    font-size: 1.6rem;
    line-height: 20px;
  }
  @media screen and (max-width: 450px) {
    strong {
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 30px;
    }

    margin-right: 2rem;
  }
`;

export const PriceCategoryTxt = styled.p`
  margin-bottom: 12px;
  font-size: 1.6rem;
  line-height: 20px;
  @media screen and (max-width: 450px) {
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

export const PaymentPriceTxt = styled.strong`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 30px;
  color: #eb5757;
`;

export const IconImg = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 450px) {
    margin-right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
  }
`;
