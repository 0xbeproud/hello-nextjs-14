import { Swiper, SwiperSlide } from 'swiper/react';
import { StaticImageData } from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import { css, styled } from 'twin.macro';

export const StyledSwiperPage = styled(Swiper)`
  width: 100%;
  height: 100vh;
`;
export const StyledSwiperSlide = styled(SwiperSlide)`
  //height: 100vh;
`;

export const SlideContainer = styled.div<{ image?: StaticImageData }>`
  ${props =>
    props.image
      ? css`
          background-image: url(${props.image.src});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        `
      : undefined});
`;

export const Wrapper = styled.div`
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: transparent;
    border: 1px solid pink;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    width: 40px;
    transition: width .5s;
    border-radius: 5px;
    background: pink;
    border: 1px solid transparent;
`;
