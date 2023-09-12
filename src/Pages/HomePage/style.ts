import styled from "styled-components";

export const ProductSection = styled.section`
  margin: 0 auto;
  padding: 80px 0 0;
  max-width: 1200px;

  @media screen and (max-width: 450px) {
    width: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ProductLists = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1vh 1vw;
  @media screen and (max-width: 450px) {
    grid-template-columns: 180px 180px;
    gap: 10px;
  }
`;
