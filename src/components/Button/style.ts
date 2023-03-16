import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components";

interface ButtonProps {
  theme: DefaultTheme;
  children: string | JSX.Element;
  color?: string;
  size: string;
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
      }
    `;
  }}
`;

const sizeStyles = css<ButtonProps>`
  ${(props) =>
    props.size === "lg" &&
    css`
      width: 22rem;
      height: 68px;
      font-size: 2.4rem;
      font-weight: 700;
    `}

  ${(props) =>
    props.size === "md" &&
    css`
      width: 48rem;
      height: 60px;
      font-size: 1.8rem;
      font-weight: 700;
    `}
    ${(props) =>
    props.size === "ms" &&
    css`
      width: 16.6rem;
      height: 54px;
      font-size: 1.6rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.size === "s" &&
    css`
      width: 8rem;
      height: 40px;
      font-size: 1.6rem;
      font-weight: 500;
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
