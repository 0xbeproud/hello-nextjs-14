import React from 'react';
import { Button } from '../styled';

type Props = {
  name: string;
};

function IosDeepLink(props: Props) {
  const { name } = props;
  return (
    <Button
      onClick={() => {
        window.daumtools.web2app({
          appName: 'SFORE', // application Name (ex. facebook, twitter, daum)
          urlScheme: 'sfore://', // iphone : custom scheme
          intentURI: `intent://Sfore#Intent;scheme=sfore;package=com.rachelblue.sfore;end;`, // android : intent URI
          storeURL: 'itms-apps://itunes.apple.com/app/id362057947', // app store URL
          willInvokeApp() {
            console.log('willInvokeApp');
          }, // function for logging
          onAppMissing() {
            window.open('itms-apps://itunes.apple.com/app/id362057947');
          }, // fallback function (default. move to appstore)
          onUnsupportedEnvironment() {
            window.open('https://apps.apple.com/us/app/kakaotalk/id362057947');
          },
        });
      }}
    >
      {name}
    </Button>
  );
}

export default IosDeepLink;
