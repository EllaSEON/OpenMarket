import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/images/Logo-hodu.svg";

function SellerHeader() {
  const navigate = useNavigate();
  return (
    <LogoWrapper>
      <LogoImg
        src={Logo}
        alt="호두마켓 로고"
        onClick={() => {
          navigate("/");
        }}
      />
      <H1Text
        onClick={() => {
          navigate("/admin");
        }}
      >
        판매자 센터
      </H1Text>
    </LogoWrapper>
  );
}
export default SellerHeader;

const LogoWrapper = styled.header`
  display: flex;
  align-items: center;
  max-width: 1380px;
  padding: 26px 0 26px 100px;
  margin: 0 auto;
  box-shadow: 0px 4px 5px -4px #0000001a;
`;

const LogoImg = styled.img`
  width: 8rem;
  height: 2.4rem;
  cursor: pointer;
`;

const H1Text = styled.h1`
  font-size: 3rem;
  line-height: 3.7rem;
  font-weight: 500;
  margin-left: 1.6rem;
  cursor: pointer;
`;
