import React, { useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import { useLocation } from 'react-router-dom'

const useStyles = createUseStyles({
  navbar: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#FFF',
    boxShadow: '1px 1px 5px 0 rgba(0,0,29,0.22)',
    listStyle: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '72px',
    '& li': {
      '& span': {
        textDecoration: 'none',
        textTransform: 'uppercase',
        color: '#CCC',
        fontFamily: 'Helvetica Neue',
        fontSize: '13px',
        fontWeight: '700',
        lineHeight: '16px',
        '&.active': {
          color: '#FF7800'
        }
      }
    }
  }
})

const Steps = () => {
  const classes = useStyles()
  let location = useLocation()
  console.log(location.pathname)
  return (
    <div className={classes.navbar}>
      <li>
        <span className={location.pathname === '/' ? 'active' : ''}>Sacola</span>
      </li>
      <li>
        <span className={location.pathname === '/payment' ? 'active' : ''}>Pagamento</span>
      </li>
      <li>
        <span className={location.pathname === '/confirmation' ? 'active' : ''}>Confirmação</span>
      </li>
    </div>
  )
}

export default Steps
