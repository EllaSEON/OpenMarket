import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchGetProductDetail } from "../../features/productSlice";
import * as S from "./style";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import AmountBtn from "../../components/common/AmountBtn/AmountBtn";

function ProductDetailPage() {
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const productDetail = useAppSelector((state) => state.products.productDetail);

  const [count, setCount] = useState(1);

  useEffect(() => {
    if (productId !== undefined) {
      const productIdNumber = parseInt(productId);
      dispatch(fetchGetProductDetail(productIdNumber));
    }
  }, [dispatch, productId]);

  return (
    <>
      <S.ProductWrapper>
        <S.ProductImgBox>
          <img src={productDetail.image} alt="상품 사진" />
        </S.ProductImgBox>
        <S.ProductCartWrapper>
          <S.SellerText>{productDetail.store_name}</S.SellerText>
          <S.ProductText>{productDetail.product_name}</S.ProductText>
          <S.PriceText>
            {productDetail.price?.toLocaleString()}
            <span>원</span>
          </S.PriceText>
          <S.DeliveryText>
            {productDetail.shipping_method === "PARCEL"
              ? "직접배송"
              : "택배배송"}{" "}
            /{" "}
            {productDetail.shipping_fee === 0
              ? "무료배송"
              : `배송비 ${productDetail.shipping_fee?.toLocaleString()} 원`}
          </S.DeliveryText>
          <S.hr />
          <AmountBtn
            count={count}
            setCount={setCount}
            stock={productDetail.stock}
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
                  productDetail.price * count +
                  productDetail.shipping_fee
                ).toLocaleString()}{" "}
                <span>원</span>
              </S.TotalPriceText>
            </div>
          </S.TotalPriceWrapper>
          <S.BtnWrapper>
            <S.PurchaseBtn type="button" size="md">
              바로 구매
            </S.PurchaseBtn>
            <S.CartBtn type="button" size="ms">
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
