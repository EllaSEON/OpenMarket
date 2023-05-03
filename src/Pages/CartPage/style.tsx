import styled from "styled-components";
import AmountBtn from "../../components/common/AmountBtn/AmountBtn";

export const CartPageLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  margin: 54px auto;
`;
export const CartText = styled.h2`
  margin-bottom: 54px;
  font-size: 3.6rem;
  font-weight: 700;
  line-height: 44px;
`;

export const MenuUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr;
  gap: 30px;
  padding: 20px 100px 18px 20px;
  margin-bottom: 35px;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background: #f2f2f2;
  input {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid ${({ theme }) => theme.colors.green};
    border-radius: 50%;
    cursor: pointer;
  }
  input:checked {
    background: ${({ theme }) => theme.colors.green};
  }
  li {
    font-size: 1.8rem;
    line-height: 22px;
    text-align: center;
  }
`;

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 200px;
  padding: 20px 100px 18px 20px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  input {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid ${({ theme }) => theme.colors.green};
    border-radius: 50%;
    cursor: pointer;
  }
  input:checked {
    background: ${({ theme }) => theme.colors.green};
  }
`;

export const ProductInfoBox = styled.div`
  display: flex;
  white-space: nowrap;
  img {
    width: 160px;
    height: 160px;
    border-radius: 10px;
    margin-right: 3.6rem;
  }
`;

export const lightColoredTxt = styled.p`
  font-size: 1.4rem;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.darkGray};
`;
export const ProductNameTxt = styled.p`
  margin: 10px 0 10px 0;
  font-size: 1.8rem;
  line-height: 22px;
`;
export const ProductPriceTxt = styled.p`
  margin-bottom: 40px;
  font-size: 1.8rem;
  line-height: 20px;
  font-weight: 700;
`;

export const AmountBox = styled(AmountBtn)``;

export const TotalPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TotalPriceTxt = styled.p`
  margin-bottom: 2.6rem;
  font-size: 1.8rem;
  line-height: 22px;
  font-weight: 700;
  color: #eb5757;
`;

export const PriceTextWrapper = styled.div`
  margin-top: 8rem;
  display: grid;
  grid-template-columns: 1fr 34px 1fr 34px 1fr 1fr;
  width: 100%;
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
