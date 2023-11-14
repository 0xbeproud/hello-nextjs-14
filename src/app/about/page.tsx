'use client'

import React from "react";

import {StyledSwiperPage, StyledSwiperSlide} from "./styled";
import BeProud from "@/app/about/BeProud";
import SuperHaii from "@/app/about/SuperHaii";
import SuperCycle from "@/app/about/SuperCycle";
import SuperDesire from "@/app/about/SuperDesire";
import {Autoplay, Mousewheel, Navigation, Pagination, Scrollbar} from "swiper/modules";


const About = () => {
    return (
        <div className="swiper-container">
            <StyledSwiperPage
                // modules={[Navigation, Pagination, Scrollbar, Mousewheel, Autoplay]}
                modules={[Pagination, Mousewheel]}
                direction={"vertical"}
                speed={500}
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
                    <BeProud/>
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <SuperHaii/>
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <SuperCycle/>
                </StyledSwiperSlide>
                <StyledSwiperSlide>
                    <SuperDesire/>
                </StyledSwiperSlide>
            </StyledSwiperPage>
        </div>
    )
}

export default About;