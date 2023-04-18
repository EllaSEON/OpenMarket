import * as S from "./style";

function DropDown() {
  return (
    <S.DropDownWrapper>
      <li>
        <S.DropDownBtn>마이페이지</S.DropDownBtn>
      </li>
      <li>
        <S.DropDownBtn>로그아웃</S.DropDownBtn>
      </li>
    </S.DropDownWrapper>
  );
}

export default DropDown;
