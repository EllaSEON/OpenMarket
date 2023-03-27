import { useState } from "react";
import { JoinInput, InputPhone, InputEmail } from "../JoinInput/JoinInput";

function JoinForm() {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
    passwordConfirm: "",
    userName: "",
  });
  const { id, password, passwordConfirm, userName } = inputs;

  const handleData = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value }); // name 키를 가진 값을 value 로 설정
  };
  return (
    <>
      <JoinInput
        name="id"
        label="아이디"
        forid="id"
        type="text"
        onChange={handleData}
        value={id}
        width={346}
        isButton={true}
      />
      <JoinInput
        name="password"
        label="비밀번호"
        forid="password"
        type="password"
        onChange={handleData}
        value={password}
        width={480}
      />
      <JoinInput
        name="passwordConfirm"
        label="비밀번호 재확인"
        forid="passwordConfirm"
        type="password"
        onChange={handleData}
        value={passwordConfirm}
        width={480}
      />
      <div style={{ margin: "5rem 0 0 0" }}>
        <JoinInput
          name="userName"
          label="이름"
          forid="userName"
          type="text"
          onChange={handleData}
          value={userName}
          width={480}
        />
      </div>
      <InputPhone />
      <InputEmail />
    </>
  );
}

export { JoinForm };
