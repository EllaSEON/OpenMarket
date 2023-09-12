import styled from "styled-components";

export const AmountBox = styled.div`
  display: flex;
  margin: 3rem 0 3rem 0;
  width: 15rem;
  height: 5rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 5px;
  @media screen and (max-width: 450px) {
    margin: 3rem auto;
  }
`;

export const CountBtn = styled.button`
  width: 5rem;
  height: 5rem;
  font-size: 3rem;
`;

export const AmountText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  font-size: 1.8rem;
  line-height: 22px;
  border-left: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-right: 1px solid ${({ theme }) => theme.colors.lightGray};
`;
