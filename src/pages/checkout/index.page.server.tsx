import fetch from "node-fetch"
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { bagContentQueryKey } from "../../features/Checkout/hooks/useBagContent"

const getBagContent = async () => {
  const response = await fetch('https://run.mocky.io/v3/d6e9a93f-9741-4494-b81e-637a8e9b8ddd')
  return response.json()
} 

export async function onBeforeRender() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(bagContentQueryKey, getBagContent)
  const pageProps = { dehydratedState: dehydrate(queryClient), };

  return {
    pageContext: {
      pageProps
    }
  };
}

export const passToClient = ["pageProps"]
