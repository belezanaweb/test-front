import React from 'react'
import PurchaseResume from '../../../../components/PurchaseResume'
import MainContent from '../../../../components/MainContent'
import { productProps } from '../../../../components/ProductsList/Product'
import ProductsList from '../../../../components/ProductsList'
import PaymentResume from '../../../../components/PaymentResume'
import useBagStore from '../../../../store/useBagStore'
import useFormStore from '../../../../store/useFormStore'
import useNavigateStore from '../../../../store/useNavigateStore'
import { itemProps } from '../../../../queries/cartQueries'

const Confirmation = () => {
  const bag = useBagStore((state) => state.bag)
  const clearBag = useBagStore((state) => state.clearBag)

  const form = useFormStore((state) => state.form)
  const clearForm = useFormStore((state) => state.clearForm)

  const navigate = useNavigateStore((state) => state.navigate)

  const normalizeData = (products: itemProps[]): productProps[] => {
    const productList: productProps[] = []
    products.forEach((item) => {
      const product = {
        image: item.product.imageObjects[0].thumbnail,
        name: item.product.name
      }
      productList.push(product)
    })

    return productList
  }

  const products = normalizeData(bag.items)

  const handleBackToBeginning = () => {
    clearBag()
    clearForm()
    navigate('Sacola')
  }

  const purchaseResumeHeight = 'auto'
  const productListHeight = '100%'

  return (
    <>
      <MainContent height={productListHeight}>
        <PurchaseResume
          cardNumber={form.cardNumber}
          cardOwner={form.cardOwner}
          expirationDate={form.expirationDate}
        />
      </MainContent>
      <MainContent title="Produtos" height={purchaseResumeHeight}>
        <ProductsList products={products} />
      </MainContent>
      <PaymentResume
        buttonLable="Voltar ao inicio do protótipo"
        buttonColor="black"
        onClick={handleBackToBeginning}
        discount={bag.discount}
        itemsQuantity={bag.items.length}
        shippingTotal={bag.shippingTotal}
        subTotal={bag.subTotal}
        total={bag.total}
      />
    </>
  )
}

export default Confirmation
