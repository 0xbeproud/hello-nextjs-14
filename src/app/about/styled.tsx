import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import {StaticImageData} from "next/image";


export const Wrapper = styled.div`
`

export const StyledSwiperPage = styled(Swiper)`
    width: 100%;
    height: 100vh;
`
export const StyledSwiperSlide = styled(SwiperSlide)`
  //height: 100vh;
`

export const SlideContainer = styled.div<{ image?: StaticImageData }>`
  ${(props) => props.image ? css`background-image: url(${props.image.src}); background-size: cover; background-repeat: no-repeat` : undefined});
`

