import { useState } from "react";
import styled from "styled-components";
import Button from "../common/Button/Button";
import { SellerProduct } from "../../types/SellerRegister.type";
import useDeleteSellerProduct from "../../hooks/queries/useDeleteSellerProduct";
import { useAppSelector } from "../../store/hooks";
import Modal from "../common/Modal/Modal";

interface SellerProductPros {
  productList: SellerProduct;
}

function SellerItem({ productList }: SellerProductPros) {
  const token = useAppSelector((state) => state.login.token);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { deleteSellerProductMutation } = useDeleteSellerProduct(
    productList.product_id
  );

  const handleDeleteSellerProduct = () => {
    if (token) {
      const deletedData = {
        token: token,
        productId: productList.product_id,
      };
      deleteSellerProductMutation.mutate(deletedData);
    }
  };

  const needDeleteModal = (
    <Modal
      onClickYes={() => {
        handleDeleteSellerProduct();
      }}
      onClickNo={() => {
        setIsOpenModal(false);
      }}
      onClickOutside={() => {
        setIsOpenModal(false);
      }}
    >
      상품을 삭제하시겠습니까?
    </Modal>
  );

  return (
    <ItemList>
      {isOpenModal ? needDeleteModal : null}
      <ProductInfoWrapper>
        <Img src={productList.image} />
        <TextWrapper>
          <ProductInfoText>{productList.product_name}</ProductInfoText>
          <StockNO>재고 : {productList.stock}개</StockNO>
        </TextWrapper>
      </ProductInfoWrapper>
      <ProductInfoText>{productList.price.toLocaleString()}원</ProductInfoText>
      <Button type="submit" size="s">
        수정
      </Button>
      <Button
        type="submit"
        size="s"
        onClick={() => {
          setIsOpenModal(true);
        }}
      >
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
