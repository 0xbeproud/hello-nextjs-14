'use client';

import React from 'react';

import BeProudSlide from '@/app/about/BeProud';
import SuperHaiiSlide from '@/app/about/SuperHaii';
import SuperCycleSlide from '@/app/about/SuperCycle';
import SuperDesireSlide from '@/app/about/SuperDesire';
import { Mousewheel, Pagination } from 'swiper/modules';

import { StyledSwiperPage, StyledSwiperSlide } from './styled';

function About() {
  const userAgent =
    typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
  const isAndroid = Boolean(userAgent.match(/Android/i));
  const isIOS = Boolean(userAgent.match(/iPhone|iPad|iPod/i));
  const isOpera = Boolean(userAgent.match(/Opera Mini/i));
  const isWindows = Boolean(userAgent.match(/IEMobile/i));
  const isSSR = Boolean(userAgent.match(/SSR/i));
  const isMobile = Boolean(isAndroid || isIOS || isOpera || isWindows);
  const isDesktop = Boolean(!isMobile && !isSSR);

  return (
    <>
      {isDesktop ? (
        <div className="bg-emerald-400 text-sm">
          userAgent: {userAgent} <br />
          isAndroid: {isAndroid.toString()}
          <br />
          isIOS: {isIOS.toString()}
          <br />
          isOpera: {isOpera.toString()}
          <br />
          isWindows: {isWindows.toString()}
          <br />
          isSSR: {isSSR.toString()}
          <br />
          isMobile: {isMobile.toString()}
          <br />
          isDesktop: {isDesktop.toString()}
          <br />
        </div>
      ) : null}
      <StyledSwiperPage
        // modules={[Navigation, Pagination, Scrollbar, Mousewheel, Autoplay]}
        modules={[Pagination, Mousewheel]}
        direction="vertical"
        speed={700}
        spaceBetween={10}
        slidesPerView={1}
        // navigation={{
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // }}
        pagination={{
          clickable: true,
          el: '.pagination_bullet',
          type: 'bullets',
        }}
        // scrollbar={{draggable: true}}
        mousewheel
        // autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
        // }}
        // onSlideChange={(swiper: any) => console.log(swiper)}
        onSwiper={(swiper: any) => swiper.mousewheel.enable()}
        // autoHeight={true}
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
          <BeProudSlide />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <SuperHaiiSlide />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <SuperCycleSlide />
        </StyledSwiperSlide>
        <StyledSwiperSlide>
          <SuperDesireSlide />
        </StyledSwiperSlide>
      </StyledSwiperPage>
    </>
  );
}

export default About;
