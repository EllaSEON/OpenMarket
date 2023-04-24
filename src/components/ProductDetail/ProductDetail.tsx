import { useState } from "react";
import * as S from "./style";

function ProductDetail() {
  const [tableContent, setTableContent] = useState("상품 상세");
  return (
    <div>
      <S.TabTitleWrapper>
        <S.TabTitle
          active={tableContent === "상품상세"}
          onClick={() => {
            setTableContent("상품상세");
          }}
        >
          상품상세
        </S.TabTitle>
        <S.TabTitle
          active={tableContent === "상품평"}
          onClick={() => {
            setTableContent("상품평");
          }}
        >
          상품평
        </S.TabTitle>
        <S.TabTitle
          active={tableContent === "상품문의"}
          onClick={() => {
            setTableContent("상품문의");
          }}
        >
          상품문의
        </S.TabTitle>
        <S.TabTitle
          active={tableContent === "배송/교환/반품 안내"}
          onClick={() => {
            setTableContent("배송/교환/반품 안내");
          }}
        >
          배송/교환/반품 안내
        </S.TabTitle>
      </S.TabTitleWrapper>
      <S.TabContent>{tableContent}</S.TabContent>
    </div>
  );
}

export default ProductDetail;
