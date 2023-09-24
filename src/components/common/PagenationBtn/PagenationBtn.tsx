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
  const displayPages = 5; // 한 번에 보여줄 페이지 수
  const handleClick = (page: number) => {
    startTransition(() => {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" }); // 페이지 맨 위로 부드럽게 스크롤
    });
  };

  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left" && currentPage > 1) {
      handleClick(currentPage - 1);
    } else if (direction === "right" && currentPage < totalPage) {
      handleClick(currentPage + 1);
    }
  };

  // 가장 왼쪽에 표시될 페이지 번호를 계산
  // [1-5] 일 때 1페이지, [6-11] 일때 6페이지
  let startPage =
    Math.ceil(currentPage / displayPages) * displayPages - displayPages + 1;

  // 시작 페이지부터 displayPages만큼의 페이지를 표시함
  const pages = [...Array(totalPage).keys()] //totalPage 가 5이면 [0,1,2,3,4] 배열 반환
    .slice(startPage - 1, startPage - 1 + displayPages) //startPage가 1일 때 [0,1,2,3,4] index 0부터 5미만까지
    .map((i) => i + 1); // [1,2,3,4,5]

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
