import * as S from "./style";

interface AmountBtnProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  stock: number;
}

function AmountBtn({ count, setCount, stock }: AmountBtnProps) {
  const handleClickMinus = () => {
    setCount(count - 1);
  };

  return (
    <S.AmountBox>
      <S.CountBtn
        type="button"
        onClick={handleClickMinus}
        disabled={count <= 1}
      >
        -
      </S.CountBtn>
      <S.AmountText>{count}</S.AmountText>
      <S.CountBtn
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </S.CountBtn>
    </S.AmountBox>
  );
}

export default AmountBtn;
