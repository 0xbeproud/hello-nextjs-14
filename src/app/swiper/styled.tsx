import { Swiper, SwiperSlide } from 'swiper/react';
import { StaticImageData } from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import tw, { css, styled } from 'twin.macro';

export const StyledSwiperPage = styled(Swiper)`
  width: 100%;
  height: 100vh;

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: transparent;
    border: 1px solid white;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    height: 40px;
    transition: width .5s;
    border-radius: 5px;
    background: white;
    border: 1px solid transparent; 
`;
export const StyledSwiperSlide = styled(SwiperSlide)`
  //height: 100vh;
`;

export const SlideContainer = styled.div<{ $image?: StaticImageData }>`
  width: 100%;
  height: 100vh;
  padding: 40px 40px;

  ${props =>
    props.$image
      ? css`
          background-image: url(${props.$image.src});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        `
      : undefined});
`;

export const Wrapper = styled.div`
  ${tw`flex flex-col`}
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  color: white;
  font-weight: bold;
`;

export const Description = styled.h1`
  color: white;
`;
