import styled from "styled-components";
import Button from "../../components/common/Button/Button";

export const Section = styled.section`
  display: flex;
  width: 740px;
  margin: 300px auto 0;
  align-items: center;
  gap: 50px;
`;

export const H2 = styled.h2`
  font-weight: 700;
  font-size: 36px;
`;

export const Txt = styled.p`
  margin: 20px 0 40px;
  color: ${({ theme }) => theme.colors.darkGray};
  line-height: 2rem;
`;

export const BtnDiv = styled.div`
  display: flex;
  gap: 14px;
`;

export const Btn = styled(Button)`
  width: 200px;
`;
