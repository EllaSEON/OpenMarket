import { useState, Suspense } from "react";
import Carousel from "../../components/Home/Carousel/Carousel";
import ProductCard from "../../components/Home/ProductCard/ProductCard";
import * as S from "./style";
import PageNation from "../../components/common/PagenationBtn/PagenationBtn";
import useFetchProduct from "../../hooks/queries/useFetchProducts";
import { Product } from "../../types/Product.type";
import Loading from "../../components/common/Loading/Loading";

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useFetchProduct(currentPage);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Carousel />
        <S.ProductSection>
          <h2 className="hidden">상품리스트</h2>
          <S.ProductLists>
            {data.results.map((product: Product) => {
              return <ProductCard key={product.product_id} product={product} />;
            })}
          </S.ProductLists>
          <PageNation
            currentPage={currentPage}
            totalPage={Math.floor(data.count / 15 + 1)}
            setCurrentPage={setCurrentPage}
          />
        </S.ProductSection>
      </Suspense>
    </>
  );
}

export default HomePage;
