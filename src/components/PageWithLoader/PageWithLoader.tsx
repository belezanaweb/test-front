import { ReactNode, Suspense } from 'react'
import Spinner from '../Spinner'

const PageLoader = () => {
  return (
    <div className="flex justify-center items-center h-96">
      <Spinner />
    </div>
  )
}

export default function PageWithLoader({ renderPage }: { renderPage: () => ReactNode }) {
  return <Suspense fallback={<PageLoader />}>{renderPage()}</Suspense>
}
