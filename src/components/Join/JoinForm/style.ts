import styled from "styled-components";
import Button from "../../common/Button/Button";
import { InputWrapper } from "../JoinInput/style";

const JoinSection = styled.section`
  width: 55rem;
  margin: 0 auto;
  padding: 4rem 3rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 10px;
`;
const ErrorText = styled.small`
  display: block;
  margin-top: 1rem;
  font-size: 1.4rem;
  font-weight: 500;
  color: #eb5757;
`;

const JoinBtn = styled(Button)`
  margin: auto;
  display: block;
`;

export const Select = styled.select`
  width: 152px;
  height: 54px;
  margin-right: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 5px;
  text-align: center;
  font-size: 1.6rem;
  line-height: 2rem;
  &:focus {
    border-color: green;
  }
`;

export const EmailInputWrapper = styled.div`
  display: flex;
  margin: 1rem 0 0 0;
  span {
    align-self: center;
    margin: 0 1.2rem 0 0;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2rem;
  }
`;

export const S = {
  JoinSection,
  ErrorText,
  JoinBtn,
  Select,
  EmailInputWrapper,
};
