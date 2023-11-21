import React from 'react';
import useDetectPlatform from '@hooks/useDetectPlatform';

type Props = {};

function DownloadButton(props: Props) {
  const { isDesktop, isMobile, isIOS, isAndroid } = useDetectPlatform();
  return (
    <div>
      isDesktop: {isDesktop.toString()} <br />
      isMobile: {isMobile.toString()}
      <br />
      isIOS: {isIOS.toString()}
      <br />
      isAndroid: {isAndroid.toString()}
      <br />
    </div>
  );
}

export default DownloadButton;
