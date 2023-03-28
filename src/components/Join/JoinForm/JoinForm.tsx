import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import regExp from "../../../utils/regExp";
import { JoinInput, InputPhone, InputEmail } from "../JoinInput/JoinInput";
import CheckTerm from "../../CheckTerm/CheckTerm";
import { S } from "./style";
// import { RootState } from "../../../features/joinSlice";

function JoinForm() {
  // const joinInputs = useSelector((state: RootState) => state);
  // console.log(joinInputs.joinSlice);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
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
        <InputPhone />
        <InputEmail />
      </S.JoinSection>
      <CheckTerm children="호두샵의 이용약관 및 개인정보처리방침에 대해 동의합니다" />
      <S.JoinBtn type="submit" size="md" disabled={isSubmitting}>
        가입하기
      </S.JoinBtn>
    </form>
  );
}

export { JoinForm };
