import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../../features/loginSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import ToggleBtn from "../common/ToggleBtn/ToggleBtn";
import * as S from "./style";

function LoginForm() {
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const [toggleType, setToggleType] = useState("BUYER");
  const loginError = useAppSelector((state: RootState) => state.login.error);
  console.log(loginError);

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  // 아이디 & 비밀번호 입력
  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  // 로그인 폼 제출
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginData = {
      username: inputs.username,
      password: inputs.password,
      login_type: toggleType,
    };
    await dispatch(fetchLogin(loginData));
    // navigate("/");
  };

  return (
    <section>
      <h2 className="hidden">로그인 페이지</h2>
      <ToggleBtn toggleType={toggleType} setToggleType={setToggleType} />
      <S.LoginForm onSubmit={handleSubmit}>
        <S.LoginInput
          placeholder="아이디"
          type="text"
          onChange={handleData}
          name="username"
          value={inputs.username}
          // required
        />
        <S.LoginInput
          placeholder="비밀번호"
          type="password"
          onChange={handleData}
          name="password"
          value={inputs.password}
          // required
        />
        {loginError ? <S.ErrorText>{loginError}</S.ErrorText> : null}
        <S.LoginBtn type="submit" size="md">
          로그인
        </S.LoginBtn>
      </S.LoginForm>
    </section>
  );
}

export default LoginForm;
