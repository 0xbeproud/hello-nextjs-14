import React from 'react';
import { Footer, GridLayout, Header, Main, SideBar } from './styled';

function Grid() {
  return (
    <div>
      <GridLayout>
        <Header>Header</Header>
        <SideBar>SideBar</SideBar>
        <Main>Main</Main>
        <Footer>Footer</Footer>
      </GridLayout>
    </div>
  );
}

export default Grid;
