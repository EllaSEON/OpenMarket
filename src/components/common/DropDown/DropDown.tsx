import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useAppDispatch } from "../../../store/hooks";
import * as S from "./style";
import { removeCookie } from "../../../utils/Cookies";
import { updateToken } from "../../../features/loginSlice";
import authAPI from "../../../API/authAPI";

function DropDown() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutMutation = useMutation(authAPI.createLogout, {
    onSuccess: () => {
      removeCookie("token");
      dispatch(updateToken(null));
      // navigate("/");
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <S.DropDownWrapper>
      <S.DropDownList
        onClick={() => {
          // navigate("/mypage");
          alert("준비중인 기능입니다.");
        }}
      >
        마이페이지
      </S.DropDownList>
      <S.DropDownList onClick={handleLogout}>로그아웃</S.DropDownList>
    </S.DropDownWrapper>
  );
}

export default DropDown;
