import Head from 'next/head'
import React from 'react'
import Button from '../components/Button'
import CardForm from '../components/CardForm'
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
                <title>Pagamento | Loja</title>
            </Head>
            <CardForm />
            <Totals {...cart} />
            <Button to="/cofirmacao">finalizar o pedido</Button>
        </>
    )
}
