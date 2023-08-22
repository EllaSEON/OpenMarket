import styled from "styled-components";

interface CheckCircleBtnProps {
  isChecked: boolean;
  onChange: () => void;
}

function CheckCircleBtn({ isChecked = true, onChange }: CheckCircleBtnProps) {
  // console.log(isChecked);
  return <CircleBtn type="checkbox" checked={isChecked} onChange={onChange} />;
}

export default CheckCircleBtn;

export const CircleBtn = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.colors.green};
  border-radius: 50%;
  cursor: pointer;

  &:checked {
    background: ${({ theme }) => theme.colors.green};
  }
`;
