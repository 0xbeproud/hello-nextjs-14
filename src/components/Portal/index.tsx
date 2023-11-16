'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
};

function Portal(props: Props) {
  const { children } = props;
  const [element, setElement] = React.useState<HTMLElement | null>(null);
  useEffect(() => {
    setElement(document.getElementById('portal'));
  }, []);

  if (!element) return null;

  return createPortal(children, element);
}

export default Portal;
