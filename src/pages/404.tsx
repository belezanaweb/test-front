import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NotFoundLayout from '../layouts/NotFoundLayout'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [router])

  return (
    <NotFoundLayout >      
      <h1>Ooops...</h1>
      <h2>Pagina não encontrada :(</h2>
      <p>Voltando para a página <Link href="/"><a>Checkout</a></Link> em 3 segundos...</p>
    </NotFoundLayout>
  )
}
 
export default NotFound;