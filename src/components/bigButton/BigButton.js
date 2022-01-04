import * as React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'

const BigButton = ({ buttonText, disabled, handleClick }) => {
  return (
    <Button
      sx={{
        backgroundColor: '#FF6C00',
        width: 341,
        height: 60,
        marginTop: 2,
        fontWeight: 'bold',
        fontSize: 19
      }}
      variant="contained"
      disabled={disabled}
      onClick={() => {
        handleClick()
      }}
    >
      {buttonText}
    </Button>
  )
}

BigButton.propTypes = {
  buttonText: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func
}

BigButton.defaultProps = {
  disabled: false
}

export default BigButton
