import { MouseEvent } from "react";
import * as S from "./style";

interface ToggleBtnProps {
  toggleType: string;
  setToggleType: React.Dispatch<React.SetStateAction<string>>;
}

function ToggleBtn({ toggleType, setToggleType }: ToggleBtnProps) {
  const handleToggle = (e: MouseEvent<HTMLButtonElement>) => {
    if ((e.target as HTMLButtonElement).name === "buyer") {
      setToggleType("buyer");
    } else {
      setToggleType("seller");
    }
  };

  const path = window.location.pathname;

  return (
    <>
      <S.ToggleWrapper>
        <S.ToggleText
          name="buyer"
          value={toggleType}
          active={toggleType === "buyer"}
          onClick={handleToggle}
        >
          {path === "/login" ? "구매회원 로그인" : "구매회원가입"}
        </S.ToggleText>
        <S.ToggleText
          name="seller"
          active={toggleType === "seller"}
          value={toggleType}
          onClick={handleToggle}
        >
          {path === "/login" ? "판매회원 로그인" : "판매회원가입"}
        </S.ToggleText>
      </S.ToggleWrapper>
    </>
  );
}

export default ToggleBtn;
