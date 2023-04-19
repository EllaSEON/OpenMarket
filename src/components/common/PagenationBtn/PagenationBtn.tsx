import * as S from "./style";
import { ReactComponent as LeftArrow } from "../../../assets/images/icon-swiper-left.svg";
import { ReactComponent as RightArrow } from "../../../assets/images/icon-swiper-right.svg";

function PageNation() {
  return (
    <S.PaginationWrapper>
      <S.ArrowIconWrapper>
        <LeftArrow />
      </S.ArrowIconWrapper>
      <S.PageNumber>1</S.PageNumber>
      <S.PageNumber>2</S.PageNumber>
      <S.PageNumber>3</S.PageNumber>
      <S.PageNumber>4</S.PageNumber>
      <S.PageNumber>5</S.PageNumber>
      <S.PageNumber>6</S.PageNumber>
      <S.ArrowIconWrapper>
        <RightArrow />
      </S.ArrowIconWrapper>
    </S.PaginationWrapper>
  );
}

export default PageNation;
