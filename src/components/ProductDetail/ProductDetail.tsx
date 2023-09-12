import { useState } from "react";
import * as S from "./style";

const TAB_ITEMS = [
  { id: 1, title: "상품상세" },
  { id: 2, title: "상품평" },
  { id: 3, title: "상품문의" },
  { id: 4, title: "반품안내" },
];

function ProductDetail() {
  const [activeTabId, setActiveTabId] = useState(1);

  const activeTabTitle = TAB_ITEMS.find((tab) => tab.id === activeTabId)?.title;

  return (
    <div>
      <S.TabTitleWrapper>
        {TAB_ITEMS.map((tab) => (
          <S.TabTitle
            key={tab.id}
            active={tab.id === activeTabId}
            onClick={() => setActiveTabId(tab.id)}
          >
            {tab.title}
          </S.TabTitle>
        ))}
      </S.TabTitleWrapper>
      <S.TabContent>{activeTabTitle}</S.TabContent>
    </div>
  );
}

export default ProductDetail;
