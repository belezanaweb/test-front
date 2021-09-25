import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/**
 * Reducers
 */
import { cartListAsync, selectCartListResponse } from '../../store/reducers/checkout'

/**
 * Components
 */
import { Page, PageContainer, Container } from '../../components/Utils/styles'
import Header from '../../components/Header'
import Products from '../../components/Products'
import Resume from '../../components/Resume'

const Bag = () => {
  const dispatch = useDispatch()

  const cartListResponse = useSelector(selectCartListResponse)

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
        <Container my="10px" mx="20px">
          <Products />
        </Container>
        <Container my="10px" mx="20px">
          <Resume />
        </Container>
      </PageContainer>
    </Page>
  )
}

export default Bag
