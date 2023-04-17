import styled from "styled-components";

export const ProductSection = styled.section`
  margin: 0 auto;
  padding: 80px 0 0;
  max-width: 1200px;
`;

export const ProductLists = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1vh 1vw;
`;
