import React from 'react';
import BeProudImage from '@images/about/pfp7946.png';
import Row from '@styles/styeld';
import Space from '@components/Space';
import DeepLink from '@components/DeepLink';
import Confirm from '@components/Confirm';
import Portal from '@components/Portal';
import useModal from '@hooks/useModal';
import { Content, Menu, MenuBar, Summary, Title, Wrapper } from './styled';
import { SlideContainer } from '../styled';

function BeProudSlide() {
  const { isOpen, open, close } = useModal();
  const confirm = () => {
    console.log('confirm clicked');
    close();
  };

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
        <div onClick={open}>Open</div>
        {isOpen && (
          <Portal>
            <Confirm
              title="Alart"
              message="Want install"
              close={close}
              confirm={confirm}
            />
          </Portal>
        )}
        <Row className="flex-1 justify-end gap-2">
          <DeepLink name="Android" />
          <DeepLink name="IOS" />
        </Row>
      </Wrapper>
    </SlideContainer>
  );
}

export default BeProudSlide;
