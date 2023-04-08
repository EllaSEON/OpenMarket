import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import regExp from "../../../utils/regExp";
import { JoinInput } from "../JoinInput/JoinInput";
import { InputWrapper, Label, Select, Input } from "../JoinInput/style";
import CheckTerm from "../../common/CheckTerm/CheckTerm";
import { S } from "./style";
import ToggleBtn from "../../common/ToggleBtn/ToggleBtn";
import RenderErrorMsg from "../../common/RenderErrorMsg/RenderErrorMsg";
import {
  fetchIdValidate,
  fetchBusinessValidate,
  fetchBuyerJoin,
  BuyerPostData,
  fetchSellerJoin,
  SellerPostData,
} from "../../../features/joinSlice";

interface ErrorMessages {
  phone_number?: string[];
  store_name?: string[];
}

function JoinForm() {
  const [toggleType, setToggleType] = useState("buyer");
  const [isJoinValid, setIsJoinValid] = useState(false);
  const [idChecked, setIdChecked] = useState(false);
  const [businessChecked, setBusinessChecked] = useState(false);

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

  const dispatch = useAppDispatch();
  const errorMsg = useAppSelector((state) => state.join.error);

  // id 중복 확인 검증
  const handleCheckId = async (
    id: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    // 아이디 유효성 검사
    const isValid = await trigger("id");
    if (!isValid) {
      return;
    }

    // 아이디 중복 확인 검증 에러메세지 렌더링
    const resultAction = await dispatch(fetchIdValidate(id));
    console.log(resultAction.payload);
    if (fetchIdValidate.fulfilled.match(resultAction)) {
      setIdChecked(true);
    } else {
      // 에러 메시지를 resultAction에서 가져와서 setError 호출
      setError("id", {
        message:
          typeof resultAction.payload === "string"
            ? resultAction.payload
            : "이미 사용중인 아이디입니다.",
      });
    }
  };

  // 사업자등록 번호 인증
  const handleCheckBusiness = async (
    businessNo: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    // 사업자 번호 유효성 검사
    const isValid = await trigger("businessNo");
    if (!isValid) {
      return;
    }

    // 사업자 번호 인증
    const resultAction = await dispatch(fetchBusinessValidate(businessNo));
    console.log(resultAction.payload);
    if (fetchBusinessValidate.fulfilled.match(resultAction)) {
      setBusinessChecked(true);
    } else {
      setError("businessNo", {
        message:
          typeof resultAction.payload === "string"
            ? resultAction.payload
            : "이미 등록된 사업자번호입니다.",
      });
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

    if (toggleType === "seller") {
      requiredFields.push("businessNo", "storeName");
    }

    const allFieldsFilled = requiredFields.every(
      (field) => watchedValues[field]
    );

    setIsJoinValid(allFieldsFilled);
  }, [watchedValues, toggleType]);

  // 아이디/ 사업자 번호 인증 안할 시 alert창
  const onSubmit = async (data: Record<string, any>) => {
    if (!idChecked) {
      alert("아이디 인증을 완료해 주세요.");
      return;
    }
    if (toggleType === "seller" && !businessChecked) {
      alert("사업자 등록 번호 인증을 완료해주세요");
      return;
    }
    // 구매자
    if (toggleType === "buyer") {
      const buyerData: BuyerPostData = {
        username: data.id,
        password: data.password,
        password2: data.passwordConfirm,
        phone_number: `${data.phoneNumber}${data.centerPhoneNum}${data.endPhoneNum}`,
        name: data.userName,
      };
      await dispatch(fetchBuyerJoin(buyerData));
      setError("centerPhoneNum", {
        message: "해당 사용자 전화번호는 이미 존재합니다.",
      });
    } else if (toggleType === "seller") {
      const sellerData: SellerPostData = {
        username: data.id,
        password: data.password,
        password2: data.passwordConfirm,
        phone_number: `${data.phoneNumber}${data.centerPhoneNum}${data.endPhoneNum}`,
        name: data.userName,
        company_registration_number: data.businessNo,
        store_name: data.storeName,
      };
      const resultAction = await dispatch(fetchSellerJoin(sellerData));
      // 결과에서 에러 메시지를 가져오고 setError를 호출하여 에러 메시지를 렌더링합니다.
      if (fetchSellerJoin.rejected.match(resultAction)) {
        const errorMessages = resultAction.payload as ErrorMessages;
        console.log("Result action:", resultAction);
        console.log("Error messages:", errorMessages);

        if (errorMessages && errorMessages.phone_number) {
          setError("centerPhoneNum", {
            message: errorMessages.phone_number[0],
          });
        }

        if (errorMessages && errorMessages.store_name) {
          setError("storeName", {
            message: errorMessages.store_name[0],
          });
        }
      }
      navigate("/login");
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
          {idChecked ? (
            <S.SuccessTxt>멋진 아이디네요</S.SuccessTxt>
          ) : (
            RenderErrorMsg(errors.id)
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
          {RenderErrorMsg(errors.centerPhoneNum) ||
            RenderErrorMsg(errors.endPhoneNum)}
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
            {RenderErrorMsg(errors.startEmail) ||
              RenderErrorMsg(errors.endEmail)}
          </InputWrapper>
          {toggleType === "seller" && (
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
                    if (businessChecked) {
                      setBusinessChecked(false);
                    }
                  },
                })}
              />
              {businessChecked ? (
                <S.SuccessTxt>사용 가능한 사업자등록번호입니다. </S.SuccessTxt>
              ) : (
                RenderErrorMsg(errors.businessNo)
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
              {RenderErrorMsg(errors.storeName)}
            </>
          )}
        </S.JoinSection>
        <CheckTerm
          register={register("checkbox")}
          children="호두샵의 이용약관 및 개인정보처리방침에 대해 동의합니다"
        />
        <S.JoinBtn type="submit" size="md" disabled={!isJoinValid}>
          가입하기
        </S.JoinBtn>
      </form>
    </>
  );
}

export { JoinForm };
