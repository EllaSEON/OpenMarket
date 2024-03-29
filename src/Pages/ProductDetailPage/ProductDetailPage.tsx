import { Suspense, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Modal from "../../components/common/Modal/Modal";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import AmountBtn from "../../components/common/AmountBtn/AmountBtn";
import * as S from "./style";
import { openModal } from "../../features/modalSlice";
import useFetchProductDetail from "../../hooks/queries/useFetchProductDetail";
import useCreateCartProduct from "../../hooks/queries/useCreateCartProduct";

function ProductDetailPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.login.token);
  const modal = useAppSelector((state) => state.modal.isOpen);
  const userType = useAppSelector((state) => state.login.userType);
  const [count, setCount] = useState(1);
  const { productId } = useParams();
  const productIdValue = productId || "defaultProductId";

  const { data: productDetailData } = useFetchProductDetail(productIdValue);

  const cartMutation = useCreateCartProduct();

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
            src={`https://res.cloudinary.com/dgwitjjjd/image/fetch/c_scale,w_600/f_auto/q_auto/${productDetailData?.image}
            `}
            alt={productDetailData.product_name}
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
