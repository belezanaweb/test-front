import React, { useContext, useMemo } from 'react'
import { CartContext } from '../../components/Context/Context'
import Card from '../../components/Card/Card'
import HeaderText from '../../components/HeaderText/HeaderText'
import { currencyFormatter } from '../../utils'
import CartItem from '../../components/CartItem/CartItem'

const ProductList = (props) => {
  const cartContext = useContext(CartContext)
  const { listType } = props
  const renderProductList = useMemo(() => {
    if (Object.keys(cartContext.cartProductsData).length) {
      return cartContext.cartProductsData.items.map((item, index) => {
        return (
          <CartItem
            name={item.product.name}
            imageSrc={item.product.imageObjects[0].small}
            price={
              listType === 'cartScreen'
                ? currencyFormatter.format(item.product.priceSpecification.price)
                : ''
            }
            key={`${item.product.name}${index}`}
          />
        )
      })
    } else {
      return (
        <div>
          <p>O carrinho está vazio.</p>
        </div>
      )
    }
  }, [cartContext, listType])

  return (
    <>
      <HeaderText>Produtos</HeaderText>
      <Card>{renderProductList}</Card>
    </>
  )
}

export default ProductList
