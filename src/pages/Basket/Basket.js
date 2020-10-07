import React from 'react'
import { useHistory } from 'react-router-dom'

import Product from '../../components/Product/Product'
import Total from '../../components/Total/Total'
import Button from '../../components/Button/Button'
import Box from '../../components/Box/Box'

function Basket({ data = {} }) {
  const history = useHistory()
  const products = data?.items?.map((item) => (
    <Product product={item.product} key={item.product.sku} />
  ))
  return (
    <>
      <Box title={'Produtos'}>{products}</Box>
      <Total
        subTotal={data.subTotal}
        shippingTotal={data.shippingTotal}
        discount={data.discount}
        total={data.total}
      />
      <Button handleClick={() => history.push('/pagamento')} text={'Seguir para o pagamento'} />
    </>
  )
}

export default Basket
