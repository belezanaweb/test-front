import React from 'react'
import { withRouter, NavLink } from 'react-router-dom';

import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const styles = {
  container: {
    display: 'flex',
    position: 'relative',
    backgroundColor: '#fff',
    zIndex: 2,
    boxShadow: {
      x: 1,
      y: 1,
      blur: 5,
      color: 'rgba(0,0,29,0.22)',
    },
  },
  link: {
    flex: 'auto',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 13,
    lineHeight: '16px',
    padding: [12, 0],
    color: '#CCC',
    textTransform: 'uppercase',
  },
  activeLink: {
    color: '#FF7800',
    textDecoration: 'none',
    '&:focus': {
      color: '#FF7800',
      textDecoration: 'none',
    },
    '&:hover': {
      color: '#FF7800',
      textDecoration: 'none',
    },
  },
}

const { classes } = jss.createStyleSheet(styles).attach()

const CartSteps = ({ location }) => {
  const links = [
    {
      text: 'Sacola',
      to: "/checkout/cart",
      disabled: location.pathname.indexOf('/placed') > -1,
    },
    {
      text: 'Pagamento',
      to: "/checkout/payment",
      disabled: location.pathname.indexOf('/payment') === -1,
    },
    {
      text: 'Confirmação',
      to: "/checkout/placed",
      disabled: location.pathname.indexOf('/placed') === -1,
    },
  ]

  const elements = links.map((link, index) =>
    link.disabled ?
      <span className={classes.link} key={index}>
        {link.text}
      </span>
      :
      <NavLink className={classes.link} activeClassName={classes.activeLink} exact to={link.to} key={index}>
        {link.text}
      </NavLink>
  )

  return (
    <div>
      <nav className={classes.container}>
        {elements}
      </nav>
    </div>
  )
}

export default withRouter(CartSteps)
