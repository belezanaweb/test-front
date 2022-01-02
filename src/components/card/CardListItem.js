import * as React from 'react'
import PropTypes from 'prop-types'
import Stack from '@mui/material/Stack'
import CardItem from './CardItem'

const CardListItem = ({ items }) => {
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
        <CardItem item={item} key={item?.product?.sku} />
      ))}
    </Stack>
  )
}

CardListItem.propTypes = {
  items: PropTypes.array
}

export default CardListItem
