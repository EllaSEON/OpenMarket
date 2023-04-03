import styled from "styled-components";

function renderErrorMessage(error: any) {
  return error && <ErrorText>{error.message?.toString()}</ErrorText>;
}

export default renderErrorMessage;

const ErrorText = styled.small`
  display: block;
  margin-top: 1rem;
  font-size: 1.4rem;
  font-weight: 500;
  color: #eb5757;
`;
