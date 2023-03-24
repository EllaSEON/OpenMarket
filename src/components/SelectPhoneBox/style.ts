import styled from "styled-components";

const Select = styled.select`
  width: 152px;
  height: 54px;
  margin-right: 1.2rem;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  text-align: center;
  font-size: 1.6rem;
  line-height: 2rem;
  &:focus {
    border-color: green;
  }
`;

export const S = {
  Select,
};
