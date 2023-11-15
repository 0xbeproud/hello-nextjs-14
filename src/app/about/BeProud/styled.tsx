import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  padding: 20px 20px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: start;
  align-content: start;

  width: 100%;
  height: 100vh;
  padding: 20px 20px;
`
export const Title = styled.h1`
  color: white;
  font-weight: bold;
`

export const Summary = styled.h1`
  color: white;
`

export const MenuBar = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 200px;
  padding: 20px 20px;
  background: white;
`
export const Menu = styled.div`
  background: black;
  color: white;
  padding: 3px 3px;
`
