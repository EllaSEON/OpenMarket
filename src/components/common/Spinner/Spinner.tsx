import * as S from "./style";
import spinnerImg from "../../../assets/images/spinner.gif";

function Spinner() {
  return (
    <S.Background>
      <img src={spinnerImg} alt="로딩중" width="5%" />
    </S.Background>
  );
}

export default Spinner;
