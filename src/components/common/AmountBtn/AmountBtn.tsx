import * as S from "./style";

interface AmountBtnProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  stock?: number;
}

function AmountBtn({ count, setCount, stock }: AmountBtnProps) {
  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleIncrease = () => {
    if (stock !== undefined && count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <S.AmountBox>
      <S.CountBtn type="button" onClick={handleDecrease} disabled={count <= 1}>
        -
      </S.CountBtn>
      <S.AmountText>{count}</S.AmountText>
      <S.CountBtn
        type="button"
        onClick={handleIncrease}
        disabled={count >= (stock || 0)}
      >
        +
      </S.CountBtn>
    </S.AmountBox>
  );
}

export default AmountBtn;
