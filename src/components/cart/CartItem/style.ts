import styled from "styled-components";
import AmountBtn from "../../common/AmountBtn/AmountBtn";
import Button from "../../common/Button/Button";

export const ProductList = styled.div`
  display: grid;
  margin-bottom: 1rem;
  grid-template-columns: 1fr 4fr 1fr 1fr;
  align-items: center;
  gap: 30px;
  width: 100%;
  padding: 20px 100px 18px 20px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  @media screen and (max-width: 450px) {
    display: block;
    padding: 2rem 2rem 0 2rem;
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
  @media screen and (max-width: 450px) {
    img {
      width: 13rem;
      height: 13rem;
    }
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

export const WebDeleteBtn = styled(Button)`
  @media screen and (max-width: 450px) {
    display: none;
  }
`;

export const MobileDeleteBtn = styled.button`
  font-size: 2.5rem;
  font-weight: 700;
  display: none;
  @media screen and (max-width: 450px) {
    display: block;
  }
`;

export const MobileDeleteBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
