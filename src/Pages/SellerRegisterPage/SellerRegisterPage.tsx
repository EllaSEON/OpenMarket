import styled from "styled-components";
import ProductInp from "../../components/common/ProductInp/ProductInp";
import Button from "../../components/common/Button/Button";
import IconImg from "../../assets/images/icon-img.svg";

function SellerRegisterPage() {
  return (
    <RegisterSection>
      <H2>상품 등록</H2>
      <Wrapper>
        <div>
          <LabelTxt>※ 상품 등록 주의사항</LabelTxt>
          <WarningBox>
            - 주의사항 안내문 -<br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </WarningBox>
        </div>
        <form style={{ marginLeft: "5rem" }}>
          <div style={{ display: "flex" }}>
            <ProductInfoWrapper>
              <LabelWrapper>
                <LabelTxt>상품 이미지</LabelTxt>

                <ProductImgLabel htmlFor="ProductImg">
                  {" "}
                  <ProductImgInput type="file" id="ProductImg" />
                  <IconImgLogo src={IconImg} alt="이미지로고" />
                </ProductImgLabel>
              </LabelWrapper>
            </ProductInfoWrapper>
            <ProductInpWrapper>
              <ProductInp
                htmlFor="productName"
                labelText="상품명"
                width="35rem"
                placeholder="20자 이내로 입력"
              />
              <ProductInp
                htmlFor="productCost"
                labelText="판매가"
                placeholder="숫자만 입력"
              />

              <LabelTxt>배송 방법</LabelTxt>
              <Button type="button" size="ms">
                택배,소포,등기
              </Button>
              <Button type="button" size="ms" color="white">
                직접배송
              </Button>

              <ProductInp
                htmlFor="shippingFee"
                labelText="기본 배송비"
                placeholder="숫자만 입력"
              />
              <ProductInp
                htmlFor="stockNo"
                labelText="재고"
                placeholder="숫자만 입력"
              />
            </ProductInpWrapper>
          </div>
          <EditorWrapper>
            <LabelTxt>상품 상세 정보</LabelTxt>
            <Editor />
          </EditorWrapper>
          <SaveBtnWrapper>
            <Button type="button" size="ms" color="white">
              취소
            </Button>
            <Button type="button" size="ms">
              저장하기
            </Button>
          </SaveBtnWrapper>
        </form>
      </Wrapper>
    </RegisterSection>
  );
}

export default SellerRegisterPage;

const RegisterSection = styled.section`
  padding: 4.4rem 10rem 0 10rem;
`;

const H2 = styled.h2`
  font-weight: 700;
  font-size: 3.6rem;
  line-height: 4.4rem;
`;

const Wrapper = styled.div`
  margin-top: 4.4rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const WarningBox = styled.div`
  width: 32rem;
  height: 34rem;
  background: #ffefe8;
  padding: 2rem;
  font-size: 1.4rem;
  line-height: 1.7rem;
  font-weight: 400;
`;

const ProductInfoWrapper = styled.div`
  display: flex;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const LabelTxt = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
  margin: 1.5rem 0 1rem 0;
  color: ${({ theme }) => theme.colors.darkGray};
`;
const ProductImgLabel = styled.label`
  position: relative;
  width: 45rem;
  height: 45rem;
  background: ${({ theme }) => theme.colors.lightGray};
`;

const IconImgLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const ProductImgInput = styled.input`
  display: none;
`;

const ProductInpWrapper = styled.div`
  margin-left: 4rem;
`;

const Editor = styled.textarea`
  width: 100%;
  height: 50rem;
  background: #f2f2f2;
  border-radius: 10px;
  resize: none;
`;

const EditorWrapper = styled.div`
  margin-top: 4rem;
`;

const SaveBtnWrapper = styled.div`
  margin: 5rem auto;
  float: right;
`;
