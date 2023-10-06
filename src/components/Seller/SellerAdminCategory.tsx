import styled from "styled-components";

function SellerAdminCategory() {
  const CategoryList = [
    "판매중인 상품",
    "주문/배송",
    "문의/리뷰",
    "통계",
    "스토어 설정",
  ];

  const handleClick = () => {};

  return (
    <CategoryUl>
      {CategoryList.map((contents, index) => {
        return (
          <li key={index}>
            <CategoryBtn onClick={handleClick}>{contents}</CategoryBtn>
          </li>
        );
      })}
    </CategoryUl>
  );
}

export default SellerAdminCategory;

const CategoryUl = styled.ul`
  margin: 0 3rem 0 10rem;
`;

const CategoryBtn = styled.button`
  margin-bottom: 1rem;
  width: 25rem;
  height: 5rem;
  border-radius: 5px;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2rem;
  cursor: pointer;
  :hover {
    background: #effff3;
  }
`;
