import styled from "styled-components";
import UploadProductForm from "../../components/UploadProduct/UploadProductForm";

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
        <UploadProductForm />
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

const LabelTxt = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
  margin: 1.5rem 0 1rem 0;
  color: ${({ theme }) => theme.colors.darkGray};
`;
