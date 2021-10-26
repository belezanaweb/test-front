import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  defaultCard: {
    width: '320px',
    minHeight: '20px',
    borderRadius: '3px',
    backgroundColor: '#ffffff',
    boxShadow: 'inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25)',
    border: 'none',
    padding: '10px',
    boxSizing: 'border-box'
  }
})

const Card = (props) => {
  const { text, click } = props
  const classes = useStyles()

  return <div className={classes.defaultCard}>{props.children}</div>
}

export default Card
