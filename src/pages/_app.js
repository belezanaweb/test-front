import React from 'react';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  const queryClient = React.useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
