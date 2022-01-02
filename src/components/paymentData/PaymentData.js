import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const PaymentData = ({ data }) => {
  return (
    <Box sx={{ margin: 2 }}>
      <Typography sx={{ fontSize: 14 }}>{data?.creditCard}</Typography>
      <Typography sx={{ fontSize: 14, textTransform: 'uppercase' }}>{data?.name}</Typography>
      <Typography sx={{ fontSize: 14 }}>{data?.date}</Typography>
    </Box>
  )
}

PaymentData.propTypes = {
  data: PropTypes.object
}

export default PaymentData
