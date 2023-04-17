import Navbar from "../../components/common/Navbar/Navbar";
import Footer from "../../components/common/Footer/Footer";
import Carousel from "../../components/Home/Carousel/Carousel";
import ProductCard from "../../components/Home/ProductCard/ProductCard";
import * as S from "./style";

function HomePage() {
  return (
    <>
      <Carousel />
      <S.ProductSection>
        <h2 className="hidden">상품리스트</h2>
        <S.ProductLists>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </S.ProductLists>
      </S.ProductSection>
    </>
  );
}

export default HomePage;
