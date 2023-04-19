import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Carousel from "../../components/Home/Carousel/Carousel";
import ProductCard from "../../components/Home/ProductCard/ProductCard";
import { RootState } from "../../store/store";
import { fetchGetProducts } from "../../features/productSlice";
import * as S from "./style";
import PageNation from "../../components/common/PagenationBtn/PagenationBtn";

function HomePage() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(
    (state: RootState) => state.products.products
  );
  const totalPage = useAppSelector(
    (state: RootState) => state.products.totalPage
  );
  console.log(totalPage);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchGetProducts(currentPage));
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
        <PageNation totalPage={totalPage} onPageChange={handlePageChange} />
      </S.ProductSection>
    </>
  );
}

export default HomePage;
