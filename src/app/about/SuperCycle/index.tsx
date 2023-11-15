import React from 'react'
import { SlideContainer } from '@/app/about/styled'
import SuperCycleImage from '@images/about/super-cycle.jpg'
import { Summary, Title, Wrapper } from './styled'

function SuperCycleSlide() {
  return (
    <SlideContainer image={SuperCycleImage}>
      <Wrapper className="flex flex-row flex-wrap justify-start">
        <Title className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl">
          Super:Cycle
        </Title>
        <Summary>
          Sustainable consumption is not only about the continued utilization of
          resources, <br />
          but also about achieving sustainable social development through
          ethical consumption. <br />
          It is about restoring the relationship between people and nature and
          people and people. <br />
        </Summary>
      </Wrapper>
    </SlideContainer>
  )
}

export default SuperCycleSlide
