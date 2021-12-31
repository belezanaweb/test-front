import * as React from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

const PurchaseSummary = ({ discount, total, shippingTotal, subTotal }) => {
  return (
    <Box>
      <Paper
        sx={{
          backgroundColor: '#EEE',
          border: 1,
          borderColor: 'divider',
          height: 129,
          marginTop: 2
        }}
        variant="outlined"
      >
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Grid item xs={5}>
            <Typography
              sx={{
                fontSize: 14,
                marginLeft: 2,
                marginTop: 1
              }}
            >
              PRODUTOS
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                marginLeft: 2,
                marginTop: 1
              }}
            >
              FRETE
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                color: '#FF7800',
                marginLeft: 2,
                marginTop: 1
              }}
            >
              DESCONTO
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                marginLeft: 2,
                marginTop: 2,
                fontWeight: 'bold'
              }}
            >
              TOTAL
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography
              sx={{
                fontSize: 14,
                textAlign: 'right',
                marginRight: 2,
                marginTop: 1
              }}
            >
              R$ {subTotal}
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                textAlign: 'right',
                marginRight: 2,
                marginTop: 1
              }}
            >
              R$ {shippingTotal}
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                color: '#FF7800',
                textAlign: 'right',
                marginRight: 2,
                marginTop: 1
              }}
            >
              R$ {discount}
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                textAlign: 'right',
                marginRight: 2,
                marginTop: 2,
                fontWeight: 'bold'
              }}
            >
              R$ {total}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

PurchaseSummary.propTypes = {
  discount: PropTypes.number,
  total: PropTypes.number,
  shippingTotal: PropTypes.number,
  subTotal: PropTypes.number
}

export default PurchaseSummary
