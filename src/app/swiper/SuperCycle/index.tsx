import React from 'react';
import {
  Content,
  Description,
  SlideContainer,
  Title,
  Wrapper,
} from '../styled';
import SuperCycleImage from '@images/about/super-cycle.jpg';
import Gutter from '@components/Space';

function SuperCycleSlide() {
  return (
    <SlideContainer $image={SuperCycleImage}>
      <Wrapper>
        <Content>
          <Title className="text-4xl md:text-6xl lg:text-8xl">
            Super:Cycle
          </Title>
          <Gutter size={20} />
          <Description>
            Sustainable consumption is not only about the continued utilization
            of resources, <br />
            but also about achieving sustainable social development through
            ethical consumption. <br />
            It is about restoring the relationship between people and nature and
            people and people. <br />
          </Description>
        </Content>
      </Wrapper>
    </SlideContainer>
  );
}

export default SuperCycleSlide;
