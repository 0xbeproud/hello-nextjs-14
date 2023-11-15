import React from "react"
import Script from "next/script"
import styled from "styled-components"

function Web2AppButton() {
  return (
    <>
      <Script src="@/scripts/web2app.js" defer strategy="lazyOnload" />
      {/* <Button */}
      {/*  onClick={() => */}
      {/*    sfore.web2app({ */}
      {/*      urlScheme: urlScheme4, */}
      {/*      intentURI: intentURI4, */}
      {/*      storeURL: appStoreURL4, */}
      {/*      universalLink: universalLink4, */}
      {/*      appName: "카카오선물하기", */}
      {/*    }) */}
      {/*  } */}
      {/* /> */}
    </>
  )
}

export const Button = styled.button`
  font-weight: bold;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  border: 1px solid white;
  border-radius: 20px;
  padding: 20px 20px;
`

export default Web2AppButton
