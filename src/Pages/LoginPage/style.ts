import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginFooterUl = styled.ul`
  margin: 3rem auto;
  display: flex;
  justify-content: center;
`;

export const LoginFooterLi = styled.li`
  position: relative;
  &:first-child::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 16px;
    background-color: #333;
  }
`;

export const StyledLink = styled(Link)`
  margin: 3.3rem;
  color: #333333;
  font-size: 2rem;
  line-height: 2rem;
`;
