import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  errorMessage: {
    color: 'red',
    fontSize: '12px',
    margin: '5px 0'
  }
})

const ErrorMessage = (props) => {
  const classes = useStyles()
  return <p className={classes.errorMessage}>{props.children}</p>
}

export default ErrorMessage
