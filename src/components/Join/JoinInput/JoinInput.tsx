import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import * as S from "./style";
import Button from "../../common/Button/Button";

interface JoinInputProps {
  label?: string;
  forid: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  width: 346 | 480 | 152 | 220;
  isButton?: boolean;
  register?: UseFormRegisterReturn;
}

const JoinInput = React.forwardRef<HTMLInputElement, JoinInputProps>(
  (props, ref) => {
    const { label, forid, type, onChange, value, width, isButton, ...rest } =
      props;
    return (
      <>
        <S.Container>
          <S.InputWrapper>
            <S.Label htmlFor={forid}>{label}</S.Label>
            <S.Input
              {...rest}
              type={type}
              id={forid}
              onChange={onChange}
              value={value}
              width={width}
              ref={ref}
              // required
            />
          </S.InputWrapper>
          {isButton && (
            <Button type="submit" size="ms">
              {forid === "id" ? "중복확인" : "인증"}
            </Button>
          )}
        </S.Container>
      </>
    );
  }
);

// 휴대폰 번호 입력 폼

// const InputPhone = React.forwardRef<HTMLSelectElement>((props, ref) => {
//   return (
//     <>
//       <S.InputWrapper>
//         <S.Label htmlFor="phone">휴대폰 번호</S.Label>
//         <div style={{ display: "flex" }}>
//           <S.Select ref={ref} {...props}>
//             <option value="010">010</option>
//             <option value="011">011</option>
//             <option value="016">016</option>
//             <option value="017">017</option>
//             <option value="018">018</option>
//             <option value="019">019</option>
//           </S.Select>
//           <S.Input
//             type="number"
//             id="phone2"
//             width="152"
//             // required
//           />
//           <S.Input
//             type="number"
//             id="phone3"
//             width="152"
//             // required
//           />
//         </div>
//       </S.InputWrapper>
//     </>
//   );
// });

function InputEmail() {
  // const [emailInputs, setEmailInputs] = useState({
  //   email1: "",
  //   email2: "",
  // });

  // const { email1, email2 } = emailInputs;

  // const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { id, value } = e.target;
  //   if (id === "email1") {
  //     setEmailInputs({ ...emailInputs, email1: value });
  //   }
  // };

  return (
    <>
      <S.InputWrapper>
        <S.Label htmlFor="email">이메일</S.Label>
        <S.EmailInputWrapper>
          <S.Input width="220" />
          <span>@</span>
          <S.Input width="220" />
        </S.EmailInputWrapper>
      </S.InputWrapper>
    </>
  );
}

export { JoinInput, InputEmail };
