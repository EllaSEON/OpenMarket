import styled, { css } from "styled-components";

interface ButtonProps {
  children: string | JSX.Element;
  color: string;
}
const StyledButton = styled.button<ButtonProps>`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: 1px solid black;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  ${(props) => {
    const selected = props.theme.colors[props.color];

    return css`
      background: ${selected};
      &:hover {
        background: red;
      }
      &:active {
        background: yellow;
      }
    `;
  }}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

export default StyledButton;