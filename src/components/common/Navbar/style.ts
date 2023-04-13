import styled from "styled-components";
import { Input } from "../../Join/JoinInput/style";
import SearchIcon from "../../../assets/images/icon-search.svg";

export const HomeHeader = styled.header`
  box-shadow: 0px 4px 5px -4px #0000001a;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 22px 10%;
`;

export const HeaderSearchWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const Logo = styled.img`
  width: 124px;
  height: 38px;
  cursor: pointer;
`;

export const SearchBarWrapper = styled.div`
  position: relative;
`;

export const SearchInp = styled(Input)`
  width: 400px;
  height: 46px;
  border: 2px solid ${({ theme }) => theme.colors.green};
  border-radius: 50px;
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.green};
  }
`;

export const SearchBtn = styled.button`
  background-image: url(${SearchIcon});
  width: 28px;
  height: 28px;
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
`;

export const HeaderUserWrapper = styled.div`
  display: flex;
  gap: 26px;
  align-items: center;
`;

export const CartText = styled.span`
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: ${({ theme }) => theme.colors.lightGray};
  white-space: nowrap;
`;

export const CartBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  text-align: center;
  &:hover {
    ${CartText} {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export const UserBtn = styled(CartBtn)``;
export const UserText = styled(CartText)``;
