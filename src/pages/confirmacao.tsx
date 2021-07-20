import React, { useEffect, useContext } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Shelf from '../components/Shelf'
import { userCart } from '../constants/cart'
import { BillingContext } from '../contexts/BillingContext';


export default function Cart({ cart }: any) {

    const router = useRouter()
    const { cardApproved } = useContext(BillingContext)

    useEffect(() => {
        console.log('cardApproved', cardApproved);

        if (!cardApproved) router.push('/404')
    }, [cardApproved])

    return cardApproved && (
        <>
            <Head>
                <title>Confirmação | Loja</title>
            </Head>
            <Shelf {...cart} />
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