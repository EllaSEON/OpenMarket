import { S } from "./style";
import Logo from "../../assets/images/Logo-hodu.svg";

function HeaderLogo() {
  return (
    <S.Header>
      <S.Logo src={Logo} alt="호두마켓 로고" />
    </S.Header>
  );
}

export default HeaderLogo;
