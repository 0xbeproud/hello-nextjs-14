import React from 'react'
import styled from 'styled-components'
import Script from 'next/script'

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

function DeepLinkButton(props: Props) {
  const { name } = props
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
            appName: 'SFORE',
            urlScheme: 'sfore://',
            intentURI:
              'intent://sfore#Intent;scheme=sfore;package=com.rachelblue.sfore;end;',
            storeURL: 'itms-apps://itunes.apple.com/app/id362057947',
          })
        }}
      >
        {name}
      </Button>
    </>
  )
}

export default DeepLinkButton
