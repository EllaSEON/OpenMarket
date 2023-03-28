import styled from "styled-components";

const CheckContainer = styled.div`
  width: 55rem;
  margin: 0 auto;
  text-align: center;
`;
const InputWrapper = styled.div`
  margin: 3.4rem 3.4rem;
`;

const InputCheck = styled.input`
  width: 16px;
  height: 16px;
  margin-right: 10px;
  cursor: pointer;
`;

const Label = styled.label`
  font-size: 1.6rem;
  line-height: 2rem;
  cursor: pointer;
`;

export const S = {
  CheckContainer,
  InputWrapper,
  InputCheck,
  Label,
};
