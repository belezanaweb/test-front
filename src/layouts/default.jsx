import React from 'react';

import { connect } from 'react-redux';
import Loading from 'components/Loading';
import Alerta from 'components/Alerta';
import Header from 'components/Header';

const Layout = Content => {
  const LayoutConnected = () => (
    <>
      <Alerta />
      <Loading />
      <Header />
      <Content />
    </>
  );
  return connect()(LayoutConnected);
};

export default Layout;
