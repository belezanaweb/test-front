import React from 'react'
import { useHistory } from 'react-router-dom'
import { Wrapper, HeaderWrapper, Text } from './style'

const Header = ({ selectedPage }) => {
  const history = useHistory();
  let bagColor = false
  let paymentColor = false
  let confirmationColor = false

  switch (selectedPage) {
    case "bag":
      bagColor = true
      break
    case "payment":
      paymentColor = true
      break
    case "confirmation":
      confirmationColor = true
      break
    default:
      bagColor = false
      paymentColor = false
      confirmationColor = false
  }

  const goToPage = (page) => {
    history.push(page)
  }

  return (
    <Wrapper>
      <HeaderWrapper>
        <Text onClick={() => goToPage("/")} isOrange={bagColor}>SACOLA</Text>
        <Text onClick={() => goToPage("/payment")} isOrange={paymentColor}>PAGAMENTO</Text>
        <Text onClick={() => goToPage("/confirmation")} isOrange={confirmationColor}>CONFIRMAÇÃO</Text>
      </HeaderWrapper>
    </Wrapper>
  )
}

export default Header