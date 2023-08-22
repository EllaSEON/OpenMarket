import styled from "styled-components";
import Spinner from "../../../assets/images/spinner.gif";

function Loading() {
  return (
    <SpinnerWrapper>
      <LoadingSpinner src={Spinner} alt="로딩" />
    </SpinnerWrapper>
  );
}
export default Loading;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LoadingSpinner = styled.img`
  text-align: center;
  width: 100%;
`;
