import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  defaultCard: {
    width: '80%',
    minWidth: '320px',
    maxWidth: '600px',
    minHeight: '20px',
    borderRadius: '3px',
    backgroundColor: '#ffffff',
    boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.1)',
    border: 'none',
    padding: '10px',
    boxSizing: 'border-box',
    margin: '20px auto'
  }
})

const Card = (props) => {
  const { text, click } = props
  const classes = useStyles()

  return <div className={classes.defaultCard}>{props.children}</div>
}

export default Card
