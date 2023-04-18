import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { useAppDispatch } from "../../../store/hooks";
import { closeModal } from "../../../features/modalSlice";

interface ModalProps {
  children: React.ReactNode;
}

function Modal({ children }: ModalProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <S.Background>
      <S.ModalContainer>
        <S.ModalText>{children}</S.ModalText>
        <S.ModalBtn
          type="button"
          size="s"
          color="white"
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          아니오
        </S.ModalBtn>
        <S.ModalBtn
          type="button"
          size="s"
          onClick={() => {
            navigate("/login");
          }}
        >
          예
        </S.ModalBtn>
      </S.ModalContainer>
    </S.Background>
  );
}

export default Modal;
