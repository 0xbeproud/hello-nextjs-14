import React from 'react';
import useDetectPlatform from '@hooks/useDetectPlatform';
import { Wrapper } from './styled';

type Props = {};

function DownloadButton(props: Props) {
  const { isDesktop, isMobile, isIOS, isAndroid } = useDetectPlatform();

  const onClick = () => {
    window.daumtools.web2app({
      appName: 'SFORE', // application Name (ex. facebook, twitter, daum)
      urlScheme: 'sfore://', // iphone : custom scheme
      intentURI: `intent://Sfore#Intent;scheme=sfore;package=com.rachelblue.sfore;end;`, // android : intent URI
      storeURL: 'https://sfore.store/r', // app store URL
      willInvokeApp() {
        window.console.log('willInvokeApp');
        if (isDesktop) {
          window.open('https://sfore.store/r');
        }
      }, // function for logging
      onAppMissing() {
        window.console.log('onAppMissing');
        // if (isDesktop) {
        //   window.open('https://sfore.store/r');
        // }
        // window.open('itms-apps://itunes.apple.com/app/id362057947');
      }, // fallback function (default. move to appstore)
      onUnsupportedEnvironment() {},
    });
  };

  return <Wrapper onClick={onClick}>Download</Wrapper>;
}

export default DownloadButton;
