import React from 'react'
import DeepLinkButton from '@components/DeepLinkButton'
import BeProudImage from '@images/about/pfp7946.png'
import Space from '@components/Space'
import Row from '@styles/styeld'
import { Content, MenuBar, Menu, Summary, Title, Wrapper } from './styled'
import { SlideContainer } from '../styled'

function BeProudSlide() {
  return (
    <SlideContainer image={BeProudImage}>
      <Wrapper className="flex flex-col flex-wrap">
        <MenuBar className="flex flex-row">
          <Menu className="flex-none">HOME</Menu>
          <Menu className="flex-none ml-auto">MENU2</Menu>
          <Menu className="flex-none ml-2">MENU3</Menu>
        </MenuBar>
        <Space space={20} />
        <Content className="flex flex-col">
          <Title className="text-4xl md:text-6xl lg:text-8xl">Be:Proud</Title>
          <Summary className="flex-1 text-base md:text-2xl lg:text-3xl">
            Self-esteem is the belief that you are a valuable person worthy of
            love and capable of accomplishing something.
          </Summary>
        </Content>
        <Row>
          <DeepLinkButton name="Android" />
          <DeepLinkButton name="IOS" />
        </Row>
      </Wrapper>
    </SlideContainer>
  )
}

export default BeProudSlide
