'use client';

import React from 'react';
import BeProudImage from '@images/about/pfp7946.png';
import Row from '@styles/styeld';
import Space from '@components/Space';
import Portal from '@components/Portal';
import useModal from '@hooks/useModal';
import Alert from '@components/Alert';
import AndroidDeepLink from '@/components/DeepLink/android';
import IosDeepLink from '@/components/DeepLink/Ios';
import { Content, Menu, MenuBar, Summary, Title, Wrapper } from './styled';
import { SlideContainer } from '../styled';

function BeProudSlide() {
  const { isOpen, open, close } = useModal();

  return (
    <SlideContainer image={BeProudImage}>
      <Wrapper className="flex flex-col flex-wrap">
        <MenuBar className="flex flex-row">
          <Menu className="flex-none">HOME</Menu>
          <Menu className="flex-none ml-auto">MENU2</Menu>
          <Menu className="flex-none ml-2">MENU3</Menu>
        </MenuBar>
        <Space size={100} />
        <Content className="flex flex-col flex-wrap">
          <Title className="text-4xl md:text-6xl lg:text-8xl">Be:Proud</Title>
          <Space size={20} />
          <Summary className="flex-1 text-base md:text-xl lg:text-2xl">
            Self-esteem is the belief that you are a valuable person worthy of
            love and capable of accomplishing something.
          </Summary>
        </Content>

        <Row className="flex-1 justify-end gap-2">
          <div onClick={open}>Modal Open</div>
          {isOpen && (
            <Portal>
              <Alert
                title="Alart"
                message="Want install"
                close={close}
                btnText="error"
              />
            </Portal>
          )}
          <IosDeepLink name="IOS" />
          <AndroidDeepLink name="Android" />
        </Row>
      </Wrapper>
    </SlideContainer>
  );
}

export default BeProudSlide;
