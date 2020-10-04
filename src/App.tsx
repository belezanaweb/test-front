import React from 'react';

import Routes from 'routes/index';
import GlobalStyles from 'styles/global';

import AppProvider from 'context';

const App = () => (
  <>
    <GlobalStyles />
    <AppProvider>
      <Routes />
    </AppProvider>
  </>
);

export default App;
