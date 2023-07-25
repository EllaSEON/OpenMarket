import { useNavigate } from "react-router-dom";
import { Product } from "../../../types/Product.type";
import * as S from "./style";

function ProductCard({ product }: { product: Product }) {
  const navigate = useNavigate();

  return (
    <S.ProductCardList
      onClick={() => {
        navigate(`/products/${product.product_id}`);
      }}
    >
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
