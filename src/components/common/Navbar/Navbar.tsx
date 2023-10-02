import { useState, startTransition, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { openModal } from "../../../features/modalSlice";
import { RootState } from "../../../store/store";
import Modal from "../Modal/Modal";
import DropDown from "../DropDown/DropDown";
import Logo from "../../../assets/images/Logo-hodu.svg";
import CartIcon from "../../../assets/images/icon-shopping-cart.svg";
import UserIcon from "../../../assets/images/icon-user-black.svg";
import * as S from "./style";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useAppSelector((state: RootState) => state.login.token);
  const userType = useAppSelector((state: RootState) => state.login.userType);
  const modal = useAppSelector((state: RootState) => state.modal.isOpen);

  // const [keyword, setKeyword] = useState("");

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const [dropDown, setDropDown] = useState(false);

  const handleUserClick = () => {
    if (token) {
      setDropDown(!dropDown);
    } else {
      navigate("/login");
    }
  };

  // const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setKeyword(e.target.value);
  // };

  // 상품 검색
  const handleSearch = async () => {
    if (searchInputRef.current) {
      // 추가된 체크
      const keyword = searchInputRef.current.value;
      if (keyword) {
        startTransition(() => {
          navigate("/search", { state: { keyword } });
        });
      }
      searchInputRef.current.value = ""; // 입력 필드 초기화
    }
  };

  // 엔터키를 쳤을 때 검색 할 수 있게함
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
      if (searchInputRef.current) {
        searchInputRef.current.value = ""; // 입력 필드 초기화
      }
    }
  };

  const handleMoveToAdminPage = () => {
    navigate("/admin");
  };

  const needLoginModal = (
    <Modal onClickYes={() => navigate("/login")}>
      로그인이 필요한 서비스입니다.
      <br />
      로그인 하시겠습니까?
    </Modal>
  );

  // userType === "BUYER" /토큰이 없을때 guest Header
  const buyerHeader = (
    <S.HeaderUserWrapper>
      <S.CartBtn
        type="button"
        aria-label="장바구니에 담기 버튼"
        onClick={
          token
            ? () => navigate("/cart")
            : () => {
                dispatch(openModal());
              }
        }
      >
        <S.IconImg src={CartIcon} alt="장바구니 아이콘버튼" />
        <S.CartText>장바구니</S.CartText>
      </S.CartBtn>

      <S.UserBtn onClick={handleUserClick}>
        <S.IconImg src={UserIcon} alt="유저 아이콘 버튼" />
        <S.UserText>{token ? "마이페이지" : "로그인"}</S.UserText>
        {token && dropDown && <DropDown />}
      </S.UserBtn>
    </S.HeaderUserWrapper>
  );

  // userType === "SELLER"
  const sellerHeader = (
    <S.HeaderUserWrapper>
      <S.UserBtn onClick={handleUserClick}>
        <S.IconImg src={UserIcon} alt="유저 아이콘 버튼" />
        <S.UserText>마이페이지</S.UserText>
        {token && dropDown && <DropDown />}
      </S.UserBtn>
      <S.ShoppingBagBtn type="button" size="ms" onClick={handleMoveToAdminPage}>
        판매자센터
      </S.ShoppingBagBtn>
    </S.HeaderUserWrapper>
  );

  return (
    <S.HomeHeader>
      {!token && modal ? needLoginModal : null}
      <S.Navbar>
        <S.HeaderSearchWrapper>
          <S.Logo
            src={Logo}
            alt="호두마켓 로고"
            onClick={() => navigate("/")}
          />
          <S.SearchBarWrapper>
            <S.SearchInp
              type="text"
              ref={searchInputRef}
              // onChange={handleChangeKeyword}
              onKeyPress={handleKeyPress}
              placeholder="상품을 검색해보세요!"
            />
            <S.SearchBtn
              type="button"
              aria-label="검색하기 버튼"
              onClick={handleSearch}
            />
          </S.SearchBarWrapper>
        </S.HeaderSearchWrapper>
        {userType === "BUYER"
          ? buyerHeader
          : token
          ? sellerHeader
          : buyerHeader}
      </S.Navbar>
    </S.HomeHeader>
  );
}

export default Navbar;
