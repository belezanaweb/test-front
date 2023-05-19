import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useCheckout } from '../../stores'

import { PageCheckoutContainer } from './PageCheckout.styled'

import { CheckoutCart, CheckoutPayment, CheckoutConfirm } from '../../components'
import { Tabs } from '../../shared'

import BagIcon from '../../assets/images/masks/bag-mask.svg'
import CardMask from '../../assets/images/masks/card-mask.svg'
import CheckIcon from '../../assets/images/masks/check-mask.svg'

export const PageCheckout = () => {
  const navigate = useNavigate()
  const locate = useLocation()
  const { checkout } = useCheckout()

  const active = locate.pathname.toString()
  const isCheckoutPaymentDisabled =
    !checkout || Object.values(checkout.card).some((value) => !value)

  const items = [
    {
      key: '/',
      title: 'Sacola',
      icon: BagIcon,
      children: <CheckoutCart onPayment={() => navigateTo('payment')} />
    },
    {
      key: '/payment',
      title: 'Pagamento',
      icon: CardMask,
      children: <CheckoutPayment />
    },
    {
      key: '/confirm',
      title: 'Confirmação',
      icon: CheckIcon,
      children: <CheckoutConfirm />,
      disabled: isCheckoutPaymentDisabled
    }
  ]

  const navigateTo = (value: string) => {
    navigate(value)
  }

  useEffect(() => {
    if (active === '/confirm' && isCheckoutPaymentDisabled) {
      navigate('/')
    }
  }, [active])

  return (
    <PageCheckoutContainer>
      <Tabs active={active} onChange={navigateTo} items={items} />
    </PageCheckoutContainer>
  )
}
