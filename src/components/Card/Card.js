import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  defaultCard: {
    minWidth: '320px',
    maxWidth: '600px',
    minHeight: '20px',
    borderRadius: '3px',
    backgroundColor: '#ffffff',
    boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.1)',
    border: 'none',
    padding: '10px',
    boxSizing: 'border-box',
    margin: '5px auto 20px'
  }
})

const Card = (props) => {
  const classes = useStyles()

  return <div className={classes.defaultCard}>{props.children}</div>
}

export default Card
