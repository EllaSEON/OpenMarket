import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Carousel from "../../components/Home/Carousel/Carousel";
import ProductCard from "../../components/Home/ProductCard/ProductCard";
import { RootState } from "../../store/store";
import { fetchGetProducts } from "../../features/productSlice";
import * as S from "./style";

function HomePage() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(
    (state: RootState) => state.products.products
  );
  console.log(products);
  useEffect(() => {
    dispatch(fetchGetProducts());
  }, []);

  return (
    <>
      <Carousel />
      <S.ProductSection>
        <h2 className="hidden">상품리스트</h2>
        <S.ProductLists>
          {products?.map((product) => {
            return <ProductCard key={product.product_id} product={product} />;
          })}
        </S.ProductLists>
      </S.ProductSection>
    </>
  );
}

export default HomePage;
