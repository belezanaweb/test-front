import React from 'react'
import { StyledPage } from './style'
import Title from 'components/Title/Title'
import Container from 'components/Container'
import { useSelector } from 'react-redux'
import Header from 'components/Header'
import FooterButton from 'components/FooterButton'
import CheckoutDetail from 'components/CheckoutDetail'

const CheckoutPage = ({ title, nextStep, textButton, onSubmit, ...props }) => {
  const { data, loading, hasError } = useSelector(state => state.cart)

  return (
    <>
      <Header />
      <StyledPage>
        <form onSubmit={onSubmit} onInvalid={e => e.preventDefault()}>
          <Title>{title}</Title>
          <Container {...props} />
          {!hasError && !loading &&
            <>
              <CheckoutDetail
                subTotal={data.subTotal}
                shippingTotal={data.shippingTotal}
                discount={data.discount}
                total={data.total}
              />
              <FooterButton>{textButton}</FooterButton>
            </>
          }
        </form>
      </StyledPage>
    </>
  )
}

export default CheckoutPage
