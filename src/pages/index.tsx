import Head from 'next/head'
import React from 'react'
import Button from '../components/Button'
import Shelf from '../components/Shelf'
import Totals from '../components/Totals'
import { userCart } from '../constants/cart'

export const getStaticProps = async () => {
  const res = await fetch(userCart)
  const data = await res.json()

  return {
    props: { cart: data }
  }
}

export default function Cart({ cart }: any) {
  return (
    <>
      <Head>
        <title>Sacola | Loja</title>
      </Head>
      <Shelf {...cart} />
      <Totals {...cart} />
      <Button to="/pagamento">SEGUIR PARA O PAGAMENTO</Button>
    </>
  )
}
