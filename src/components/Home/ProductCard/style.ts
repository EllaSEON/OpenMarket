import styled from "styled-components";

export const ProductCardList = styled.li`
  cursor: pointer;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export const StoreName = styled.p`
  margin: 1.6rem 0 1rem 0;
  font-size: 1.6rem;
  line-height: 2.2rem;
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const ProductName = styled.strong`
  font-size: 1.8rem;
  line-height: 2.2rem;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-top: 1rem;
`;

export const ProductPrice = styled.span`
  margin-right: 2px;
  font-size: 2.4rem;
  line-height: 3rem;
  font-weight: 700;
`;

export const PriceUnit = styled.span`
  font-size: 1.6rem;
  line-height: 2.2rem;
`;
