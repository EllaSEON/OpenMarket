import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import regExp from "../../../utils/regExp";
import { JoinInput } from "../JoinInput/JoinInput";
import { InputWrapper, Label, Select, Input } from "../JoinInput/style";
import CheckTerm from "../../common/CheckTerm/CheckTerm";
import { S } from "./style";
import ToggleBtn from "../../common/ToggleBtn/ToggleBtn";
import renderErrorMessage from "../../common/ErrorMsg/ErrorMsg";
import {
  fetchIdValidate,
  fetchBusinessValidate,
} from "../../../features/joinSlice";

function JoinForm() {
  const [toggleType, setToggleType] = useState("buyer");
  const [isJoinValid, setIsJoinValid] = useState(false);
  const [idChecked, setIdChecked] = useState(false);
  const [businessChecked, setBusinessChecked] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const dispatch = useAppDispatch();
  const errorMsg = useAppSelector((state) => state.join.error);
  const idStatus = useAppSelector((state) => state.join.idStatus);
  const businessStatus = useAppSelector((state) => state.join.businessStatus);

  // id 중복 확인 검증
  const handleCheckId = async (
    id: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const resultAction = await dispatch(fetchIdValidate(id));
    if (fetchIdValidate.fulfilled.match(resultAction)) {
      setIdChecked(true);
      setError("id", {
        message: "멋진 아이디네요 :)",
      });
    }
  };

  // 사업자등록 번호 인증
  const handleCheckBusiness = async (
    businessNo: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const resultAction = await dispatch(fetchBusinessValidate(businessNo));
    if (fetchBusinessValidate.fulfilled.match(resultAction)) {
      setBusinessChecked(true);
      setError("businessNo", {
        message: "사용 가능한 사업자등록번호입니다.",
      });
    }
  };

  // id 중복 확인 & 사업자 등록 번호 검증 에러메세지
  useEffect(() => {
    if (errorMsg === "username 필드를 추가해주세요 :)") {
      setError("id", {
        message: "id를 추가해주세요 :)",
      });
    } else if (errorMsg === "이미 사용 중인 아이디입니다.") {
      setError("id", {
        message: "이미 사용 중인 아이디입니다.",
      });
    } else if (
      errorMsg === "company_registration_number 필드를 추가해주세요 :)"
    ) {
      setError("businessNo", {
        message: "사업자번호를 추가해주세요 :)",
      });
    } else if (errorMsg === "이미 등록된 사업자등록번호입니다.") {
      setError("businessNo", {
        message: "이미 등록된 사업자등록번호입니다.",
      });
    }
  }, [errorMsg, setError]);

  const onSubmit = (data: Record<string, any>) => {
    if (!idChecked) {
      alert("아이디 인증을 완료해 주세요.");
      return;
    }
    if (toggleType === "seller" && !businessChecked) {
      alert("사업자 등록 번호 인증을 완료해주세요");
      return;
    }
    console.log(data);
  };

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
      <ToggleBtn toggleType={toggleType} setToggleType={setToggleType} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.JoinSection>
          <JoinInput
            label="아이디"
            forid="id"
            type="text"
            width={346}
            isButton={true}
            onClick={(e) => handleCheckId(getValues("id"), e)}
            {...register("id", {
              required: "필수 정보입니다.",
              pattern: {
                value: regExp.ID_REGEX,
                message:
                  "20자 이내의 영문,소문자, 대문자, 숫자만 사용 가능합니다.",
              },
              onChange: () => {
                if (idChecked) {
                  setIdChecked(false);
                }
              },
            })}
          />
          {renderErrorMessage(errors.id)}
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
          {renderErrorMessage(errors.password)}
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
          {renderErrorMessage(errors.passwordConfirm)}
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
            {renderErrorMessage(errors.userName)}
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
          {renderErrorMessage(errors.centerPhoneNum) ||
            renderErrorMessage(errors.endPhoneNum)}
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
            {renderErrorMessage(errors.startEmail) ||
              renderErrorMessage(errors.endEmail)}
          </InputWrapper>
          {toggleType === "seller" ? (
            <JoinInput
              label="사업자 등록번호"
              forid="businessNo"
              type="text"
              width={346}
              isButton={true}
              onClick={(e) => handleCheckBusiness(getValues("businessNo"), e)}
              {...register("businessNo", {
                required: "필수 정보입니다.",
                pattern: {
                  value: regExp.BUSINESS_REGEX,
                  message: "10자 이상의 숫자를 입력해야 합니다.",
                },
                onChange: () => {
                  if (businessChecked) {
                    setBusinessChecked(false);
                  }
                },
              })}
            />
          ) : null}
          {toggleType === "seller" && renderErrorMessage(errors.businessNo)}
          {toggleType === "seller" ? (
            <JoinInput
              label="스토어 이름"
              forid="storeName"
              type="text"
              width={480}
              {...register("storeName", {
                required: "필수 정보입니다.",
              })}
            />
          ) : null}
          {toggleType === "seller" && renderErrorMessage(errors.storeName)}
        </S.JoinSection>
        <CheckTerm
          register={register("checkbox")}
          children="호두샵의 이용약관 및 개인정보처리방침에 대해 동의합니다"
        />
        <S.JoinBtn type="submit" size="md" disabled={isJoinValid}>
          가입하기
        </S.JoinBtn>
      </form>
    </>
  );
}

export { JoinForm };
