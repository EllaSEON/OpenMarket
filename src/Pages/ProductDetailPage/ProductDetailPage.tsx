import { Suspense, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import Modal from "../../components/common/Modal/Modal";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import AmountBtn from "../../components/common/AmountBtn/AmountBtn";
import * as S from "./style";
import { openModal } from "../../features/modalSlice";
import useFetchProductDetail from "../../hooks/queries/useFetchProductDetail";
import cartAPI from "../../API/cartAPI";
import Loading from "../../components/common/Loading/Loading";

function ProductDetailPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useAppSelector((state: RootState) => state.login.token);
  const modal = useAppSelector((state: RootState) => state.modal.isOpen);
  const userType = useAppSelector((state: RootState) => state.login.userType);
  const [count, setCount] = useState(1);
  const { productId } = useParams();
  const productIdValue = productId || "defaultProductId";

  const { data: productDetailData } = useFetchProductDetail(productIdValue);

  const cartMutation = useMutation(cartAPI.createCartProduct, {
    onSuccess: () => {
      // eslint-disable-next-line no-restricted-globals
      const cartAlert = confirm(
        "장바구니에 담았습니다. 장바구니로 이동하시겠습니까?"
      );
      if (cartAlert === true) {
        navigate("/cart");
      }
    },
    onError: () => {
      alert("재고보다 더 많은 상품을 담을 수 없습니다.");
    },
  });

  const handlePostCart = () => {
    if (token) {
      const cartData = {
        token: token,
        product_id: productIdValue,
        quantity: count,
        check: true,
      };
      cartMutation.mutate(cartData);
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
          <img
            src={`https://res.cloudinary.com/dgwitjjjd/image/fetch/c_scale,w_1000/f_auto/q_auto/${productDetailData?.image}
            `}
            alt="상품 사진"
          />
        </S.ProductImgBox>
        <S.ProductCartWrapper>
          <S.SellerText>{productDetailData.store_name}</S.SellerText>
          <S.ProductText>{productDetailData.product_name}</S.ProductText>
          <S.PriceText>
            {productDetailData.price?.toLocaleString()}
            <span>원</span>
          </S.PriceText>
          <S.DeliveryText>
            {productDetailData.shipping_method === "PARCEL"
              ? "직접배송"
              : "택배배송"}{" "}
            /{" "}
            {productDetailData.shipping_fee === 0
              ? "무료배송"
              : `배송비 ${productDetailData.shipping_fee?.toLocaleString()} 원`}
          </S.DeliveryText>
          <S.hr />
          <AmountBtn
            count={count}
            setCount={setCount}
            stock={productDetailData.stock || 0}
            productPrice={productDetailData.price}
            isChecked={true}
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
                  (productDetailData.price || 0) * count +
                  (productDetailData.shipping_fee || 0)
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
