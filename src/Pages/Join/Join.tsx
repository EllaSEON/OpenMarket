import HeaderLogo from "../../components/HeaderLogo/HeaderLogo";
import { JoinForm } from "../../components/Join/JoinForm/JoinForm";
import { S } from "./style";

function Join() {
  return (
    <>
      <HeaderLogo />
      <S.JoinSection>
        <JoinForm />
      </S.JoinSection>
    </>
  );
}
export default Join;
