import styled from "styled-components";
import Button from "../../common/Button/Button";

export const LoginForm = styled.form`
  width: 55rem;
  padding: 3.4rem 3.5rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 0 0 10px 10px;
  @media screen and (max-width: 450px) {
    width: 38rem;
  }
`;

export const LoginBtn = styled(Button)`
  margin: 3.6rem auto 0 auto;
  display: block;
  @media screen and (max-width: 450px) {
    width: 30rem;
  }
`;

export const LoginInput = styled.input`
  width: 48rem;
  margin-bottom: 6px;
  outline: none;
  border: none;
  padding: 1.7rem 0 1.7rem 0;
  font-size: 1.6rem;
  line-height: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
  }
  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.green};
  }
  @media screen and (max-width: 450px) {
    width: 30rem;
  }
`;

export const ErrorText = styled.small`
  display: block;
  margin: 2.6rem 0 2.6rem 0;
  font-size: 1.6rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.red};
`;

export const TestAccountTxt = styled.div`
  font-size: 1.6rem;
  padding: 1rem;
  line-height: 2.4rem;
`;
