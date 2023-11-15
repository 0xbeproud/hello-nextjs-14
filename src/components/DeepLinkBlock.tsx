import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  font-weight: bold;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  border: 1px solid white;
  border-radius: 20px;
  padding: 20px 20px;
`

function DeepLinkBlock() {
  return <Button>카카오</Button>
}

export default DeepLinkBlock
