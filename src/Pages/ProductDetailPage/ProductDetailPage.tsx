import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import Modal from "../../components/common/Modal/Modal";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import AmountBtn from "../../components/common/AmountBtn/AmountBtn";
import * as S from "./style";
import { openModal } from "../../features/modalSlice";
import { fetchPostCart } from "../../features/postCartSlice";
import useFetchProductDetail from "../../hooks/queries/useFetchProductDetail";

function ProductDetailPage() {
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector((state: RootState) => state.login.token);
  const modal = useAppSelector((state: RootState) => state.modal.isOpen);
  const userType = useAppSelector((state: RootState) => state.login.userType);
  const [count, setCount] = useState(1);

  const { data } = useFetchProductDetail(productId as string);

  const handlePostCart = async () => {
    if (token) {
      await dispatch(
        fetchPostCart({
          TOKEN: token,
          product_id: data?.product_id || 1,
          quantity: count,
          check: true,
        })
      );
      navigate("/cart");
    } else {
      dispatch(openModal());
    }
  };

  const needLoginModal = (
    <Modal onClickYes={() => navigate("/login")}>
      로그인이 필요한 서비스입니다.
      <br />
      로그인 하시겠습니까?
    </Modal>
  );

  return (
    <>
      <S.ProductWrapper>
        {!token && modal ? needLoginModal : null}
        <S.ProductImgBox>
          <img src={data.image} alt="상품 사진" />
        </S.ProductImgBox>
        <S.ProductCartWrapper>
          <S.SellerText>{data.store_name}</S.SellerText>
          <S.ProductText>{data.product_name}</S.ProductText>
          <S.PriceText>
            {data.price?.toLocaleString()}
            <span>원</span>
          </S.PriceText>
          <S.DeliveryText>
            {data.shipping_method === "PARCEL" ? "직접배송" : "택배배송"} /{" "}
            {data.shipping_fee === 0
              ? "무료배송"
              : `배송비 ${data.shipping_fee?.toLocaleString()} 원`}
          </S.DeliveryText>
          <S.hr />
          <AmountBtn
            count={count}
            setCount={setCount}
            stock={data.stock || 0}
          />
          <S.hr />
          <S.TotalPriceWrapper>
            <S.TotalText>총 상품 금액</S.TotalText>
            <div>
              <S.TotalAmountText>
                총 수량
                <span> {count}</span>개
              </S.TotalAmountText>
              <S.TotalPriceText>
                {(
                  (data.price || 0) * count +
                  (data.shipping_fee || 0)
                ).toLocaleString()}{" "}
                <span>원</span>
              </S.TotalPriceText>
            </div>
          </S.TotalPriceWrapper>
          <S.BtnWrapper>
            <S.PurchaseBtn
              type="button"
              size="md"
              disabled={userType === "SELLER"}
            >
              바로 구매
            </S.PurchaseBtn>
            <S.CartBtn
              type="button"
              size="ms"
              onClick={handlePostCart}
              disabled={userType === "SELLER"}
            >
              장바구니
            </S.CartBtn>
          </S.BtnWrapper>
        </S.ProductCartWrapper>
      </S.ProductWrapper>
      <ProductDetail />
    </>
  );
}

export default ProductDetailPage;
