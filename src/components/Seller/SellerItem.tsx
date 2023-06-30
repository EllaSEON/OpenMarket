import styled from "styled-components";
import goods from "../../assets/images/img.png";
import Button from "../common/Button/Button";

function SellerItem() {
  return (
    <ItemList>
      <ProductInfoWrapper>
        <Img src={goods} />
        <TextWrapper>
          <ProductInfoText>딥러닝 개발자 무릎 담요</ProductInfoText>
          <StockNO>재고 : 370개</StockNO>
        </TextWrapper>
      </ProductInfoWrapper>
      <ProductInfoText>17,500원</ProductInfoText>
      <Button type="submit" size="s">
        수정
      </Button>
      <Button type="submit" size="s">
        삭제
      </Button>
    </ItemList>
  );
}

export default SellerItem;

const ItemList = styled.li`
  background: #fff;
  display: grid;
  grid-template-columns: 3fr 2fr 1fr 1fr;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  padding: 1.6rem 0;
  align-items: center; // 요소들을 수직 가운데 정렬
  justify-items: center; // 요소들을 수평 가운데 정렬
`;

const Img = styled.img`
  margin-right: 3rem;
  border-radius: 50%;
  width: 7rem;
  height: 7rem;
`;

const ProductInfoWrapper = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

const ProductInfoText = styled.span`
  font-size: 1.8rem;
  line-height: 2.2rem;
  margin-bottom: 1rem;
`;

const StockNO = styled.span`
  font-size: 1.6rem;
  line-height: 2rem;
`;
