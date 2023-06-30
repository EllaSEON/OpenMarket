import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/common/Button/Button";
import SellerAdminCategory from "../../components/Seller/SellerAdminCategory";
import SellerAdminContent from "../../components/Seller/SellerAdminContent";

function SellerAdminPage() {
  const navigate = useNavigate();

  const handleMoveToPage = () => {
    navigate("/register");
  };

  return (
    <section>
      <H2Wrapper>
        <div>
          <H2>대시보드</H2>
          <SellerName>백엔드 글로벌</SellerName>
        </div>
        <Button type="button" size="ms" onClick={handleMoveToPage}>
          상품 업로드
        </Button>
      </H2Wrapper>
      <AdminWrapper>
        <SellerAdminCategory />
        <SellerAdminContent />
      </AdminWrapper>
    </section>
  );
}

export default SellerAdminPage;

const H2Wrapper = styled.div`
  padding: 4.4rem 10rem;
  display: flex;
  justify-content: space-between;
`;
const H2 = styled.h2`
  display: inline-block;
  font-weight: 700;
  font-size: 3.6rem;
  line-height: 4.4rem;
  margin-right: 1.6rem;
`;

const SellerName = styled.span`
  font-weight: 500;
  font-size: 3.6rem;
  line-height: 4.4rem;
  color: ${({ theme }) => theme.colors.green};
`;

const AdminWrapper = styled.div`
  display: flex;
`;
