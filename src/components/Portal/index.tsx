import React from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
};

function Portal(props: Props) {
  const { children } = props;
  const node = document.getElementById('portal') as HTMLElement;
  return createPortal(children, node);
}

export default Portal;
