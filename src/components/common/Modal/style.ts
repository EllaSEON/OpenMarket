import styled from "styled-components";
import Button from "../Button/Button";

// 모달창 배경
export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
`;

// 모달창 영역
export const ModalContainer = styled.div`
  position: relative;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 4rem 7.5rem;
  text-align: center;
  width: 360px;
  height: 200px;
  background: #fff;
`;

export const ModalText = styled.p`
  margin: 0 0 30px 0;
  font-size: 1.6rem;
  line-height: 20px;
`;

export const ModalBtnWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;

export const ModalBtn = styled(Button)`
  width: 100px;
`;
