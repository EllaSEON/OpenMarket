import { UseFormRegisterReturn } from "react-hook-form";
import { S } from "./style";

interface CheckTermProps {
  children: React.ReactNode;
  register: UseFormRegisterReturn;
}

function CheckTerm({ children, register }: CheckTermProps) {
  return (
    <>
      <S.CheckContainer>
        <S.InputWrapper>
          <S.InputCheck type="checkbox" id="check" required {...register} />
          <S.Label htmlFor="check">{children}</S.Label>
        </S.InputWrapper>
      </S.CheckContainer>
    </>
  );
}

export default CheckTerm;
