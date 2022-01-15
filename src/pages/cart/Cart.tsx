import React, { useEffect, useContext, useState } from 'react'

import RestClient from '../../api/RestClient'

import Button from '../../components/elements/button/Button'
import Layout from '../../components/layouts/checkout/Checkout'
import PurchaseProducts from '../../components/modules/purchaseProducts/PurchaseProducts'
import PurchaseSummary from '../../components/modules/purchaseSummary/PurchaseSummary'

import { PurchaseContext } from '../../contexts/PurchaseContext'

import { StyledCartPage } from './Cart.styled'

function CartPage() {
  const [loadingProducts, setLoadingProducts] = useState(true)

  const { setProducts, setSubTotal, setShipingTotal, setDiscount, setTotal } = useContext(
    PurchaseContext
  )

  useEffect(() => {
    RestClient.GET('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then(({ data }) => {
        setProducts(
          data.items.map((item: any) => ({
            name: item.product.name,
            thumbnail: item.product.imageObjects[0].thumbnail,
            price: item.product.priceSpecification.price
          }))
        )

        setSubTotal(data.subTotal)
        setShipingTotal(data.shippingTotal)
        setDiscount(data.discount)
        setTotal(data.total)
      })
      .finally(() => {
        setLoadingProducts(false)
      })
  }, [setProducts, setSubTotal, setShipingTotal, setDiscount, setTotal])

  return loadingProducts ? null : (
    <Layout title="Produtos">
      <StyledCartPage>
        <PurchaseProducts />
        <PurchaseSummary />
        <Button>Seguir para o pagamento</Button>
      </StyledCartPage>
    </Layout>
  )
}

export default CartPage
