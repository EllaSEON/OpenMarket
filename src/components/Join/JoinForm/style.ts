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

const InputPhoneWrapper = styled(InputWrapper)``;

const JoinBtn = styled(Button)`
  margin: auto;
  display: block;
`;

export const S = {
  JoinSection,
  ErrorText,
  InputPhoneWrapper,
  JoinBtn,
};
