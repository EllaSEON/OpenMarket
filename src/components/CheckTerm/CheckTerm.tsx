import Button from "../common/Button/Button";
import { S } from "./style";

interface CheckTermProps {
  children: React.ReactNode;
}

function CheckTerm({ children }: CheckTermProps) {
  return (
    <>
      <S.Form>
        <S.InputWrapper>
          <S.InputCheck type="checkbox" id="check" />
          <S.Label htmlFor="check">{children}</S.Label>
        </S.InputWrapper>
        <Button size="md" disabled>
          가입하기
        </Button>
      </S.Form>
    </>
  );
}

export default CheckTerm;
