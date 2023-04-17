import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import { carouselData } from "./carouselData";
import { ReactComponent as LeftArrow } from "../../../assets/images/icon-swiper-left.svg";
import { ReactComponent as RightArrow } from "../../../assets/images/icon-swiper-right.svg";

function Carousel() {
  const [carouselIndex, setCarouselIndex] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      moveNextImg();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [carouselIndex]);

  // 화살표 버튼 이후 이미지
  const moveNextImg = () => {
    if (carouselIndex !== carouselData.length) {
      setCarouselIndex(carouselIndex + 1);
    } else {
      setCarouselIndex(1);
    }
  };
  // 화살표 버튼 이전 이미지
  const movePrevImg = () => {
    if (carouselIndex === 1) {
      setCarouselIndex(carouselData.length);
    } else {
      setCarouselIndex(carouselIndex - 1);
    }
  };
  // 닷 버튼 이동
  const moveDot = (index: number) => {
    setCarouselIndex(index);
  };
  return (
    <>
      <S.CarouselLayout>
        {carouselData.map((item, index) => {
          return (
            <Link to="#" key={item.id}>
              <S.ImgBox
                opacity={carouselIndex === index + 1 ? "active" : "none"}
              >
                <img
                  src={process.env.PUBLIC_URL + `/Imgs/image${index + 1}.jpg`}
                  alt={item.alt}
                />
              </S.ImgBox>
            </Link>
          );
        })}
        {/* 캐러셀 화살표 이동 버튼 */}
        <S.ArrowBtn type="button" direct="left" onClick={movePrevImg}>
          <LeftArrow stroke="white" />
        </S.ArrowBtn>
        <S.ArrowBtn type="button" direct="right" onClick={moveNextImg}>
          <RightArrow stroke="white" />
        </S.ArrowBtn>

        {/* 캐러셀 닷 버튼  */}
        <S.DotBox>
          {Array.from({ length: carouselData.length }).map((_, index) => {
            return (
              <S.DotBtn
                key={index}
                isActive={carouselIndex === index + 1 ? "active" : ""}
                onClick={() => moveDot(index + 1)}
              />
            );
          })}
        </S.DotBox>
      </S.CarouselLayout>
    </>
  );
}

export default Carousel;
