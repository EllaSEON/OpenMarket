import styled from "styled-components";

export const TabTitleWrapper = styled.ul`
  margin: 140px 22px 0 22px;
  border-top: 3px solid ${({ theme }) => theme.colors.darkGray};
  border-left: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export const TabTitle = styled.li<{ active?: boolean }>`
  display: inline-block;
  border-right: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-bottom: 1px solid
    ${({ active }) => (active ? "transparent" : "#c4c4c4")};
  background: ${({ active }) => (active ? "#fff" : "#fafafa")};
  width: 25%;
  padding: 15px 20px;
  text-align: center;
  font-weight: 700;
  font-size: 1.8rem;
  cursor: pointer;
`;
export const TabContent = styled.div`
  margin: 0 22px 0 22px;
  line-height: 500px;
  font-size: 4rem;
  text-align: center;
  border-right: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-left: 1px solid ${({ theme }) => theme.colors.lightGray};
`;
