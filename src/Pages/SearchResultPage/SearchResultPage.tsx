import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import * as S from "../HomePage/style";
import ProductCard from "../../components/Home/ProductCard/ProductCard";
import { NoHaveProduct } from "./style";
import { Product } from "../../types/Product.type";
import useFetchSearch from "../../hooks/queries/useFetchSearch";
import Loading from "../../components/common/Loading/Loading";

function SearchResultPage() {
  const location = useLocation();
  const keyword = location.state.keyword;
  const { data } = useFetchSearch(keyword);

  return (
    <Suspense fallback={<Loading />}>
      <S.ProductSection>
        <h2 className="hidden">상품리스트</h2>
        {data.results.length === 0 ? (
          <NoHaveProduct>
            <h3>
              검색 결과가 없어요!😅
              <br />
              다시 검색해보세요~
            </h3>
          </NoHaveProduct>
        ) : (
          <S.ProductLists>
            {data.results.map((product: Product) => {
              return <ProductCard key={product.product_id} product={product} />;
            })}
          </S.ProductLists>
        )}
      </S.ProductSection>
    </Suspense>
  );
}

export default SearchResultPage;
