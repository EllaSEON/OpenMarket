import styled, { css } from "styled-components";

export const ToggleWrapper = styled.div`
  width: 550px;
  margin: 0 auto;
`;

export const ToggleText = styled.button<{ active: boolean }>`
  width: 50%;
  height: 6rem;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-bottom: none;
  border-radius: 10px 10px 0 0;
  color: ${({ theme }) => theme.colors.green};
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.2rem;
  ${({ active }) => {
    if (!active) {
      return css`
        background: #f2f2f2;
        color: ${({ theme }) => theme.colors.lightGray};
      `;
    }
  }};
`;

export default ToggleText;
