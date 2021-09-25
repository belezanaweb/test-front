import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/**
 * Reducers
 */
import {
  cartListAsync,
  selectCartListResponse,
  selectCartProductsResponse
  // selectCartResumeResponse
} from '../../store/reducers/checkout'

/**
 * Components
 */
import { Page, PageContainer, Container } from '../../components/Utils/styles'
import Header from '../../components/Header'
import Products from '../../components/Products'

const Bag = () => {
  const dispatch = useDispatch()

  const cartListResponse = useSelector(selectCartListResponse)
  const cartProductsResponse = useSelector(selectCartProductsResponse)
  // const cartResumeResponse = useSelector(selectCartResumeResponse)

  useEffect(() => {
    try {
      if (!cartListResponse) {
        dispatch(cartListAsync({}))
      }
    } catch (error) {
      console.log(error)
    }
  }, [cartListResponse, dispatch])

  return (
    <Page>
      <PageContainer>
        <Container>
          <Header />
        </Container>
        <Container my="20px" mx="20px">
          <Products products={cartProductsResponse} />
        </Container>
      </PageContainer>
    </Page>
  )
}

export default Bag
