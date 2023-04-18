import * as S from "./style";


interface ModalProps {
  children: React.ReactNode;
}

function Modal({ children }: ModalProps) {
  return (
    <S.Background>
      <S.ModalContainer>
        <S.ModalText>{children}</S.ModalText>
        <S.ModalBtn type="button" size="s" color="white">
          아니오
        </S.ModalBtn>
        <S.ModalBtn type="button" size="s">
          예
        </S.ModalBtn>
      </S.ModalContainer>
    </S.Background>
  );
}

export default Modal;
