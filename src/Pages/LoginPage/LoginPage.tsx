import LoginForm from "../../components/auth/LoginForm/LoginForm";
import HeaderLogo from "../../components/common/JoinLogo/JoinLogo";
import * as S from "./style";

function LoginPage() {
  return (
    <>
      <HeaderLogo />
      <LoginForm />
      <footer>
        <S.LoginFooterUl>
          <S.LoginFooterLi>
            <S.StyledLink to="/join">회원가입</S.StyledLink>
          </S.LoginFooterLi>
          <S.LoginFooterLi>
            <S.StyledLink to="">비밀번호 찾기</S.StyledLink>
          </S.LoginFooterLi>
        </S.LoginFooterUl>
      </footer>
    </>
  );
}
export default LoginPage;
