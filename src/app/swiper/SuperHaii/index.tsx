import React from 'react';
import HaiiImage from '@images/about/haai.jpg';
import Gutter from '@components/Space';
import {
  Content,
  Description,
  SlideContainer,
  Title,
  Wrapper,
} from '../styled';

function SuperHaiiSlide() {
  return (
    <SlideContainer $image={HaiiImage}>
      <Wrapper>
        <Content>
          <Title className="text-4xl md:text-6xl lg:text-8xl">Super:Haai</Title>
          <Gutter size={20} />
          <Description>
            Artificial intelligence (AI) is a fundamental form of intelligence
            that mimics human intelligence <br />
            by creating and applying algorithms embedded in a dynamic computing
            environment. <br />
            In short, AI seeks to create computers that think and act like
            humans. <br />
          </Description>
        </Content>
      </Wrapper>
    </SlideContainer>
  );
}

export default SuperHaiiSlide;
