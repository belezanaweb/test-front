import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  defaultButton: {
    height: '60px',
    width: '320px',
    borderRadius: '3px',
    backgroundColor: '#FF6C00',
    boxShadow: 'inset 0 -3px 0 0 #D45A00, 0 2px 4px 0 rgba(0,0,0,0.25)',
    border: 'none',
    '&:hover': {
      backgroundColor: '#D45A00'
    }
  },
  textButton: {
    height: '24px',
    width: '318.12px',
    color: '#FFF',
    fontFamily: 'Helvetica Neue',
    fontSize: '20px',
    fontWeight: '700',
    letterSpacing: '0.5px',
    lineHeight: '24px',
    textAlign: 'center',
    textTransform: 'uppercase'
  }
})

const Button = (props) => {
  const { text, click } = props
  const classes = useStyles()

  return (
    <div>
      <button className={classes.defaultButton} onClick={click} data-testid="defaultButton">
        <span className={classes.textButton}>{text}</span>
      </button>
    </div>
  )
}

export default Button
