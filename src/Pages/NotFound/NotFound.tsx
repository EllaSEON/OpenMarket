import { useNavigate } from "react-router-dom";
import Icon404 from "../../assets/images/icon-404.svg";

import * as S from "./style";
function NotFound() {
  const navigate = useNavigate();
  return (
    <S.Section>
      <img src={Icon404} alt="404이미지" />
      <div>
        <S.H2>페이지를 찾을 수 없습니다.</S.H2>
        <S.Txt>
          페이지가 존재하지 않거나 사용할 수 없는 페이지입니다.
          <br />웹 주소가 올바른지 확인해 주세요.
        </S.Txt>
        <S.BtnDiv>
          <S.Btn type="button" size="ms" onClick={() => navigate("/")}>
            메인으로
          </S.Btn>
          <S.Btn
            type="button"
            size="ms"
            color="white"
            onClick={() => navigate(-1)}
          >
            이전 페이지
          </S.Btn>
        </S.BtnDiv>
      </div>
    </S.Section>
  );
}

export default NotFound;
