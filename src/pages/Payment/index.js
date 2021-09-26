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
import Resume from '../../components/Resume'
import Button from '../../components/Button'

const Payment = () => {
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

  const checkDisable = () => {
    try {
      return true
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Page>
      <PageContainer>
        <Container>
          <Header />
        </Container>
        <Container my="10px" mx="20px"></Container>
        <Container my="10px" mx="20px">
          <Resume />
        </Container>
        <Container my="10px" mx="20px">
          <Button
            text="GO FINISH"
            onClick={() => redirect('/finish', history)}
            disabled={checkDisable()}
          />
        </Container>
      </PageContainer>
    </Page>
  )
}

export default Payment
