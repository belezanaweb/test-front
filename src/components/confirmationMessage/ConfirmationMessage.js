import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline'

const ConfirmationMessage = ({ sucessMessage }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
        color: '#FF7800'
      }}
    >
      <CheckCircleOutline style={{ fontSize: 40, marginBottom: 3 }} />
      <Typography sx={{ fontSize: 14, textTransform: 'uppercase', fontWeight: 'bold' }}>
        {sucessMessage}
      </Typography>
    </Box>
  )
}

ConfirmationMessage.propTypes = {
  sucessMessage: PropTypes.string
}

export default ConfirmationMessage
