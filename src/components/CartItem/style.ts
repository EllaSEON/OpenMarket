import styled from "styled-components";
import AmountBtn from "../common/AmountBtn/AmountBtn";

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

export const ShopText = styled.p`
  font-size: 1.4rem;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.darkGray};
`;
export const ShipText = styled(ShopText)``;
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

export const NoItemBox = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.3rem;
  }
  small {
    display: block;
    margin-top: 17px;
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`;
