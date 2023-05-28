import './App.css'

import { QueryClient, QueryClientProvider } from 'react-query'

import Bag from './pages/Bag'

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, staleTime: 5 * 60 * 1000 } }
})
const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Bag />
      </QueryClientProvider>
    </>
  )
}

export default App
