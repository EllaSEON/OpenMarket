import styled from "styled-components";
import { Input } from "../../auth/JoinInput/style";
import SearchIcon from "../../../assets/images/icon-search.svg";
import ShoppingBagIcon from "../../../assets/images/icon-shopping-bag.svg";
import Button from "../Button/Button";

export const HomeHeader = styled.header`
  box-shadow: 0px 4px 5px -4px #0000001a;
`;

export const Navbar = styled.nav`
  max-width: 1380px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 22px;
`;

export const HeaderSearchWrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
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
    img {
      filter: ${({ theme }) =>
        `invert(36%) sepia(95%) saturate(344%) hue-rotate(94deg) brightness(102%) contrast(88%)`};
    }
    ${CartText} {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export const UserBtn = styled(CartBtn)``;
export const UserText = styled(CartText)``;

export const ShoppingBagBtn = styled(Button)`
  position: relative;
  text-align: right;
  padding-right: 2rem;
  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    background-image: url(${ShoppingBagIcon});
  }
`;
