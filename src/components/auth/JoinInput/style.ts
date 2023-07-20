import styled from "styled-components";

// JoinInput
export const Container = styled.div`
  display: flex;
  align-items: end;
`;
export const InputWrapper = styled.div`
  margin: 1rem 0 0 0;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 1.6rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Input = styled.input`
  width: ${(props) => props.width + "px"};
  height: 54px;
  margin-right: 1.2rem;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding: 17px 16px;
  /* text-align: center; */
  font-size: 1.6rem;
  line-height: 2rem;

  /* input 크기 */
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.green};
    outline: none;
  }
`;

// Email input 스타일

export const EmailInputWrapper = styled.div`
  display: flex;
  margin: 1rem 0 0 0;
  span {
    align-self: center;
    margin: 0 1.2rem 0 0;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2rem;
  }
`;

export const Select = styled.select`
  width: 152px;
  height: 54px;
  margin-right: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 5px;
  text-align: center;
  font-size: 1.6rem;
  line-height: 2rem;
  &:focus {
    border-color: green;
  }
`;
