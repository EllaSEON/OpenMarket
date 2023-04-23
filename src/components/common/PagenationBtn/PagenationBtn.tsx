import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store/store";
import * as S from "./style";
import { ReactComponent as LeftArrow } from "../../../assets/images/icon-swiper-left.svg";
import { ReactComponent as RightArrow } from "../../../assets/images/icon-swiper-right.svg";

interface PageNationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

function PageNation({ currentPage, setCurrentPage }: PageNationProps) {
  const totalPage = useAppSelector(
    (state: RootState) => state.products.totalPage
  );

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left" && currentPage > 1) {
      handleClick(currentPage - 1);
    } else if (direction === "right" && currentPage < totalPage) {
      handleClick(currentPage + 1);
    }
  };

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
