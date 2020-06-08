import React from 'react';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/integration/react';

import theme, { Theming } from './theme';

import Pages from './pages';

const persistor = getPersistor();

interface AppProps {
  children: React.ReactElement;
}

function App({ children }: AppProps) {
  return (
    <Theming theme={theme}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
      </PersistGate>
    </Theming>
  );
}

App.defaultProps = {
  children: <Pages />,
};

export default App;
