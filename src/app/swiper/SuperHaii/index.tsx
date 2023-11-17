import React from 'react';
import HaiiImage from '@images/about/haai.jpg';
import { Content, Summary, Title, Wrapper } from './styled';
import { SlideContainer } from '../styled';
import Gutter from '@components/Gutter';

function SuperHaiiSlide() {
  return (
    <SlideContainer image={HaiiImage}>
      <Wrapper>
        <Content>
          <Title className="text-4xl md:text-6xl lg:text-8xl">Super:Haai</Title>
          <Gutter space={10} />
          <Summary className="text-base md:text-2xl lg:text-3xl">
            Artificial intelligence (AI) is a fundamental form of intelligence
            that mimics human intelligence <br />
            by creating and applying algorithms embedded in a dynamic computing
            environment. <br />
            In short, AI seeks to create computers that think and act like
            humans. <br />
          </Summary>
        </Content>
      </Wrapper>
    </SlideContainer>
  );
}

export default SuperHaiiSlide;
