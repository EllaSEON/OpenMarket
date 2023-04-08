import styled from "styled-components";
import Button from "../../common/Button/Button";

const JoinSection = styled.section`
  width: 55rem;
  margin: 0 auto;
  padding: 4rem 3rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 0 0 10px 10px;
`;

const BuyerrBtn = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  border: 1px solid #c4c4c4;
  border-radius: 10px 10px 0 0;
  text-align: center;
  padding: 19px 0;
  width: 50%;
  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;
`;
const SuccessTxt = styled.small`
  display: block;
  margin-top: 1rem;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.green};
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
  BuyerrBtn,
  SuccessTxt,
  JoinBtn,
  Select,
  EmailInputWrapper,
};
