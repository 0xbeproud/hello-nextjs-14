'use client'

import React from "react";
import {A11y, Mousewheel, Navigation, Pagination, Scrollbar} from "swiper/modules";
import { StyledSwiperPage, StyledSwiperSlide } from "./styled";
import BeProud from "@/app/about/BeProud";

const About = () =>{
    return <StyledSwiperPage
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
        direction={"vertical"}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        mousewheel={true}
        pagination={{
            clickable: true,
        }}
        scrollbar={{draggable: true}}
        onSlideChange={(swiper: any) => console.log(swiper)}
        onSwiper={(swiper: any) => swiper.mousewheel.enable()}
    >
        <StyledSwiperSlide>
            <BeProud/>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
            <div>hello2</div>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
            <div>hello3</div>
        </StyledSwiperSlide>
        <StyledSwiperSlide>
            <div>hello4</div>
        </StyledSwiperSlide>
    </StyledSwiperPage>
}

export default About;