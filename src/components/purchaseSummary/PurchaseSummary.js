import * as React from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

const formatPrice = (value) => {
  return value ? value.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) : '0,00'
}

const PurchaseSummary = ({ price }) => {
  return (
    <Paper
      sx={{
        backgroundColor: '#EEE',
        border: 1,
        borderColor: 'divider',
        minHeight: 129,
        minWidth: 341,
        width: '35.5%',
        marginTop: 2
      }}
      variant="outlined"
    >
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <Grid item xs={5}>
          <Typography
            sx={{
              fontSize: 15,
              marginLeft: 2,
              marginTop: 1
            }}
          >
            PRODUTOS
          </Typography>
          <Typography
            sx={{
              fontSize: 15,
              marginLeft: 2,
              marginTop: 1
            }}
          >
            FRETE
          </Typography>
          <Typography
            sx={{
              fontSize: 15,
              color: '#FF7800',
              marginLeft: 2,
              marginTop: 1
            }}
          >
            DESCONTO
          </Typography>
          <Typography
            sx={{
              fontSize: 15,
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
              fontSize: 15,
              textAlign: 'right',
              marginRight: 2,
              marginTop: 1
            }}
          >
            R$ {formatPrice(price?.subTotal)}
          </Typography>
          <Typography
            sx={{
              fontSize: 15,
              textAlign: 'right',
              marginRight: 2,
              marginTop: 1
            }}
          >
            R$ {formatPrice(price?.shippingTotal)}
          </Typography>
          <Typography
            sx={{
              fontSize: 15,
              color: '#FF7800',
              textAlign: 'right',
              marginRight: 2,
              marginTop: 1
            }}
          >
            - R$ {formatPrice(price?.discount)}
          </Typography>
          <Typography
            sx={{
              fontSize: 15,
              textAlign: 'right',
              marginRight: 2,
              marginTop: 2,
              paddingBottom: 2,
              fontWeight: 'bold'
            }}
          >
            R$ {formatPrice(price?.total)}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

PurchaseSummary.propTypes = {
  price: PropTypes.object
}

export default PurchaseSummary
