import React, { useContext } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { userCart } from '../constants/cart'
import { BillingContext } from '../contexts/BillingContext';
import Button from '../components/Button'
import CardForm from '../components/CardForm'
import Totals from '../components/Totals'

export default function Payment({ cart }: any) {

    const router = useRouter()
    const { cardApproved } = useContext(BillingContext)

    function handleClick() {
        if (!cardApproved) return
        router.push('/confirmacao')
    }

    return (
        <>
            <Head>
                <title>Pagamento | Loja</title>
            </Head>
            <CardForm />
            <Totals {...cart} />
            <Button handleClick={handleClick} allow={cardApproved}>finalizar o pedido</Button>
        </>
    )
}


export const getStaticProps = async () => {
    const res = await fetch(userCart)
    const data = await res.json()

    return {
        props: { cart: data }
    }
}