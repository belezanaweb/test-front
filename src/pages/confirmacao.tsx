import React, { useEffect, useContext } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { userCart } from '../constants/cart'
import { BillingContext } from '../contexts/BillingContext'
import Shelf from '../components/Shelf'
import Totals from '../components/Totals'
import PaymentStatus from '../components/PaymentStatus'
import PaymentData from '../components/PaymentData'

export default function Cart({ cart }: any) {

    const router = useRouter()
    const { cardApproved } = useContext(BillingContext)

    useEffect(() => {
        if (!cardApproved) router.push('/404')
    }, [cardApproved])

    return cardApproved && (
        <>
            <Head>
                <title>Confirmação | Loja</title>
            </Head>
            <PaymentStatus />
            <PaymentData />
            <Shelf {...cart} />
            <Totals {...cart} />
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