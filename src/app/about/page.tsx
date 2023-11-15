'use client'

import React from "react";

import {StyledSwiperPage, StyledSwiperSlide} from "./styled";
import BeProudSlide from "@/app/about/BeProud";
import SuperHaiiSlide from "@/app/about/SuperHaii";
import SuperCycleSlide from "@/app/about/SuperCycle";
import SuperDesireSlide from "@/app/about/SuperDesire";
import {Autoplay, Mousewheel, Navigation, Pagination, Scrollbar} from "swiper/modules";


const About = () => {
    return (
            <StyledSwiperPage
                // modules={[Navigation, Pagination, Scrollbar, Mousewheel, Autoplay]}
                modules={[Pagination, Mousewheel]}
                direction={"vertical"}
                speed={700}
                spaceBetween={10}
                slidesPerView={1}
                // navigation={{
                //     nextEl: ".swiper-button-next",
                //     prevEl: ".swiper-button-prev",
                // }}
                pagination={{
                    clickable: true,
                    el: ".pagination_bullet",
                    type: 'bullets',
                }}
                // scrollbar={{draggable: true}}
                mousewheel={true}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
                // }}
                onSlideChange={(swiper: any) => console.log(swiper)}
                onSwiper={(swiper: any) => swiper.mousewheel.enable()}
                autoHeight={true}
                // breakpoints={{
                //     // when window width is >= 640px
                //     640: {
                //         width: 640,
                //         slidesPerView: 1,
                //     },
                //     1024: {
                //         width: 1024,
                //         slidesPerView: 1,
                //     },
                // }}
            >
                <StyledSwiperSlide>
                    <BeProudSlide/>
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <SuperHaiiSlide/>
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <SuperCycleSlide/>
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <SuperDesireSlide/>
                </StyledSwiperSlide>
            </StyledSwiperPage>
    )
}

export default About;