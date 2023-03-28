import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import regExp from "../../../utils/regExp";
import { JoinInput } from "../JoinInput/JoinInput";
import { InputWrapper, Label, Select, Input } from "../JoinInput/style";
import CheckTerm from "../../CheckTerm/CheckTerm";
import { S } from "./style";
import ToggleBtn from "../../common/ToggleBtn/ToggleBtn";
// import { RootState } from "../../../features/joinSlice";

function JoinForm() {
  // const joinInputs = useSelector((state: RootState) => state);
  // console.log(joinInputs.joinSlice);

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  console.log(watch());

  const [isValidBtn, setIsValidBtn] = useState(true);

  const onSubmit = (data: any) => console.log(data);

  // 휴대폰 앞자리 옵션
  const options = [
    { value: "010", label: "010" },
    { value: "011", label: "011" },
    { value: "016", label: "016" },
    { value: "017", label: "017" },
    { value: "018", label: "018" },
    { value: "019", label: "019" },
  ];

  return (
    <>
      <ToggleBtn />
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.JoinSection>
          <JoinInput
            label="아이디"
            forid="id"
            type="text"
            width={346}
            isButton={true}
            {...register("id", {
              required: "필수 정보입니다.",
              pattern: {
                value: regExp.ID_REGEX,
                message:
                  "20자 이내의 영문,소문자, 대문자, 숫자만 사용 가능합니다.",
              },
            })}
          />
          {errors.id && (
            <S.ErrorText>{errors.id?.message?.toString()}</S.ErrorText>
          )}
          <JoinInput
            label="비밀번호"
            forid="password"
            type="password"
            width={480}
            {...register("password", {
              required: "필수 정보입니다.",
              pattern: {
                value: regExp.PW_REGEX,
                message: "8자 이상, 영문 대 소문자,숫자,특수문자를 사용하세요",
              },
            })}
          />
          {errors.password && (
            <S.ErrorText>{errors.password?.message?.toString()}</S.ErrorText>
          )}
          <JoinInput
            label="비밀번호 재확인"
            forid="passwordConfirm"
            type="password"
            width={480}
            {...register("passwordConfirm", {
              required: "필수 정보입니다.",
              validate: {
                same: (passwordConfirm) =>
                  passwordConfirm === getValues("password") ||
                  "비밀번호가 일치하지 않습니다.",
              },
            })}
          />
          {errors.passwordConfirm && (
            <S.ErrorText>
              {errors.passwordConfirm?.message?.toString()}
            </S.ErrorText>
          )}
          <div style={{ margin: "5rem 0 0 0" }}>
            <JoinInput
              label="이름"
              forid="userName"
              type="text"
              width={480}
              {...register("userName", {
                required: "필수 정보입니다.",
              })}
            />
            {errors.userName && (
              <S.ErrorText>{errors.userName?.message?.toString()}</S.ErrorText>
            )}
          </div>
          <InputWrapper>
            <Label htmlFor="phoneNumber">휴대폰 번호</Label>
            <div style={{ display: "flex" }}>
              <Select {...register("phoneNumber", { required: true })}>
                {options.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </Select>
              <Input
                type="text"
                maxLength={4}
                width="152"
                {...register("centerPhoneNum", {
                  required: "필수 정보입니다.",
                  validate: {
                    number: (inputValue) =>
                      regExp.PHONE_NO_REGEX.test(inputValue) ||
                      "숫자만 입력해주세요.",
                  },
                })}
              />
              <Input
                type="text"
                width="152"
                maxLength={4}
                {...register("endPhoneNum", {
                  required: "필수 정보입니다.",
                  validate: {
                    number: (inputValue) =>
                      regExp.PHONE_NO_REGEX.test(inputValue) ||
                      "숫자만 입력해주세요.",
                  },
                })}
              />
            </div>
          </InputWrapper>
          {(errors.centerPhoneNum && (
            <S.ErrorText>
              {errors.centerPhoneNum?.message?.toString()}
            </S.ErrorText>
          )) ||
            (errors.endPhoneNum && (
              <S.ErrorText>
                {errors.endPhoneNum?.message?.toString()}
              </S.ErrorText>
            ))}
          <InputWrapper>
            <Label htmlFor="email">이메일</Label>
            <S.EmailInputWrapper>
              <Input
                type="text"
                width="220"
                {...register("startEmail", {
                  required: "필수 정보입니다.",
                  pattern: {
                    value: regExp.START_EMAIL_REGEX,
                    message: "잘못된 이메일 형식입니다.",
                  },
                })}
              />
              <span>@</span>
              <Input
                type="text"
                width="220"
                {...register("endEmail", {
                  required: "필수 정보입니다.",
                  pattern: {
                    value: regExp.END_EMAIL_REGEX,
                    message: "잘못된 이메일 형식입니다.",
                  },
                })}
              />
            </S.EmailInputWrapper>
            {(errors.startEmail && (
              <S.ErrorText>
                {errors.startEmail?.message?.toString()}
              </S.ErrorText>
            )) ||
              (errors.endEmail && (
                <S.ErrorText>
                  {errors.endEmail?.message?.toString()}
                </S.ErrorText>
              ))}
          </InputWrapper>
          <JoinInput
            label="사업자 등록번호"
            forid="businessNo"
            type="text"
            width={346}
            isButton={true}
            {...register("businessNo", {
              required: "필수 정보입니다.",
              pattern: {
                value: regExp.BUSINESS_REGEX,
                message: "10자 이상의 숫자를 입력해야 합니다.",
              },
            })}
          />
          {errors.businessNo && (
            <S.ErrorText>{errors.businessNo?.message?.toString()}</S.ErrorText>
          )}
          <JoinInput
            label="스토어 이름"
            forid="storeName"
            type="text"
            width={480}
            {...register("storeName", {
              required: "필수 정보입니다.",
            })}
          />
          {errors.storeName && (
            <S.ErrorText>{errors.storeName?.message?.toString()}</S.ErrorText>
          )}
        </S.JoinSection>
        <CheckTerm
          register={register("checkbox")}
          children="호두샵의 이용약관 및 개인정보처리방침에 대해 동의합니다"
        />
        <S.JoinBtn type="submit" size="md" disabled={!isValidBtn}>
          가입하기
        </S.JoinBtn>
      </form>
    </>
  );
}

export { JoinForm };
