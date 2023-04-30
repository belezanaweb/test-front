import { ReactNode, Suspense } from 'react'

export default function PageWithLoader({ renderPage }: { renderPage: () => ReactNode }) {
  return <Suspense fallback={<h1>Carregando...</h1>}>{renderPage()}</Suspense>
}
