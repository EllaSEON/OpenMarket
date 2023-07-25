import { useState, useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import ToggleBtn from "../../common/ToggleBtn/ToggleBtn";
import * as S from "./style";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setCookie } from "../../../utils/Cookies";
import { updateToken } from "../../../features/loginSlice";
import { RootState } from "../../../store/store";
import authAPI from "../../../API/authAPI";

function LoginForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const toggleUserType = useAppSelector(
    (state: RootState) => state.login.userType || ""
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const { username, password } = loginForm;
  const idInput = useRef<HTMLInputElement>(null);

  // 아이디 & 비밀번호 입력
  const handleChangeLoginForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  // 로그인 유효성 검사
  useEffect(() => {
    if (username === "" || password === "") {
      setErrorMsg("공백을 입력해주세요");
    }
  }, [loginForm, errorMsg]);

  const loginMutation = useMutation(authAPI.createLogin, {
    onSuccess: (token) => {
      setCookie("token", token);
      dispatch(updateToken(token));
      navigate("/");
    },
    onError: (error: any) => {
      setErrorMsg(error.response.data.FAIL_Message);
      if (idInput.current !== null) {
        idInput.current.focus();
      }
    },
  });

  // 로그인 폼 제출
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");
    const loginData = {
      username: username,
      password: password,
      login_type: toggleUserType,
    };
    loginMutation.mutate(loginData);
  };

  return (
    <section>
      <h2 className="hidden">로그인 페이지</h2>
      <ToggleBtn />
      <S.LoginForm onSubmit={handleSubmit}>
        <S.LoginInput
          placeholder="아이디"
          type="text"
          onChange={handleChangeLoginForm}
          name="username"
          value={username}
          ref={idInput}
          required
        />
        <S.LoginInput
          placeholder="비밀번호"
          type="password"
          onChange={handleChangeLoginForm}
          name="password"
          value={password}
          required
        />
        {loginMutation.isError ? <S.ErrorText>{errorMsg}</S.ErrorText> : null}
        <S.LoginBtn type="submit" size="md">
          로그인
        </S.LoginBtn>
      </S.LoginForm>
    </section>
  );
}

export default LoginForm;