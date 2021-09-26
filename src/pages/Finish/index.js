import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/**
 * Reducers
 */
import { cartListAsync, selectCartListResponse } from '../../store/reducers/checkout'

/**
 * Helpers
 */
// import { redirect } from '../../helpers'

/**
 * Components
 */
import { Page, PageContainer, Container } from '../../components/Utils/styles'
import Header from '../../components/Header'
import PaymentInfo from '../../components/PaymentInfo'
import Products from '../../components/Products'
import Resume from '../../components/Resume'
import FinishSuccess from '../../components/FinishSuccess'

const Finish = () => {
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
        <Container my="5px" mx="20px">
          <FinishSuccess />
        </Container>
        <Container my="12px" mx="20px">
          <PaymentInfo />
        </Container>
        <Container my="12px" mx="20px">
          <Products />
        </Container>
        <Container my="12px" mx="20px">
          <Resume />
        </Container>
      </PageContainer>
    </Page>
  )
}

export default Finish
