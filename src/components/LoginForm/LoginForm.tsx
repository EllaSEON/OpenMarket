import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { fetchLogin } from "../../features/loginSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import ToggleBtn from "../common/ToggleBtn/ToggleBtn";
import * as S from "./style";

function LoginForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [toggleType, setToggleType] = useState("BUYER");
  const [message, setMessage] = useState("");
  const loginError = useAppSelector((state: RootState) => state.login.error);
  console.log(loginError);
  const status = useAppSelector((state: RootState) => state.login.status);

  const idInput = useRef<HTMLInputElement>(null);

  const initialValues = {
    username: "",
    password: "",
  };

  const [inputs, setInputs] = useState(initialValues);

  // 아이디 & 비밀번호 입력
  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  // 로그인 폼 제출
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    const loginData = {
      username: inputs.username,
      password: inputs.password,
      login_type: toggleType,
    };
    await dispatch(fetchLogin(loginData));
  };

  useEffect(() => {
    if (status === "failed") {
      if (loginError === "Rejected") {
        setMessage("아이디 또는 비밀번호를 입력해주세요");
      } else {
        setMessage(loginError); // 로그인 정보 틀릴 시 에러메세지
      }
      setInputs(initialValues);
      if (idInput.current) {
        idInput.current.focus();
      }
    }
    if (status === "succeeded") {
      navigate("/");
    }
  }, [status, loginError]);

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
          ref={idInput}
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
        {loginError ? <S.ErrorText>{message}</S.ErrorText> : null}
        <S.LoginBtn type="submit" size="md">
          로그인
        </S.LoginBtn>
      </S.LoginForm>
    </section>
  );
}

export default LoginForm;
