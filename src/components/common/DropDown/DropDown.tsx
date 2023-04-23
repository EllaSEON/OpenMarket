import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { fetchLogout } from "../../../features/loginSlice";
import * as S from "./style";

function DropDown() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(fetchLogout());
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
