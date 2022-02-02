import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Common/Navbar'
import { RequestProvider, useRequestContext } from '../../context/useRequestContext'
import CardProducts from '../../components/Common/CardProducts'
import CardSummary from '../../components/Common/CardSummary'
import Button from '../../components/Common/Button'

export default function Cart() {
  const order = useRequestContext()
  console.log(order)

  const products = [
    {
      img:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      title: 'LOréal Professionnel Expert Absolut Repair Cortex Lipidium',
      sku: '35200',
      price: 225.9
    },

    {
      img:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      title: 'LOréal Professionnel Expert Absolut Repair Cortex Lipidium',
      sku: '35200',
      price: 225.9
    },

    {
      img:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      title: 'LOréal Professionnel Expert Absolut Repair Cortex Lipidium',
      sku: '35200',
      price: 225.9
    }
  ]

  const orders = { price: 225.9, shipping: 0, discount: 2, total: 225.9 }

  return (
    <main>
      <Navbar />
      <div style={{ display: 'grid', gap: '20px' }}>
        <CardProducts title="Produtos" products={products} />
        <CardSummary
          price={orders.price}
          shipping={orders.shipping}
          discount={orders.discount}
          total={orders.total}
        />
        <Button text="Seguir para o pagamento" />
      </div>
    </main>
  )
}

Cart.ContextProvider = ({ children }) => <RequestProvider>{children}</RequestProvider>
