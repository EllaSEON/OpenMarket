import * as S from "./style";

function ToggleBtn() {
  const handleToggle = () => {};
  return (
    <>
      <S.ToggleWrapper>
        <S.ToggleText onClick={handleToggle}>구매회원가입</S.ToggleText>
        <S.ToggleText onClick={handleToggle}>판매회원가입</S.ToggleText>
      </S.ToggleWrapper>
    </>
  );
}

export default ToggleBtn;
