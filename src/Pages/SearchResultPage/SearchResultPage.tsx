import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import * as S from "../HomePage/style";
import ProductCard from "../../components/Home/ProductCard/ProductCard";
import { NoHaveProduct } from "./style";

function SearchResultPage() {
  const searchProduct = useAppSelector(
    (state: RootState) => state.products.products
  );

  return (
    <S.ProductSection>
      <h2 className="hidden">상품리스트</h2>
      {searchProduct.length === 0 ? (
        <NoHaveProduct>
          <h3>
            검색 결과가 없어요!😅
            <br />
            다시 검색해보세요~
          </h3>
        </NoHaveProduct>
      ) : (
        <S.ProductLists>
          {searchProduct?.map((product) => {
            return <ProductCard key={product.product_id} product={product} />;
          })}
        </S.ProductLists>
      )}
    </S.ProductSection>
  );
}

export default SearchResultPage;
