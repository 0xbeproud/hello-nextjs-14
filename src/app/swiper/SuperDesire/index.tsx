import React from 'react';
import {
  Content,
  Description,
  SlideContainer,
  Title,
  Wrapper,
} from '../styled';
import SuperDesireImage from '@images/about/super-desire.jpg';
import Gutter from '@components/Space';

function SuperDesireSlide() {
  return (
    <SlideContainer $image={SuperDesireImage}>
      <Wrapper>
        <Content>
          <Title className="text-4xl md:text-6xl lg:text-8xl">
            Super:Desire
          </Title>
          <Gutter size={20} />
          <Description>
            To desire is to be in a particular state of mind. <br />
            It is a state of mind familiar to everyone who has ever wanted to
            drink water <br />
            or desired to know what has happened to an old friend, <br />
            but its familiarity does not make it easy to give a theory of
            desire. <br />
          </Description>
        </Content>
      </Wrapper>
    </SlideContainer>
  );
}

export default SuperDesireSlide;
