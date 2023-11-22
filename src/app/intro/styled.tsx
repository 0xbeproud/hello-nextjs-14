import tw, { css, styled } from 'twin.macro';
import { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export const Page = styled.div`
  ${tw`flex flex-col items-center`}

  background: black;
`;

export const NavigationBar = styled.div`
  ${tw`flex flex-row items-center`}

  padding: 0 20px;
  width: 100%;
  height: 100px;
  background: white;

  position: fixed; // viewport 기준
  top: 0;
  left: 0;
  opacity: 0.6; // logan: 왜 title도 opacity가 적용되는지?
  z-index: 3;
`;

export const NavigationTitle = styled.div`
  color: black;
  font-weight: 900;
  font-size: 80px;
`;

export const Container = styled.div`
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  border-right: 10px solid white;
  border-left: 10px solid white;
`;

export const VideoBox = styled.video`
  position: fixed; // 부모(조상) 요소를 기준으로 배치
  top: 0;
  left: 0;
  object-fit: contain;
  width: 100%;
  height: 100%;

  z-index: 100;

  // dimmed
  //&:after {
  //  content: '';
  //  position: relative;
  //  top: 0;
  //  right: 0;
  //  bottom: 0;
  //  left: 0;
  //  background: #000;
  //  opacity: 0.5;
  //  filter: alpha(opacity=80);
  //}
`;

export const HapeSlider = styled.div`
  width: 100px;
  height: 100px;
`;

export const AboutReplaceSectionItem = styled.div``;

export const StyledImage = styled.div<{ image?: StaticImageData }>`
  ${tw`sm:w-[160px] sm:h-[160px]`}
  ${props =>
    props.image
      ? css`
          background-image: url(${props.image.src});
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        `
      : undefined});

  width: 80px;
  height: 80px;
`;

export const StyledSwiperPage = styled(Swiper)`
  position: fixed;
  top: 120px;
  left: 0;

  width: 100%;
  z-index: 10;
`;
export const StyledSwiperSlide = styled(SwiperSlide)``;

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

  height: 200px;
  width: 200px;
`;

export const SideBar = styled.div`
  ${tw`flex sm:flex-col sm:justify-start sm:items-start`}
  ${tw`sm:w-[200px] sm:h-full`}

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  width: 100%;
  height: 100px;
  background: white;
  padding: 0 20px;

  position: fixed; // viewport 기준
  top: 0;
  right: 0;
  //opacity: 0.9; // logan: 왜 title도 opacity가 적용되는지?
  z-index: 3;
`;

export const SideBarTitle = styled.div`
  color: black;
  font-weight: 900;
  font-size: 30px;
`;
