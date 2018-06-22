import React from 'react';
import { withRouter } from 'react-router';
import classNames from 'classnames'

const Navbar = props =>
  <nav className="grid-noGutter">
    <div className={classNames({'active': props.location.pathname === '/', 'col-4': true})}>Sacola</div>
    <div className={classNames({'active': props.location.pathname === '/payment', 'col-4': true})}>Pagamento</div>
    <div className={classNames({'active': props.location.pathname === '/confirmation', 'col-4': true})}>Confirmação</div>
  </nav>

export default withRouter(Navbar)
