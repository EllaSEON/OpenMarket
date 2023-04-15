import * as S from "./style";

function ProductCard() {
  return (
    <S.ProductCardList>
      <S.ProductImg></S.ProductImg>
      <S.StoreName>우당탕탕 라이캣의 실험실</S.StoreName>
      <S.ProductName>Hack Your Life 개발자 노트북 파우치</S.ProductName>
      <S.PriceWrapper>
        <S.ProductPrice>29,000</S.ProductPrice>
        <S.PriceUnit>원</S.PriceUnit>
      </S.PriceWrapper>
    </S.ProductCardList>
  );
}

export default ProductCard;
