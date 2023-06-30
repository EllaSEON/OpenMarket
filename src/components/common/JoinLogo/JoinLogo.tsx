import styled from "styled-components";
import HoduLogo from "../../../assets/images/Logo-hodu.svg";

function JoinLogo() {
  return (
    <Header>
      <Logo src={HoduLogo} alt="호두마켓 로고" />
    </Header>
  );
}

export default JoinLogo;

const Header = styled.header`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10rem 0 7rem 0;
`;

const Logo = styled.img`
  margin-bottom: 3rem;
  width: 23.8rem;
  height: 7.4rem;
`;
