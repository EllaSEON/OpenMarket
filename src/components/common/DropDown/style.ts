import styled from "styled-components";

export const DropDownWrapper = styled.ul`
  position: absolute;
  top: 90px;
  z-index: 10;
  padding: 1rem;
  width: 130px;
  height: 108px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  box-shadow: 0px 4px 5px -4px #0000001a;
  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: -9px;
    transform: translateX(-50%) rotate(45deg);
    width: 15px;
    height: 15px;
    background: #fff;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    border-right: none;
    border-bottom: none;
  }
`;

export const DropDownList = styled.li`
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkGray};
  &:hover {
    color: ${({ theme }) => theme.colors.green};
    border: 1px solid ${({ theme }) => theme.colors.darkGray};
    border-radius: 10px;
    white-space: nowrap;
  }
`;
