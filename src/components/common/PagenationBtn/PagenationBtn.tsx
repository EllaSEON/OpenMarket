import { startTransition } from "react";
import * as S from "./style";
import { ReactComponent as LeftArrow } from "../../../assets/images/icon-swiper-left.svg";
import { ReactComponent as RightArrow } from "../../../assets/images/icon-swiper-right.svg";

interface PageNationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number;
}

function PageNation({
  currentPage,
  setCurrentPage,
  totalPage,
}: PageNationProps) {
  const handleClick = (page: number) => {
    startTransition(() => {
      setCurrentPage(page);
    });
  };

  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left" && currentPage > 1) {
      handleClick(currentPage - 1);
    } else if (direction === "right" && currentPage < totalPage) {
      handleClick(currentPage + 1);
    }
  };

  // totalPages 가 number 임으로 map 돌려주기 위해서 배열로 만들기
  const pages = [...Array(totalPage).keys()].map((i) => i + 1);

  return (
    <S.PaginationWrapper>
      <S.ArrowIconWrapper
        onClick={() => handleArrowClick("left")}
        disabled={currentPage <= 1}
      >
        <LeftArrow />
      </S.ArrowIconWrapper>
      {pages.map((page) => (
        <S.PageNumber
          key={page}
          onClick={() => handleClick(page)}
          active={currentPage === page}
        >
          {page}
        </S.PageNumber>
      ))}
      <S.ArrowIconWrapper
        onClick={() => handleArrowClick("right")}
        disabled={currentPage >= totalPage}
      >
        <RightArrow />
      </S.ArrowIconWrapper>
    </S.PaginationWrapper>
  );
}

export default PageNation;
