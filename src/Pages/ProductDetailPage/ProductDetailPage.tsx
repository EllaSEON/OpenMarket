import * as S from "./style";
import ProductDetailImg from "../../assets/images/img.png";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

function ProductDetailPage() {
  return (
    <>
      <S.ProductWrapper>
        <S.ProductImgBox>
          <img src={ProductDetailImg} alt="상품 사진" />
        </S.ProductImgBox>
        <S.ProductCartWrapper>
          <S.SellerText>백엔드글로벌</S.SellerText>
          <S.ProductText>딥러닝 개발자 무릎 담요</S.ProductText>
          <S.PriceText>
            17,500<span>원</span>
          </S.PriceText>
          <S.DeliveryText>택배배송 / 무료배송</S.DeliveryText>
          <S.hr />
          <S.AmountBox>
            <S.AmountBtn type="button">-</S.AmountBtn>
            <S.AmountText>1</S.AmountText>
            <S.AmountBtn type="button">+</S.AmountBtn>
          </S.AmountBox>
          <S.hr />
          <S.TotalPriceWrapper>
            <S.TotalText>총 상품 금액</S.TotalText>
            <div>
              <S.TotalAmountText>
                총 수량
                <span> 1</span>개
              </S.TotalAmountText>
              <S.TotalPriceText>
                17,500 <span>원</span>
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
