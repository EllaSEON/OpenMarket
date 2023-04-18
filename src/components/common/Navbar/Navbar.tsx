import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/store";
import * as S from "./style";
import Logo from "../../../assets/images/Logo-hodu.svg";
import CartIcon from "../../../assets/images/icon-shopping-cart.svg";
import UserIcon from "../../../assets/images/icon-user-black.svg";
import Modal from "../Modal/Modal";

function Navbar() {
  const token = useAppSelector((state: RootState) => state.login.token);
  const userType = useAppSelector((state: RootState) => state.login.userType);

  const navigate = useNavigate();

  return (
    <S.HomeHeader>
      <S.Navbar>
        <S.HeaderSearchWrapper>
          <S.Logo src={Logo} alt="호두마켓 로고" />
          <S.SearchBarWrapper>
            <S.SearchInp type="text" placeholder="상품을 검색해보세요!" />
            <S.SearchBtn type="button" aria-label="검색하기 버튼" />
          </S.SearchBarWrapper>
        </S.HeaderSearchWrapper>
        {userType === "BUYER" ? (
          <S.HeaderUserWrapper>
            <Link to="/cart">
              <S.CartBtn type="button" aria-label="장바구니에 담기 버튼">
                <img src={CartIcon} alt="장바구니 아이콘버튼" />
                <S.CartText>장바구니</S.CartText>
              </S.CartBtn>
            </Link>

            <S.UserBtn>
              <img src={UserIcon} alt="유저 아이콘 버튼" />
              <S.UserText>{token ? "마이페이지" : "로그인"}</S.UserText>
            </S.UserBtn>
          </S.HeaderUserWrapper>
        ) : (
          <S.HeaderUserWrapper>
            <S.UserBtn>
              <img src={UserIcon} alt="유저 아이콘 버튼" />
              <S.UserText>마이페이지</S.UserText>
            </S.UserBtn>
            <S.ShoppingBagBtn type="button" size="ms">
              판매자센터
            </S.ShoppingBagBtn>
          </S.HeaderUserWrapper>
        )}
      </S.Navbar>
      <Modal>
        로그인이 필요한 서비스입니다.
        <br />
        로그인 하시겠습니까?
      </Modal>
    </S.HomeHeader>
  );
}

export default Navbar;
