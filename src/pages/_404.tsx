import { useRouteError } from 'react-router-dom'

export default function NotFoundPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Desculpe, não encontramos o que você estava procurando.</p>
      <p>
        <i>{(error as any).statusText || (error as any).message}</i>
      </p>
    </div>
  )
}
