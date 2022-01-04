import * as React from 'react'
import PropTypes from 'prop-types'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

const formatPrice = (value) => {
  return value ? value.toLocaleString('pt-BR', { minimumFractionDigits: 2 }) : '0,00'
}

const CardItem = ({ item, shouldShowPrice }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: 1,
        borderColor: 'divider',
        width: '90%',
        minHeight: 100
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={3}>
          <CardMedia
            sx={{
              width: 70,
              paddingLeft: 1
            }}
            component="img"
            height="75"
            alt={item?.product?.name}
            image={item?.product?.imageObjects[0]?.small}
          />
        </Grid>
        <Grid item xs={9}>
          <Stack spacing={2} sx={{ paddingTop: 1 }}>
            <Typography sx={{ fontSize: 13, maxHeight: 32 }}>{item?.product?.name}</Typography>
            {shouldShowPrice ? (
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  textAlign: 'right',
                  paddingRight: 1
                }}
              >
                R$ {formatPrice(item?.product?.priceSpecification?.price)}
              </Typography>
            ) : null}
          </Stack>
        </Grid>
      </Grid>
    </Card>
  )
}

CardItem.propTypes = {
  item: PropTypes.object,
  shouldShowPrice: PropTypes.bool
}

export default CardItem
