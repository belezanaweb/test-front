import * as React from 'react'
import PropTypes from 'prop-types'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const Card = ({ title, content }) => {
  return (
    <Container sx={{ marginBottom: 2, width: '38%', minWidth: 340, padding: 0 }}>
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
          width: '100%'
        }}
      >
        {content}
      </Paper>
    </Container>
  )
}

Card.propTypes = {
  content: PropTypes.node,
  title: PropTypes.string
}

export default Card
