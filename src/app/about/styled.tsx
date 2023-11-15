import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import {StaticImageData} from "next/image";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

export const StyledSwiperPage = styled(Swiper)`
    width: 100%;
    height: 100vh;
`
export const StyledSwiperSlide = styled(SwiperSlide)`
  //height: 100vh;
`

export const SlideContainer = styled.div<{ bgImage?: StaticImageData }>`
  ${(props) => props.bgImage ? css`background-image: url(${props.bgImage.src}); background-size: cover; background-repeat: no-repeat` : undefined});
`

