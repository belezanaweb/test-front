import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <NavLink to="/cart">Sacola</NavLink >
                <NavLink to="/payments">Pagamento</NavLink >
                <NavLink to="/confirm">Confirmação</NavLink >
            </div>
        )
    }
}

export default Header