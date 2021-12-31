import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import CardItem from './CardItem'

const Card = ({ title, items }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box>
        <Typography
          sx={{
            color: '#999',
            fontWeight: 'bold',
            marginLeft: 1,
            fontSize: 14,
            textTransform: 'uppercase'
          }}
          variant="h6"
        >
          {title}
        </Typography>
        <Paper
          sx={{
            border: 1,
            borderColor: 'divider',
            width: 341
          }}
        >
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
              <CardItem item={item} />
            ))}
          </Stack>
        </Paper>
      </Box>
    </Box>
  )
}

Card.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string
}

export default Card
