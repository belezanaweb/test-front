import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './Router';
import Theme from './theme';

export default function App() {
  const client = new QueryClient();

  return (
    <Theme>
      <QueryClientProvider client={client}>
        <Router />
      </QueryClientProvider>
    </Theme>
  );
};
