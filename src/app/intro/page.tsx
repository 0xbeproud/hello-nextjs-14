'use client';

import React from 'react';
import Gutter from '@/components/Gutter';

import Hape5984 from '@images/hape/Hape5984.png';
import Hape7472 from '@images/hape/Hape7472.png';
import Hape7946 from '@images/hape/Hape7946.png';

import {
  AboutReplaceSection,
  AboutReplaceSectionItem,
  Container,
  NavigationBar,
  NavigationTitle,
  Page,
  StyledImage,
  VideoSection,
} from './styled';
import ReactPlayer from 'react-player';

function Intro() {
  return (
    <Page>
      <NavigationBar>
        <NavigationTitle>SFORE</NavigationTitle>
      </NavigationBar>
      <Gutter space={24} />
      <Container>
        <VideoSection>
          <video autoPlay={true}>
            <source
              src="https://cdn.sanity.io/files/ivpmqllf/production/418ade0ae9193f0fbb3e3547d7dae869dd86301a.mp4"
              type="video/mp4"
            />
          </video>
          <Gutter space={24} />

          <ReactPlayer url="https://cdn.sanity.io/files/ivpmqllf/production/418ade0ae9193f0fbb3e3547d7dae869dd86301a.mp4" />
        </VideoSection>
        <Gutter space={24} />

        <AboutReplaceSection>
          <AboutReplaceSectionItem style={{ backgroundColor: 'red' }}>
            <StyledImage image={Hape5984} />
          </AboutReplaceSectionItem>

          <AboutReplaceSectionItem style={{ backgroundColor: 'blue' }}>
            <StyledImage image={Hape7472} />
          </AboutReplaceSectionItem>

          <AboutReplaceSectionItem style={{ backgroundColor: 'yellow' }}>
            <StyledImage image={Hape7946} />
          </AboutReplaceSectionItem>
        </AboutReplaceSection>
      </Container>
    </Page>
  );
}

export default Intro;
