import HeaderLogo from "../../components/HeaderLogo/HeaderLogo";
import { JoinForm } from "../../components/Join/JoinForm/JoinForm";
import CheckTerm from "../../components/CheckTerm/CheckTerm";
import { S } from "./style";

function JoinPage() {
  return (
    <>
      {/* <S.JoinPageWrapper> */}
      <HeaderLogo />
      <S.JoinSection>
        <JoinForm />
      </S.JoinSection>
      <CheckTerm children="호두샵의 이용약관 및 개인정보처리방침에 대해 동의합니다" />
      {/* </S.JoinPageWrapper> */}
    </>
  );
}
export default JoinPage;
