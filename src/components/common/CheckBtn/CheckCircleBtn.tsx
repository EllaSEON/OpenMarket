import * as S from "./style";

interface CheckCircleBtnProps {
  isChecked: boolean;
  onChange: () => void;
}

function CheckCircleBtn({ isChecked, onChange }: CheckCircleBtnProps) {
  return (
    <S.CircleBtn type="checkbox" checked={isChecked} onChange={onChange} />
  );
}

export default CheckCircleBtn;
