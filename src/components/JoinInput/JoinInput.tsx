import { S } from "./style";
import Button from "../Button/Button";

interface JoinInputTypes {
  name: string;
  label: string;
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

export default JoinInput;
