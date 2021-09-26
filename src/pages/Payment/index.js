import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'

/**
 * Reducers
 */
import {
  cartListAsync,
  selectCartListResponse,
  saveCartCreditCardInfos,
  selectCartCreditCardInfos
} from '../../store/reducers/checkout'

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
import CreditCard from '../../components/CreditCard'
import Button from '../../components/Button'

const Payment = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const cartListResponse = useSelector(selectCartListResponse)
  const creditCardInfos = useSelector(selectCartCreditCardInfos)
  console.log('CreditCard creditCardInfos:', creditCardInfos)

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
          <CreditCard
            handleGetInfos={(infos) => {
              try {
                console.log('CreditCard handleGetInfos infos:', infos)
                dispatch(saveCartCreditCardInfos({ infos }))
              } catch (error) {
                console.log(error)
              }
            }}
            infos={creditCardInfos}
          />
        </Container>
        <Container my="10px" mx="20px">
          <Resume />
        </Container>
        <Container my="10px" mx="20px">
          <Button
            text="GO FINISH"
            onClick={() => redirect('/finish', history)}
            disabled={!creditCardInfos?.valid}
          />
        </Container>
      </PageContainer>
    </Page>
  )
}

export default Payment
