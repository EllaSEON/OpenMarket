import { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import regExp from "../../../utils/regExp";
import { JoinInput } from "../JoinInput/JoinInput";
import { InputWrapper, Label, Select, Input } from "../JoinInput/style";
import CheckTerm from "../../common/CheckTerm/CheckTerm";
import { S } from "./style";
import ToggleBtn from "../../common/ToggleBtn/ToggleBtn";
import RenderErrorMsg from "../../common/RenderErrorMsg/RenderErrorMsg";
import { RootState } from "../../../store/store";
import authAPI from "../../../API/authAPI";

function JoinForm() {
  const toggleUserType = useAppSelector(
    (state: RootState) => state.login.userType
  );

  const [isJoinValid, setIsJoinValid] = useState(false);
  const [isIdChecked, setIsIdChecked] = useState(false);
  const [isBusinessChecked, setIsBusinessChecked] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    setError,
    watch,
    trigger,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const validateUserNameMutation = useMutation(authAPI.createValidateUserName, {
    onSuccess: (message) => {
      setIsIdChecked(true);
      setError("id", {
        type: "success",
        message: message.Success,
      });
    },
    onError: (error: any) => {
      setIsIdChecked(false);
      setError("id", {
        type: "fail",
        message: error.response.data.FAIL_Message,
      });
    },
  });

  const validateCompanyNoMutation = useMutation(
    authAPI.createValidateCompanyNo,
    {
      onSuccess: (message) => {
        setIsBusinessChecked(true);
        setError("businessNo", {
          type: "success",
          message: message.Success,
        });
      },
      onError: (error: any) => {
        setError("businessNo", {
          type: "fail",
          message: error.response.data.FAIL_Message,
        });
      },
    }
  );

  const signupBuyerMutation = useMutation(authAPI.createSignupBuyer, {
    onSuccess: (message) => {
      navigate("/login");
    },
    onError: (error: any) => {},
  });
  const signupSellerMutation = useMutation(authAPI.createSignupSeller, {
    onSuccess: (message) => {
      navigate("/login");
    },
    onError: (error: any) => {},
  });

  // id 중복 확인 검증
  const handleCheckId = async (
    username: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    validateUserNameMutation.mutate({ username });

    // 아이디 유효성 검사
    const isValid = await trigger("id");
    if (!isValid) {
      return;
    }
  };

  // 사업자등록 번호 인증
  const handleCheckBusiness = async (
    company_registration_number: number,
    e: any
  ) => {
    e.preventDefault();
    validateCompanyNoMutation.mutate({ company_registration_number });
    // 사업자 번호 유효성 검사
    const isValid = await trigger("businessNo");
    if (!isValid) {
      return;
    }
  };

  // 모든 input 값 채워질 시 가입하기 버튼 활성화
  const watchedValues = watch();
  useEffect(() => {
    const requiredFields = [
      "id",
      "password",
      "passwordConfirm",
      "userName",
      "phoneNumber",
      "centerPhoneNum",
      "endPhoneNum",
      "startEmail",
      "endEmail",
      "checkbox",
    ];

    if (toggleUserType === "SELLER") {
      requiredFields.push("businessNo", "storeName");
    }

    const allFieldsFilled = requiredFields.every(
      (field) => watchedValues[field]
    );

    setIsJoinValid(allFieldsFilled);
  }, [watchedValues, toggleUserType]);

  // 회원가입 form 제출
  const onSubmit = async (data: Record<string, any>) => {
    // 아이디/ 사업자 번호 인증 안할 시 alert창
    if (!isIdChecked) {
      alert("아이디 인증을 완료해 주세요.");
      return;
    }
    if (toggleUserType === "SELLER" && !isBusinessChecked) {
      alert("사업자 등록 번호 인증을 완료해주세요");
      return;
    }
    const commonData = {
      username: data.id,
      password: data.password,
      password2: data.passwordConfirm,
      phone_number: `${data.phoneNumber}${data.centerPhoneNum}${data.endPhoneNum}`,
      name: data.userName,
    };

    try {
      if (toggleUserType === "BUYER") {
        const buyerData = { ...commonData };
        signupBuyerMutation.mutate(buyerData);
      } else if (toggleUserType === "SELLER") {
        const sellerData = {
          ...commonData,
          company_registration_number: data.businessNo,
          store_name: data.storeName,
        };
        signupSellerMutation.mutate(sellerData);
      }
    } catch (error: any) {
      console.log(error);
    }
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
    <section>
      <h2 className="hidden">회원가입 페이지</h2>
      <ToggleBtn />
      <S.JoinForm onSubmit={handleSubmit(onSubmit)}>
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
              if (isIdChecked) {
                setIsIdChecked(false);
              }
            },
          })}
        />
        {RenderErrorMsg(errors.id)}
        <JoinInput
          label="비밀번호"
          forid="password"
          type="password"
          width={480}
          {...register("password", {
            required: "필수 정보입니다.",
            pattern: {
              value: regExp.PW_REGEX,
              message: "8자 이상 영문,숫자,특수문자를 사용하세요",
            },
          })}
        />
        {RenderErrorMsg(errors.password)}
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
        {RenderErrorMsg(errors.passwordConfirm)}
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
          {RenderErrorMsg(errors.userName)}
        </div>
        <InputWrapper>
          <Label htmlFor="phoneNumber">휴대폰 번호</Label>
          <div style={{ display: "flex" }}>
            <Select
              id="phoneNumber"
              {...register("phoneNumber", { required: true })}
            >
              {options.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </Select>
            <label className="hidden" htmlFor="centerPhoneNum">
              휴대폰번호 마지막 자리
            </label>
            <Input
              type="text"
              maxLength={4}
              width="152"
              id="centerPhoneNum"
              {...register("centerPhoneNum", {
                required: "필수 정보입니다.",
                validate: {
                  number: (inputValue) =>
                    regExp.PHONE_NO_REGEX.test(inputValue) ||
                    "숫자만 입력해주세요.",
                },
              })}
            />
            <label className="hidden" htmlFor="endPhoneNum">
              휴대폰번호 마지막 자리
            </label>
            <Input
              type="text"
              width="152"
              id="endPhoneNum"
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
        {RenderErrorMsg(errors.centerPhoneNum) &&
          RenderErrorMsg(errors.endPhoneNum)}
        <InputWrapper>
          <Label htmlFor="email">이메일</Label>
          <S.EmailInputWrapper>
            <Input
              type="text"
              width="220"
              id="email"
              {...register("startEmail", {
                required: "필수 정보입니다.",
                pattern: {
                  value: regExp.START_EMAIL_REGEX,
                  message: "잘못된 이메일 형식입니다.",
                },
              })}
            />
            <span>@</span>
            <label className="hidden" htmlFor="endEmail">
              이메일주소
            </label>
            <Input
              type="text"
              width="220"
              id="endEmail"
              {...register("endEmail", {
                required: "필수 정보입니다.",
                pattern: {
                  value: regExp.END_EMAIL_REGEX,
                  message: "잘못된 이메일 형식입니다.",
                },
              })}
            />
          </S.EmailInputWrapper>
          {RenderErrorMsg(errors.startEmail) && RenderErrorMsg(errors.endEmail)}
        </InputWrapper>
        {toggleUserType === "SELLER" && (
          <>
            <JoinInput
              label="사업자 등록번호"
              forid="businessNo"
              type="text"
              width={346}
              isButton={true}
              onClick={(e) => handleCheckBusiness(getValues("businessNo"), e)}
              maxLength={10}
              {...register("businessNo", {
                required: "필수 정보입니다.",
                pattern: {
                  value: regExp.BUSINESS_REGEX,
                  message: "10자리의 숫자를 입력해야 합니다.",
                },
                onChange: () => {
                  if (isBusinessChecked) {
                    setIsBusinessChecked(false);
                  }
                },
              })}
            />
            {RenderErrorMsg(errors.businessNo)}
            <JoinInput
              label="스토어 이름"
              forid="storeName"
              type="text"
              width={480}
              {...register("storeName", {
                required: "필수 정보입니다.",
              })}
            />
            {RenderErrorMsg(errors.storeName)}
          </>
        )}
        <CheckTerm
          register={register("checkbox")}
          children="호두샵의 이용약관 및 개인정보처리방침에 대해 동의합니다"
        />
        <S.JoinBtn type="submit" size="md" disabled={!isJoinValid}>
          가입하기
        </S.JoinBtn>
      </S.JoinForm>
    </section>
  );
}

export default JoinForm;
