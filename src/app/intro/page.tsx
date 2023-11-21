'use client';

import React from 'react';
import { Autoplay, EffectFade, Mousewheel, Pagination } from 'swiper/modules';
import Hape546 from '@images/hape/hape546.png';
import Hape548 from '@images/hape/hape548.png';
import Hape3829 from '@images/hape/hape3829.png';
import Hape4007 from '@images/hape/hape4007.png';
import Hape4308 from '@images/hape/hape4308.png';
import Hape5390 from '@images/hape/hape5390.png';
import Hape5984 from '@images/hape/hape5984.png';
import Hape6957 from '@images/hape/hape6957.png';
import Hape7472 from '@images/hape/hape7472.png';
import Hape7946 from '@images/hape/hape7946.png';
import Hape1629 from '@images/hape/hape1629.png';
import Hape3887 from '@images/hape/hape3887.png';
import Hape7388 from '@images/hape/hape7388.png';
import DownloadButton from '@/app/intro/components/DownloadButton/page';
import Script from 'next/script';
import {
  Container,
  NavigationTitle,
  Page,
  SideBar,
  StyledImage,
  StyledSwiperPage,
  StyledSwiperSlide,
  VideoBox,
} from './styled';

function Intro() {
  return (
    <>
      <Script
        src="../scripts/web2app-standalone-1.1.1.js"
        type="text/javascript"
        strategy="lazyOnload"
      />
      <Page>
        {/* <NavigationBar> */}
        {/*  <DisplayPlatform /> */}
        {/*  <DownloadButton /> */}
        {/*  <NavigationTitle>I'''''''Iape</NavigationTitle> */}
        {/* </NavigationBar> */}
        <SideBar>
          <NavigationTitle>I'''''''Iape</NavigationTitle>
          <DownloadButton />
        </SideBar>
        <VideoBox playsInline autoPlay muted loop controls>
          <source
            src="https://cdn.sanity.io/files/ivpmqllf/production/418ade0ae9193f0fbb3e3547d7dae869dd86301a.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </VideoBox>
        <StyledSwiperPage
          modules={[Pagination, Mousewheel, Autoplay, EffectFade]}
          direction="horizontal"
          speed={700}
          slidesPerView={10}
          spaceBetween={30}
          centeredSlides
          loop
          // effect={'fade'}
          // scrollbar={{ draggable: true }}
          // mousewheel
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          // onSlideChange={(swiper: any) => console.log(swiper)}
          onSwiper={(swiper: any) => swiper.mousewheel.enable()}
          // breakpoints={{
          //   // when window width is >= 640px
          //   640: {
          //     width: 640,
          //     slidesPerView: 4,
          //   },
          //   1024: {
          //     width: 1024,
          //     slidesPerView: 8,
          //   },
          // }}
        >
          <StyledSwiperSlide>
            <StyledImage image={Hape546} />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <StyledImage image={Hape548} />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <StyledImage image={Hape3829} />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <StyledImage image={Hape4007} />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <StyledImage image={Hape4308} />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <StyledImage image={Hape5390} />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <StyledImage image={Hape5984} />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <StyledImage image={Hape6957} />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <StyledImage image={Hape7472} />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <StyledImage image={Hape7946} />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <StyledImage image={Hape1629} />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <StyledImage image={Hape3887} />
          </StyledSwiperSlide>
          <StyledSwiperSlide>
            <StyledImage image={Hape7388} />
          </StyledSwiperSlide>
        </StyledSwiperPage>
        <Container />
      </Page>
    </>
  );
}

export default Intro;
