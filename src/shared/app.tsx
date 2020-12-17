import * as React from 'react';
import { Store } from 'redux';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';
import { LoadableComponent } from '@loadable/component';

import { routes } from './routes';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import globalTheme from './styles/theme';
import AppLayout from './layouts/app';

if (typeof Proxy === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('immer').enableES5();
}

function App() {
  const store = useStore();
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      App.getInitialProps(store, location.pathname, location.search);
    }
  }, [location]);

  return (
    <ThemeProvider theme={globalTheme}>
      <GlobalStyle />
      <AppLayout>{renderRoutes(routes)}</AppLayout>
    </ThemeProvider>
  );
}

App.getInitialProps = (store: Store, path: string, search: string): Promise<unknown>[] => {
  return matchRoutes(routes, path).map(({ route, match }) =>
    (route.component as LoadableComponent<any>).load().then(({ default: comp }: any) => {
      return comp.preload?.({ store, match, search }) || Promise.resolve();
    })
  );
};

export default App;
