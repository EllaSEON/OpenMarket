import styled from "styled-components";
import SellerItem from "./SellerItem";

function SellerAdminContent() {
  return (
    <ContentWrapper>
      <CategoryUl>
        <CategoryLi>상품정보</CategoryLi>
        <CategoryLi>판매가격</CategoryLi>
        <CategoryLi>수정</CategoryLi>
        <CategoryLi>삭제</CategoryLi>
      </CategoryUl>
      <SellerItem />
    </ContentWrapper>
  );
}

export default SellerAdminContent;

const ContentWrapper = styled.div`
  margin-right: 10rem;
  width: 80%;
  height: 60rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 5px;
  background: #f2f2f2;
`;

export const CategoryUl = styled.ul`
  background: #fff;
  display: grid;
  grid-template-columns: 3fr 2fr 1fr 1fr;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  align-items: center; // 요소들을 수직 가운데 정렬
  justify-items: center; // 요소들을 수평 가운데 정렬
`;

const CategoryLi = styled.li`
  padding: 1.8rem 0;
  font-size: 1.8rem;
  line-height: 2.2rem;
`;
