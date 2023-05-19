import styled from "styled-components";

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
`;

export const PriceCategoryTxt = styled.p`
  margin-bottom: 12px;
  font-size: 1.6rem;
  line-height: 20px;
`;

export const PaymentPriceTxt = styled.strong`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 30px;
  color: #eb5757;
`;
