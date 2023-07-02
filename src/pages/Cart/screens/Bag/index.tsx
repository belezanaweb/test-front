import React from 'react'
import MainContent from '../../../../components/MainContent'
import ProductsList from '../../../../components/ProductsList'
import { cartProducts, itemProps } from '../../../../queries/cartQueries'
import { productProps } from '../../../../components/ProductsList/Product'
import PaymentResume from '../../../../components/PaymentResume'
import useBagStore from '../../../../store/useBagStore'
import useNavigateStore from '../../../../store/useNavigateStore'

const Bag = ({ items, discount, shippingTotal, subTotal, total }: cartProducts) => {
  const addProductsToBag = useBagStore((state) => state.addProductsToBag)
  const navigate = useNavigateStore((state) => state.navigate)

  const normalizeData = (): productProps[] => {
    const productList: productProps[] = []
    items.forEach((item) => {
      const product = {
        image: item.product.imageObjects[0].thumbnail,
        name: item.product.name,
        price: item.product.priceSpecification.price,
        originalPrice: item.product.priceSpecification.maxPrice
      }
      productList.push(product)
    })

    return productList
  }

  const products = normalizeData()

  const handleClick = () => {
    addProductsToBag({ items, discount, shippingTotal, subTotal, total })
    navigate('Pagamento')
  }

  return (
    <>
      <MainContent>
        <ProductsList products={products} />
      </MainContent>
      <PaymentResume
        buttonLable="Seguir para o pagamento"
        onClick={handleClick}
        discount={discount}
        itemsQuantity={items.length}
        shippingTotal={shippingTotal}
        subTotal={subTotal}
        total={total}
      />
    </>
  )
}

export default Bag
