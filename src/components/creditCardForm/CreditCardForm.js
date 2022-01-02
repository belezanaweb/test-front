import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import Grid from '@mui/material/Grid'
import FormHelperText from '@mui/material/FormHelperText'

const CreditCardForm = ({ item }) => {
  return (
    <Box sx={{ margin: 1, paddingBottom: 2 }}>
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
            sx={{ height: '45px', width: '100%' }}
            placeholder="____.____.____.____"
            value={item?.creditCard}
          />
        </Grid>
        <Grid item xs={12}>
          <FormHelperText>Nome do titular</FormHelperText>
          <OutlinedInput
            sx={{ height: '45px', width: '100%' }}
            placeholder="Como no cartão"
            value={item?.name}
          />
        </Grid>
        <Grid item xs={7}>
          <FormHelperText>Validade (mês/ano)</FormHelperText>
          <OutlinedInput sx={{ height: '45px' }} placeholder="__/____" value={item?.date} />
        </Grid>
        <Grid item xs={5}>
          <FormHelperText>CVV</FormHelperText>
          <OutlinedInput sx={{ height: '45px' }} placeholder="___" value={item?.cvv} />
        </Grid>
      </Grid>
    </Box>
  )
}

CreditCardForm.propTypes = {
  item: PropTypes.object
}

export default CreditCardForm
