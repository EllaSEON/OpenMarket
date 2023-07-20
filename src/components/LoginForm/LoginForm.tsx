import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import ToggleBtn from "../common/ToggleBtn/ToggleBtn";
import * as S from "./style";
import { BASE_URL } from "../../constant/config";
import { useAppDispatch } from "../../store/hooks";
import { setCookie } from "../../utils/Cookies";
import { setToken } from "../../features/loginSlice";

interface LoginData {
  username: string;
  password: string;
  login_type: string;
}

function LoginForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [toggleUserType, setToggleUserType] = useState("BUYER");
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

  const fetchLogin = async (data: LoginData) => {
    const response = await axios.post(`${BASE_URL}/accounts/login/`, data);
    if (response.data) {
      setCookie("token", response.data.token);
      dispatch(setToken(response.data.token));
    }
  };

  const loginMutation = useMutation(fetchLogin, {
    onSuccess: () => {
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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");
    const loginData = {
      username: username,
      password: password,
      login_type: toggleUserType,
    };
    await loginMutation.mutateAsync(loginData);
  };

  return (
    <section>
      <h2 className="hidden">로그인 페이지</h2>
      <ToggleBtn
        toggleType={toggleUserType}
        setToggleType={setToggleUserType}
      />
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
