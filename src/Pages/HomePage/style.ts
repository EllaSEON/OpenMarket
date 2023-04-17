import styled from "styled-components";

export const ProductSection = styled.section`
  margin: 0 auto;
  padding: 80px 30px 0;
  max-width: 1200px;
`;

export const ProductLists = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5vh 5vw;
`;
