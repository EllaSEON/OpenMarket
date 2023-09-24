import { useNavigate } from "react-router-dom";
import { Product } from "../../../types/Product.type";
import * as S from "./style";
import { startTransition } from "react";

function ProductCard({ product }: { product: Product }) {
  const navigate = useNavigate();

  return (
    <S.ProductCardList
      onClick={() => {
        startTransition(() => navigate(`/products/${product.product_id}`));
      }}
    >
      <S.ProductImg
        src={`https://res.cloudinary.com/dgwitjjjd/image/fetch/c_scale,w_600/f_auto/q_auto/${product.image}
        `}
        alt={product.product_name}
      />
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
