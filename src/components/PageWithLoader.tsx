import { ReactNode, Suspense } from 'react'
import Spinner from './Spinner'

export default function PageWithLoader({ renderPage }: { renderPage: () => ReactNode }) {
  return <Suspense fallback={<Spinner />}>{renderPage()}</Suspense>
}
