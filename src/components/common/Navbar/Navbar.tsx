import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/store";
import * as S from "./style";
import Logo from "../../../assets/images/Logo-hodu.svg";
import CartIcon from "../../../assets/images/icon-shopping-cart.svg";
import UserIcon from "../../../assets/images/icon-user-black.svg";

function Navbar() {
  const token = useAppSelector((state: RootState) => state.login.token);
  return (
    <S.HomeHeader>
      <S.Navbar>
        <S.HeaderSearchWrapper>
          <S.Logo src={Logo} alt="호두마켓 로고" />
          <S.SearchBarWrapper>
            <S.SearchInp type="text" placeholder="상품을 검색해보세요!" />
            <S.SearchBtn type="button" />
          </S.SearchBarWrapper>
        </S.HeaderSearchWrapper>
        <S.HeaderUserWrapper>
          <S.CartBtn type="button" aria-label="장바구니에 담기 버튼">
            <img src={CartIcon} alt="장바구니 아이콘버튼" />
            <S.CartText>장바구니</S.CartText>
          </S.CartBtn>
          <S.UserBtn>
            <img src={UserIcon} alt="유저 아이콘 버튼" />
            <S.UserText>로그인</S.UserText>
          </S.UserBtn>
        </S.HeaderUserWrapper>
      </S.Navbar>
    </S.HomeHeader>
  );
}

export default Navbar;
