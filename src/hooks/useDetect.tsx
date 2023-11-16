import React from 'react';

function useDetect() {
  const [userAgent, setUserAgent] = React.useState('');
  const [isAndroid, setIsAndroid] = React.useState(false);
  const [isIOS, setIsIOS] = React.useState(false);
  const [isOpera, setIsOpera] = React.useState(false);
  const [isWindows, setIsWindows] = React.useState(false);
  const [isSSR, setIsSSR] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const userAgentString =
      typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

    setUserAgent(userAgentString);
    setIsAndroid(Boolean(userAgentString.match(/Android/i)));
    setIsIOS(Boolean(userAgentString.match(/iPhone|iPad|iPod/i)));
    setIsOpera(Boolean(userAgentString.match(/Opera Mini/i)));
    setIsWindows(Boolean(userAgentString.match(/IEMobile/i)));
    setIsSSR(Boolean(userAgentString.match(/SSR/i)));
    setIsMobile(Boolean(isAndroid || isIOS || isOpera || isWindows));
    setIsDesktop(Boolean(!isMobile && !isSSR));
  }, [isAndroid, isIOS, isOpera, isWindows, isSSR, isMobile, isDesktop]);

  return {
    userAgent,
    isAndroid,
    isIOS,
    isOpera,
    isWindows,
    isSSR,
    isMobile,
    isDesktop,
  };
}

export default useDetect;
