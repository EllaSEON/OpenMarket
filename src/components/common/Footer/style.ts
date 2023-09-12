import styled from "styled-components";

const FooterLayout = styled.footer`
  margin-top: 10rem;
  padding: 30px 0 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
`;

const ContentBox = styled.div`
  width: 100%;
  max-width: 1380px;
  padding: 0 50px;
`;

const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px ${({ theme }) => theme.colors.lightGray} solid;
`;

const PolicyList = styled.ul`
  display: flex;
  gap: 20px;
  font-size: 1.4rem;
  strong {
    font-weight: 700;
  }
  li:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const SnsBtnList = styled.ul`
  display: flex;
  gap: 14px;
  li:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
  }
`;

const BottomWrap = styled.article`
  align-self: flex-start;
  margin-top: 20px;
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.darkGray};
  p {
    font-weight: 700;
  }
  dl {
    display: flex;
  }
  dt::after {
    display: inline-block;
    padding: 0 4px;
    content: ":";
  }
  dd:nth-child(3)::before {
    display: inline-block;
    padding: 0 4px;
    content: "|";
  }
`;

export {
  FooterLayout,
  ContentBox,
  TopWrap,
  PolicyList,
  SnsBtnList,
  BottomWrap,
};
