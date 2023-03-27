import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components";

interface ButtonProps {
  theme: DefaultTheme;
  children: string | JSX.Element;
  color?: string;
  size: string;
  disabled?: boolean;
}

interface sizeTypes {
  [key: string]: {
    width: string;
    height: string;
    fontSize: string;
    fontWeight: string;
  };
}

const colorStyles = css<ButtonProps>`
  /* 색상 */
  ${({ theme, color }) => {
    const selected =
      typeof color !== "undefined"
        ? theme.colors[color]
        : theme.colors["green"]; // undefined일 경우 기본 색상 설정

    return css`
      background: ${selected};
      &:active {
        background: #ffffff;
        color: #767676;
        border: 1px solid #c4c4c4;
      }
      &:disabled {
        background: #c4c4c4;
        color: #ffffff;
        pointer-events: none;
      }
    `;
  }}
`;

const sizes: sizeTypes = {
  lg: {
    width: "22rem",
    height: "68px",
    fontSize: "2.4rem",
    fontWeight: "700",
  },
  md: {
    width: "48rem",
    height: "60px",
    fontSize: "1.8rem",
    fontWeight: "700",
  },
  ms: {
    width: "12.2rem",
    height: "54px",
    fontSize: "1.6rem",
    fontWeight: "500",
  },
  s: {
    width: "8rem",
    height: "40px",
    fontSize: "1.6rem",
    fontWeight: "500",
  },
};

const sizeStyles = css<ButtonProps>`
  ${({ size }) => css`
    width: ${sizes[size].width};
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
    font-weight: ${sizes[size].fontWeight};
  `}
`;
const StyledButton = styled.button`
  /* 공통 스타일 */
  outline: none;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;

  /* 크기 */
  ${sizeStyles}
  /* 색상 */
  ${colorStyles}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

export default StyledButton;
