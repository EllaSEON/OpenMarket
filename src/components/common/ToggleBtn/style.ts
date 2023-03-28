import styled from "styled-components";

export const ToggleWrapper = styled.div`
  margin: 0 auto;
  width: 550px;
`;

export const ToggleText = styled.button`
  width: 27.5rem;
  height: 6rem;
  padding: 2rem 8.7rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-bottom-color: #fff;
  border-radius: 10px 10px 0 0;
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 2.2rem;
`;

export default ToggleText;
