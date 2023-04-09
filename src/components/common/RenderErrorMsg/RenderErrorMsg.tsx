import styled from "styled-components";

function RenderErrorMsg(error: any) {
  const errorType = error?.type;
  const errorMessage = error?.message;

  if (errorType === "success") {
    return <SuccessTxt>{errorMessage?.toString()}</SuccessTxt>;
  }

  if (errorType === "fail") {
    return <ErrorText>{errorMessage?.toString()}</ErrorText>;
  }

  return null;
}

export default RenderErrorMsg;

const ErrorText = styled.small`
  display: block;
  margin-top: 1rem;
  font-size: 1.4rem;
  font-weight: 500;
  color: #eb5757;
`;

const SuccessTxt = styled.small`
  display: block;
  margin-top: 1rem;
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.green};
`;
