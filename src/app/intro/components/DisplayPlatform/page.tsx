import React from 'react';
import useDetectPlatform from '@hooks/useDetectPlatform';

function DisplayPlatform() {
  const { isDesktop, isMobile, isIOS, isAndroid } = useDetectPlatform();
  return (
    <div style={{ color: 'black', fontWeight: 'bold', fontSize: 14, flex: 1 }}>
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

export default DisplayPlatform;
