import React from 'react'

import styled from 'styled-components'
import Script from "next/script";

const Button = styled.button`
  font-weight: bold;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  border: 1px solid white;
  border-radius: 10px;
  padding: 20px 20px;
`
type Props = {
    name: string
}

function Index(props: Props) {
    const {name} = props
    return (
        <>
            <Script
                src="../scripts/web2app-standalone-1.1.1.js"
                type="text/javascript"
                strategy="lazyOnload"
            />
            <Button
                onClick={() => {
                    // @ts-ignore
                    daumtools.web2app({
                        appName: 'SFORE', // application Name (ex. facebook, twitter, daum)
                        urlScheme: 'sfore://', // iphone : custom scheme
                        intentURI: `intent://Sfore#Intent;scheme=sfore;package=com.rachelblue.sfore;end;`, // android : intent URI
                        storeURL: "itms-apps://itunes.apple.com/app/id362057947", // app store URL
                        willInvokeApp: function () {
                        }, // function for logging
                        onAppMissing: function () {
                        },	// fallback function (default. move to appstore)
                        onUnsupportedEnvironment: function () {
                        }
                    })
                }}
            >
                {name}
            </Button>
        </>
    )
}

export default Index
