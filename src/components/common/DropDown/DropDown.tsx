import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAppDispatch } from "../../../store/hooks";
import * as S from "./style";
import { BASE_URL } from "../../../constant/config";
import { removeCookie } from "../../../utils/Cookies";
import { updateToken } from "../../../features/loginSlice";

function DropDown() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const fetchLogout = async () => {
    await axios.post(`${BASE_URL}/accounts/logout/`);
    removeCookie("token");
    dispatch(updateToken(null));
  };
  const logoutMutation = useMutation(fetchLogout, {
    onSuccess: () => {
      navigate("/");
    },
  });

  const handleLogout = async () => {
    await logoutMutation.mutate();
  };

  return (
    <S.DropDownWrapper>
      <S.DropDownList
        onClick={() => {
          navigate("/mypage");
        }}
      >
        마이페이지
      </S.DropDownList>
      <S.DropDownList onClick={handleLogout}>로그아웃</S.DropDownList>
    </S.DropDownWrapper>
  );
}

export default DropDown;
