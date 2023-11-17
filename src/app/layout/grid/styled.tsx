'use client';

import './styled.css';
import { styled } from 'twin.macro';

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 100px 500px 100px;
  grid-template-areas:
    'header header'
    'side-bar main'
    'footer footer';
`;

export const Header = styled.div`
  background: darkseagreen;
  grid-area: header;
`;

export const SideBar = styled.div`
  background: khaki;
  grid-area: side-bar;
`;
export const Main = styled.div`
  background: yellowgreen;
  grid-area: main;
`;
export const Footer = styled.div`
  background: aquamarine;
  grid-area: footer;
`;
