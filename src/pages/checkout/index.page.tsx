import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from '@tanstack/react-query'
import { useState } from 'react'
import { Checkout } from "../../features/Checkout"

export function Page(props: any) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        networkMode: 'offlineFirst',
        refetchInterval: false,
        refetchIntervalInBackground: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  }))
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={props.dehydratedState}>
        <Checkout />
      </Hydrate>
    </QueryClientProvider>
  )
}