import React from 'react';
import useDetectPlatform from '@hooks/useDetectPlatform';
import { Wrapper } from './styled';

type Props = {};

function DownloadButton(props: Props) {
  const { isDesktop, isMobile, isIOS, isAndroid } = useDetectPlatform();

  const onClick = () => {
    if (isDesktop) {
      alert('Desktop');
    } else {
      if (isIOS) {
        alert('IOS');
      } else if (isAndroid) {
        alert('Android');
      } else {
        alert('Unknown');
      }
    }
  };

  return <Wrapper onClick={onClick}>Download</Wrapper>;
}

export default DownloadButton;
