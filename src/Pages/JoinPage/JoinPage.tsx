import styled from "styled-components";
import HeaderLogo from "../../components/common/JoinLogo/JoinLogo";
import JoinForm from "../../components/auth/JoinForm/JoinForm";

function JoinPage() {
  return (
    <JoinPageWrapper>
      <HeaderLogo />
      <JoinForm />
    </JoinPageWrapper>
  );
}
export default JoinPage;

export const JoinPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
