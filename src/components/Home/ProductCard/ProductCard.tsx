import { Product } from "../../../features/productSlice";
import * as S from "./style";

function ProductCard({ product }: { product: Product }) {
  return (
    <S.ProductCardList>
      <S.ProductImg src={product.image} alt={product.product_name} />
      <S.StoreName>{product.store_name}</S.StoreName>
      <S.ProductName>{product.product_name}</S.ProductName>
      <S.PriceWrapper>
        <S.ProductPrice>{product.price.toLocaleString()}</S.ProductPrice>
        <S.PriceUnit>원</S.PriceUnit>
      </S.PriceWrapper>
    </S.ProductCardList>
  );
}

export default ProductCard;
