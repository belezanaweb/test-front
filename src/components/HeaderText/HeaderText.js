import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  headerTextWrapper: {
    width: '100%',
    minWidth: '320px',
    maxWidth: '600px',
    minHeight: '20px',
    padding: '0 10px',
    boxSizing: 'border-box',
    margin: '20px auto 0'
  },
  headerText: {
    height: '17px',
    width: '319px',
    color: '#999',
    fontFamily: 'Helvetica Neue',
    fontSize: '14px',
    fontWeight: '700',
    lineHeight: '17px',
    textTransform: 'uppercase',
    margin: '0'
  }
})

const HeaderText = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.headerTextWrapper}>
      <h2 className={classes.headerText}>{props.children}</h2>
    </div>
  )
}

export default HeaderText
