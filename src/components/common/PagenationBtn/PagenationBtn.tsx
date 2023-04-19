import { useState } from "react";
import * as S from "./style";
import { ReactComponent as LeftArrow } from "../../../assets/images/icon-swiper-left.svg";
import { ReactComponent as RightArrow } from "../../../assets/images/icon-swiper-right.svg";

interface PageNationProps {
  totalPage: number;
  onPageChange: (page: number) => void;
}

function PageNation({ totalPage, onPageChange }: PageNationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };
  const pages = [...Array(totalPage).keys()].map((i) => i + 1);

  return (
    <S.PaginationWrapper>
      <S.ArrowIconWrapper
        onClick={
          currentPage > 1 ? () => handleClick(currentPage - 1) : undefined
        }
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
        onClick={
          currentPage < totalPage
            ? () => handleClick(currentPage + 1)
            : undefined
        }
        disabled={currentPage >= totalPage}
      >
        <RightArrow />
      </S.ArrowIconWrapper>
    </S.PaginationWrapper>
  );
}

export default PageNation;
