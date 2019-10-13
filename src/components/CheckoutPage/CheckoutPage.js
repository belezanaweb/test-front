import React from 'react'
import { StyledPage } from './style'
import Title from 'components/Title/Title'
import Container from 'components/Container'
import { useSelector } from 'react-redux'
import Header from 'components/Header'
import FooterButton from 'components/FooterButton'
import CheckoutDetail from 'components/CheckoutDetail'

const CheckoutPage = ({ title, nextStep, textButton, ...props }) => {
  const { data, loading, hasError } = useSelector(state => state.cart)

  return (
    <>
      <Header />
      <StyledPage>
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
            <FooterButton to={nextStep}>{textButton}</FooterButton>
          </>
        }
      </StyledPage>
    </>
  )
}

export default CheckoutPage
