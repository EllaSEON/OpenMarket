import { S } from "./style";

interface CheckTermProps {
  children: React.ReactNode;
}

function CheckTerm({ children }: CheckTermProps) {
  return (
    <>
      <S.CheckContainer>
        <S.InputWrapper>
          <S.InputCheck type="checkbox" id="check" />
          <S.Label htmlFor="check">{children}</S.Label>
        </S.InputWrapper>
      </S.CheckContainer>
    </>
  );
}

export default CheckTerm;
