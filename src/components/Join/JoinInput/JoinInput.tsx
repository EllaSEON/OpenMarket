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

export { JoinInput };
