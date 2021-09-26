import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

/**
 * Reducers
 */
import { cartListAsync, selectCartListResponse } from '../../store/reducers/checkout'

/**
 * Helpers
 */
import { redirect } from '../../helpers'

/**
 * Components
 */
import { Page, PageContainer, Container } from '../../components/Utils/styles'
import Header from '../../components/Header'
import Products from '../../components/Products'
import Resume from '../../components/Resume'
import Button from '../../components/Button'

const Bag = () => {
  const history = useHistory()
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
        <Container my="10px" mx="20px">
          <Button text="GO PAYMENT" onClick={() => redirect('/payment', history)} />
        </Container>
      </PageContainer>
    </Page>
  )
}

export default Bag
