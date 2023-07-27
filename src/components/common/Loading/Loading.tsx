import styled from "styled-components";
import Spinner from "../../../assets/images/spinner.gif";

function Loading() {
  return (
    <>
      <LoadingSpinner src={Spinner} alt="로딩" />
    </>
  );
}
export default Loading;

const LoadingSpinner = styled.img`
  text-align: center;
  width: 100%;
`;
