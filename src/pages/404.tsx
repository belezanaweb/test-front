import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [router])

  return (
    <div>
      <h1>Ooops...</h1>
      <br />
      <h2>Pagina não encontrada :(
      </h2>
      <br />
      <p>Voltando para a página <Link href="/"><a>Checkout</a></Link> em 3 segundos...</p>
    </div>
  )
}

export default NotFound;