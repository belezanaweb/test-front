import * as React from 'react'
import PropTypes from 'prop-types'
import Stack from '@mui/material/Stack'
import CardItem from './CardItem'

const CardListItem = ({ items, shouldShowPrice }) => {
  return (
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{
        marginTop: 2,
        marginBottom: 2
      }}
    >
      {items.map((item) => (
        <CardItem item={item} key={item?.product?.sku} shouldShowPrice={shouldShowPrice} />
      ))}
    </Stack>
  )
}

CardListItem.propTypes = {
  items: PropTypes.array,
  shouldShowPrice: PropTypes.bool
}

CardListItem.defaultProps = {
  items: [],
  shouldShowPrice: true
}

export default CardListItem
