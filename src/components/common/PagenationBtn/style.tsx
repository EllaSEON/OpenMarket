import styled from "styled-components";

export const PaginationWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8rem auto;
  @media screen and (max-width: 450px) {
    width: 10px;
  }
`;

export const PageNumber = styled.li<{ active?: boolean }>`
  padding: 1.2rem;
  margin: 0.5rem;
  background-color: ${({ active }) => (active ? "#333" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#333")};
  border-radius: 50%;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
    border-radius: 50%;
    color: #fff;
  }
`;

export const ArrowIconWrapper = styled.div<{ disabled: boolean }>`
  cursor: pointer;
  svg {
    stroke: ${({ theme }) => theme.colors.darkGray};
  }
  /* &:hover svg {
    stroke: black;
  } */
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;
