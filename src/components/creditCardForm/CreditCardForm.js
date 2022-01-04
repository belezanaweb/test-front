import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import Grid from '@mui/material/Grid'
import FormHelperText from '@mui/material/FormHelperText'
import store from '../../store'

const CreditCardForm = ({ disableForm }) => {
  return (
    <Box sx={{ margin: 1, paddingBottom: 2, maxWidth: 625 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12}>
          <FormHelperText>Número do cartão</FormHelperText>
          <OutlinedInput
            color="warning"
            sx={{ height: '45px', width: '100%' }}
            placeholder="____.____.____.____"
            value={store.getState().paymentData?.creditCard}
            onChange={(e) =>
              store.dispatch({ type: 'setPaymentData', field: 'creditCard', value: e.target.value })
            }
            disabled={disableForm}
          />
        </Grid>
        <Grid item xs={12}>
          <FormHelperText>Nome do titular</FormHelperText>
          <OutlinedInput
            color="warning"
            sx={{ height: '45px', width: '100%' }}
            placeholder="Como no cartão"
            value={store.getState().paymentData?.name}
            onChange={(e) =>
              store.dispatch({ type: 'setPaymentData', field: 'name', value: e.target.value })
            }
            disabled={disableForm}
          />
        </Grid>
        <Grid item xs={7}>
          <FormHelperText>Validade (mês/ano)</FormHelperText>
          <OutlinedInput
            color="warning"
            sx={{ height: '45px' }}
            placeholder="__/____"
            value={store.getState().paymentData?.date}
            onChange={(e) =>
              store.dispatch({ type: 'setPaymentData', field: 'date', value: e.target.value })
            }
            disabled={disableForm}
          />
        </Grid>
        <Grid item xs={5}>
          <FormHelperText>CVV</FormHelperText>
          <OutlinedInput
            color="warning"
            sx={{ height: '45px' }}
            placeholder="___"
            value={store.getState().paymentData?.cvv}
            onChange={(e) =>
              store.dispatch({ type: 'setPaymentData', field: 'cvv', value: e.target.value })
            }
            disabled={disableForm}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

CreditCardForm.propTypes = {
  disableForm: PropTypes.bool
}

CreditCardForm.defaultProps = {
  disableForm: false
}

export default CreditCardForm
