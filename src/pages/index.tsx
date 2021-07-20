import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { userCart } from '../constants/cart'
import Button from '../components/Button'
import Shelf from '../components/Shelf'
import Totals from '../components/Totals'

export const getStaticProps = async () => {
  const res = await fetch(userCart)
  const data = await res.json()

  return {
    props: { cart: data }
  }
}

export default function Cart({ cart }: any) {
  const router = useRouter()

  function handleClick() {
    router.push('/pagamento')
  }

  return (
    <>
      <Head>
        <title>Sacola | Loja</title>
      </Head>
      <Shelf {...cart} />
      <Totals {...cart} />
      <Button handleClick={handleClick}>seguir para o pagamento</Button>
    </>
  )
}
