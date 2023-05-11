import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BagContextProvider from './context/BagContext';
import Theme from './theme';
import Router from './Router';

export default function App() {
  const client = new QueryClient();

  return (
    <Theme>
      <BagContextProvider>
        <QueryClientProvider client={client}>
          <Router />
        </QueryClientProvider>
      </BagContextProvider>
    </Theme>
  );
};
