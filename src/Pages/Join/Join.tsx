import { useState } from "react";
import JoinInput from "../../components/JoinInput/JoinInput";
import { Margin } from "./style";

function Join() {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
    username: "",
  });
  const { id, password, username } = inputs;

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        name="password"
        label="비밀번호 재확인"
        forid="password"
        type="password"
        onChange={handleData}
        value={password}
        width={480}
      />
      <Margin>
        <JoinInput
          name="username"
          label="이름"
          forid="password"
          type="text"
          onChange={handleData}
          value={username}
          width={480}
        />
      </Margin>
    </>
  );
}
export default Join;
