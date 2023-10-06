import { MouseEvent } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { changeUserType } from "../../../features/loginSlice";
import * as S from "./style";

function ToggleBtn() {
  const dispatch = useAppDispatch();
  const toggleUserType = useAppSelector((state) => state.login.userType);

  const handleToggle = (e: MouseEvent<HTMLButtonElement>) => {
    if ((e.target as HTMLButtonElement).name === "BUYER") {
      dispatch(changeUserType("BUYER"));
    } else {
      dispatch(changeUserType("SELLER"));
    }
  };

  const path = window.location.pathname;

  return (
    <>
      <S.ToggleWrapper>
        <S.ToggleText
          name="BUYER"
          value={toggleUserType}
          active={toggleUserType === "BUYER"}
          onClick={handleToggle}
        >
          {path === "/login" ? "구매회원 로그인" : "구매회원가입"}
        </S.ToggleText>
        <S.ToggleText
          name="SELLER"
          active={toggleUserType === "SELLER"}
          value={toggleUserType}
          onClick={handleToggle}
        >
          {path === "/login" ? "판매회원 로그인" : "판매회원가입"}
        </S.ToggleText>
      </S.ToggleWrapper>
    </>
  );
}

export default ToggleBtn;
