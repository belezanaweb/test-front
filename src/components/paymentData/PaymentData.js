import * as React from 'react'
import PropTypes from 'prop-types'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

function formatCreditCard(creditCard) {
  const numberParts = creditCard.split('.')

  return `****.****.****.${numberParts[3]}`
}

const PaymentData = ({ data }) => {
  return (
    <Container sx={{ margin: 2, minWidth: 318 }}>
      <Typography sx={{ fontSize: 16 }}>{formatCreditCard(data?.creditCard)}</Typography>
      <Typography sx={{ fontSize: 16, textTransform: 'uppercase' }}>{data?.name}</Typography>
      <Typography sx={{ fontSize: 16 }}>{data?.date}</Typography>
    </Container>
  )
}

PaymentData.propTypes = {
  data: PropTypes.object
}

export default PaymentData
