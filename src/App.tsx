import { Outlet } from 'react-router-dom';

import './config/ReactotronConfig';

import AppProvider from './providers/AppProvider';
import Header from './components/Header';
import MainContent from './components/MainContent';

import GlobalStyle from './styles/global';
import { AppContainer } from './styles/styles';

function App() {
  console.info(`==> 🌎  Você está no modo ${process.env.NODE_ENV}`);
  console.info(`==> 🌎  Você está no ambiente ${process.env.REACT_APP_ENVIRONMENT}`);

  return (
    <AppContainer>
      <AppProvider>
        <Header />
        <MainContent>
          <Outlet />
        </MainContent>
        <GlobalStyle />
      </AppProvider>
    </AppContainer>
  );
}

export default App;
