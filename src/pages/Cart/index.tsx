import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';

import { Container, MainContent } from './styles';

export default function Cart() {
  return (
    <Container>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
    </Container>
  );
}
