import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Paper from '../../components/paper'
import ProductBox from '../../components/productBox'
import ProductsContainer from './bag.style'
import getBagProducts from './bag.service'
import LOAD_BAG from '../../store/actions/bag'

const Bag = () => {
  const bag = useSelector((state) => state.bag)
  const dispatch = useDispatch()

  useEffect(() => {
    async function getProducts() {
      const data = await getBagProducts()
      dispatch({ type: LOAD_BAG, bag: data })
    }

    getProducts()
  }, [dispatch])

  return (
    <div>
      {bag && bag.items.length > 0 && (
        <Paper title="Produtos" padding="12px 12px 13px 13px">
          <ProductsContainer>
            {bag.items.map((item) => (
              <ProductBox
                key={item.product.sku}
                image={item.product.imageObjects[0].medium}
                description={item.product.name}
                price={item.product.priceSpecification.price}
              />
            ))}
          </ProductsContainer>
        </Paper>
      )}
    </div>
  )
}

export default Bag
