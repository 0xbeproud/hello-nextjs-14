import React from 'react';
import {
  ConfirmBtn,
  Content,
  Message,
  Overlay,
  Title,
  Wrapper,
} from './styled';

type Props = {
  title: string;
  message: string;
  btnText: string;
  close: () => void;
};

function Alert(props: Props) {
  const { title, message, btnText, close } = props;
  return (
    <Wrapper>
      <Overlay onClick={close} />
      <Content>
        <Title>{title}</Title>
        <Message>{message}</Message>
        <ConfirmBtn onClick={close}>{btnText}</ConfirmBtn>
      </Content>
    </Wrapper>
  );
}

export default Alert;
