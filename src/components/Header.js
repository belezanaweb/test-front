import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Sacola</Link></li>
                <li><Link to='/payment'>Pagamento</Link></li>
                <li><Link to='/confirmation'>Confirmação</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header;