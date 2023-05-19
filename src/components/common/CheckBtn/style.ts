import styled from "styled-components";

export const CircleBtn = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.colors.green};
  border-radius: 50%;
  cursor: pointer;

  &:checked {
    background: ${({ theme }) => theme.colors.green};
  }
`;
