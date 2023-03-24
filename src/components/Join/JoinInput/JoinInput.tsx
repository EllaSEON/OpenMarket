import { useState, useEffect } from "react";
import { S } from "./style";
import Button from "../../Button/Button";
import SelectPhoneBox from "../../SelectPhoneBox/SelectPhoneBox";

interface JoinInputTypes {
  name: string;
  label?: string;
  forid: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  width: 346 | 480 | 152 | 220;
  isButton?: boolean;
}

function JoinInput(props: JoinInputTypes) {
  const {
    name,
    label,
    forid,
    type,
    onChange,
    value,
    width,
    isButton,
    ...rest
  } = props;
  return (
    <>
      <S.JoinForm>
        <S.InputWrapper>
          <S.Label htmlFor={forid}>{label}</S.Label>
          <S.Input
            {...rest}
            name={name}
            type={type}
            id={forid}
            onChange={onChange}
            value={value}
            width={width}
            required
          />
        </S.InputWrapper>
        {isButton && (
          <Button size="ms">{forid === "id" ? "중복확인" : "인증"}</Button>
        )}
      </S.JoinForm>
    </>
  );
}

// 휴대폰 번호 입력 폼
function InputPhone() {
  const OPTIONS = [
    { value: "010", name: "010" },
    { value: "011", name: "011" },
    { value: "016", name: "016" },
    { value: "017", name: "017" },
    { value: "018", name: "018" },
    { value: "019", name: "019" },
  ];

  const [phoneInputs, setPhoneInputs] = useState({
    phone1: OPTIONS[0].value,
    phone2: "",
    phone3: "",
  });

  const { phone1, phone2, phone3 } = phoneInputs;

  const handleData = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = e.target;
    if (id === "phone1") {
      setPhoneInputs({ ...phoneInputs, phone1: value });
    } else if (id === "phone2") {
      setPhoneInputs({ ...phoneInputs, phone2: value });
    } else if (id === "phone3") {
      setPhoneInputs({ ...phoneInputs, phone3: value });
    }
  };

  // useEffect(() => {
  //   console.log(phoneInputs.phone1);
  // }, [phoneInputs]);

  return (
    <>
      <S.InputWrapper>
        <S.Label htmlFor="phone">휴대폰 번호</S.Label>
        <div style={{ display: "flex" }}>
          <SelectPhoneBox
            id="phone1"
            options={OPTIONS}
            defaultValue="010"
            onChange={handleData}
          />
          <S.InputPhoneNum
            type="number"
            value={phone2}
            onChange={handleData}
            id="phone2"
            width="152"
            required
          />
          <S.InputPhoneNum
            type="number"
            id="phone3"
            value={phone3}
            onChange={handleData}
            width="152"
            required
          />
        </div>
      </S.InputWrapper>
    </>
  );
}

export { JoinInput, InputPhone };
