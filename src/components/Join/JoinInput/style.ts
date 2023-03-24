import styled from "styled-components";

// JoinInput
const JoinForm = styled.form`
  display: flex;
  align-items: end;
`;
const InputWrapper = styled.div`
  margin: 1rem 0 0 0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 1.6rem;
  line-height: 2rem;
  color: #767676;
`;

export const Input = styled.input`
  width: ${(props) => props.width + "px"};
  height: 54px;
  margin-right: 1.2rem;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding: 17px 16px;
  text-align: center;
  font-size: 1.6rem;
  line-height: 2rem;

  /* input 크기 */
  /* &:focus {
    outline: 1px solid #21bf48;
  } */
`;

// InputPhone

const InputPhoneNum = styled(Input)``;

const SelectPhoneNum = styled.select`
  width: 152px;
  height: 54px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding: 17px 16px;
  text-align: center;
  font-size: 1.6rem;
  line-height: 2rem;
`;

export const S = {
  InputWrapper,
  JoinForm,
  Label,
  Input,
  InputPhoneNum,
  SelectPhoneNum,
};
