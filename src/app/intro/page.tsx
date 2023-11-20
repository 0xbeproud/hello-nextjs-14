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
  VideoBox,
  VideoSection,
} from './styled';

function Intro() {
  return (
    <Page>
      <VideoSection>
        <VideoBox playsInline autoPlay muted loop controls>
          <source
            src="https://cdn.sanity.io/files/ivpmqllf/production/418ade0ae9193f0fbb3e3547d7dae869dd86301a.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </VideoBox>
      </VideoSection>
      <NavigationBar>
        <NavigationTitle>SFORE</NavigationTitle>
      </NavigationBar>
      <Gutter space={24} />
      <Container>
        <Gutter space={24} />
        <AboutReplaceSection>
          <AboutReplaceSectionItem>
            <StyledImage image={Hape5984} />
          </AboutReplaceSectionItem>

          <AboutReplaceSectionItem>
            <StyledImage image={Hape7472} />
          </AboutReplaceSectionItem>

          <AboutReplaceSectionItem>
            <StyledImage image={Hape7946} />
          </AboutReplaceSectionItem>
        </AboutReplaceSection>
      </Container>
    </Page>
  );
}

export default Intro;
