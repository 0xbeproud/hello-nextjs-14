'use client';

import './styled.css';
import React from 'react';
import { Footer, GridLayout, Header, Main, SideBar } from './styled';

function Grid() {
  return (
    <GridLayout>
      <Header>Header</Header>
      <SideBar>SideBar</SideBar>
      <Main>Main</Main>
      <Footer>Footer</Footer>
    </GridLayout>
  );
}

export default Grid;
