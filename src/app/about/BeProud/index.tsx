'use client';

import React from 'react';
import BeProudImage from '@images/about/pfp7946.png';
import Row from '@styles/styeld';
import Gutter from '@components/Space';
import Portal from '@components/Portal';
import useModal from '@hooks/useModal';
import Alert from '@components/Alert';
import AndroidDeepLink from '@/components/DeepLink/android';
import IosDeepLink from '@/components/DeepLink/Ios';
import { Menu, MenuBar, MenuItem } from './styled';
import {
  Content,
  Description,
  SlideContainer,
  Title,
  Wrapper,
} from '../styled';

function BeProudSlide() {
  const { isOpen, open, close } = useModal();

  return (
    <SlideContainer $image={BeProudImage}>
      <Wrapper>
        <MenuBar>
          <Menu>
            <MenuItem>HOME</MenuItem>
            <MenuItem className="ml-auto">MENU2</MenuItem>
            <MenuItem className="ml-2">MENU3</MenuItem>
          </Menu>
        </MenuBar>
        <Gutter size={20} />
        <Content>
          <Title className="text-4xl md:text-6xl lg:text-8xl">Be:Proud</Title>
          <Gutter size={10} />
          <Description className="text-base md:text-xl lg:text-2xl">
            Self-esteem is the belief that you are a valuable person worthy of
            love and capable of accomplishing something.
          </Description>
        </Content>
        <Gutter size={20} />
        <Row>
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
