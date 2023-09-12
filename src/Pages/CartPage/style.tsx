import styled from "styled-components";

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
  li {
    font-size: 1.8rem;
    line-height: 22px;
    text-align: center;
  }
  @media screen and (max-width: 450px) {
    display: none;
  }
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
