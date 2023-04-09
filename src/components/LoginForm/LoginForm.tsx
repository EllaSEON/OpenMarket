import { useState } from "react";
import ToggleBtn from "../common/ToggleBtn/ToggleBtn";
import * as S from "./style";

function LoginForm() {
  const [toggleType, setToggleType] = useState("buyer");

  const [message, setMessage] = useState("");

  return (
    <section>
      <h2 className="hidden">로그인 페이지</h2>
      <ToggleBtn toggleType={toggleType} setToggleType={setToggleType} />
      <S.LoginForm>
        <S.LoginInput placeholder="아이디" />
        <S.LoginInput placeholder="비밀번호" />
        {message ? <S.ErrorText>{message}</S.ErrorText> : null}
        <S.LoginBtn type="submit" size="md">
          로그인
        </S.LoginBtn>
      </S.LoginForm>
    </section>
  );
}

export default LoginForm;
