import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { useAppDispatch } from "../../../store/hooks";
import { closeModal } from "../../../features/modalSlice";

interface ModalProps {
  children: React.ReactNode;
}

function Modal({ children }: ModalProps) {
  const backgroundRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // 배경화면 클릭시 모달창 닫기
  const handleClickOutside = (e: React.MouseEvent<HTMLElement>) => {
    if (backgroundRef.current === e.target) {
      dispatch(closeModal());
    }
  };

  return (
    <S.Background ref={backgroundRef} onClick={handleClickOutside}>
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
            dispatch(closeModal());
          }}
        >
          예
        </S.ModalBtn>
      </S.ModalContainer>
    </S.Background>
  );
}

export default Modal;