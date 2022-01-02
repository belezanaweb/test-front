import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const Card = ({ title, content }) => {
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
          {content}
        </Paper>
      </Box>
    </Box>
  )
}

Card.propTypes = {
  content: PropTypes.node,
  title: PropTypes.string
}

export default Card
