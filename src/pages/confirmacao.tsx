import Head from 'next/head'
import React from 'react'
import Shelf from '../components/Shelf'
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
                <title>Confirmação | Loja</title>
            </Head>
            <Shelf {...cart} />
        </>
    )
}
