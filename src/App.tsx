import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Theme from './theme';

export default function App() {
  const client = new QueryClient();

  return (
    <Theme>
      <QueryClientProvider client={client}>
        <div></div>
      </QueryClientProvider>
    </Theme>
  );
};
