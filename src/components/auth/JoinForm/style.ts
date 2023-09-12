import styled from "styled-components";
import Button from "../../common/Button/Button";

const JoinForm = styled.form`
  width: 55rem;
  margin: 0 auto;
  padding: 4rem 3rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 0 0 10px 10px;
  @media screen and (max-width: 450px) {
    width: 38rem;
  }
`;

const JoinBtn = styled(Button)`
  margin: auto;
  display: block;
  @media screen and (max-width: 450px) {
    width: 32rem;
  }
`;

export const Select = styled.select`
  width: 152px;
  height: 54px;
  margin-right: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 5px;
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
  JoinForm,
  JoinBtn,
  Select,
  EmailInputWrapper,
};
