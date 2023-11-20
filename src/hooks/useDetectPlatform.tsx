'use client';

import React from 'react';
import Bowser from 'bowser';

function useDetectPlatform() {
  const browser = Bowser.getParser(window.navigator.userAgent);
  const [platform] = React.useState(browser);

  const isDesktop = React.useMemo(
    () => platform.getPlatformType(true) === 'desktop',
    [platform],
  );

  const isMobile = React.useMemo(
    () => platform.getPlatformType(true) === 'mobile',
    [platform],
  );

  const isTablet = React.useMemo(
    () => platform.getPlatformType(true) === 'tablet',
    [platform],
  );

  const isAndroid = React.useMemo(
    () => (isMobile || isTablet) && platform.getOSName(true) === 'android',
    [isMobile, isTablet, platform],
  );

  const isIOS = React.useMemo(
    () => (isMobile || isTablet) && platform.getOSName(true) === 'ios',
    [isMobile, isTablet, platform],
  );

  return { isDesktop, isMobile, isTablet, isAndroid, isIOS };
}

export default useDetectPlatform;
