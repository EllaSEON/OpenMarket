import styled from "styled-components";
import Button from "../../components/common/Button/Button";

export const ProductWrapper = styled.div`
  display: flex;
  gap: 5rem;
  padding: 8rem 2.2rem 0 2.2rem;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ProductImgBox = styled.div`
  width: 50%;
  img {
    width: 100%;
    max-width: 600px;
    height: 100%;
    max-height: 600px;
  }
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;
export const ProductCartWrapper = styled.div`
  max-width: 63rem;
  width: 50%;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const SellerText = styled.p`
  font-size: 1.8rem;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const ProductText = styled.strong`
  display: block;
  margin: 16px auto 20px;
  font-size: 3.6rem;
  line-height: 4.5rem;
  @media screen and (max-width: 450px) {
    font-size: 2.5rem;
  }
`;

export const PriceText = styled.p`
  margin-bottom: 13.8rem;
  font-size: 3.6rem;
  line-height: 45px;
  font-weight: 700;
  span {
    font-size: 1.8rem;
    line-height: 22px;
    font-weight: 400;
  }
  @media screen and (max-width: 450px) {
    font-size: 2.5rem;
    margin-bottom: 6rem;
  }
`;

export const DeliveryText = styled.p`
  margin-bottom: 2rem;
  font-size: 1.6rem;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const hr = styled.hr`
  border: 1px solid #c4c4c4;
`;

export const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0 22px 0;
`;

export const TotalText = styled.p`
  display: inline;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 22px;
  @media screen and (max-width: 450px) {
    font-size: 1.4rem;
  }
`;

export const TotalAmountText = styled(TotalText)`
  color: ${({ theme }) => theme.colors.lightGray};
  span {
    color: ${({ theme }) => theme.colors.green};
    font-size: 2rem;
  }
  &::after {
    content: "|";
    margin-left: 10px;
  }
`;

export const TotalPriceText = styled.p`
  display: inline;
  margin-left: 10px;
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 45px;
  color: ${({ theme }) => theme.colors.green};
  span {
    font-size: 1.8rem;
    line-height: 22px;
  }
  @media screen and (max-width: 450px) {
    font-size: 2rem;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PurchaseBtn = styled(Button)`
  width: 416px;
  height: 60px;
`;
export const CartBtn = styled(Button)`
  width: 200px;
  height: 60px;
  font-size: 1.8rem;
  background: ${({ theme }) => theme.colors.darkGray};
`;
