import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router'
import '../styles/header.scss';

const ListItems = styled.li`
    height: 16px;		
    color: #CCC;	
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;	
    font-size: 13px;	
    font-weight: 700;	
    letter-spacing: NaNpx;	
    line-height: 16px;
    list-style-type: none;
    text-transform: uppercase;

    ${({ active }) => active && `
        color: #FF7800;
    `}
`
class Header extends Component {
    render() {
        const { location } = this.props
        return (
            <header>
                <nav>
                    <ul>
                        <ListItems active={location.pathname == "/" ? true : false}>Sacola</ListItems>
                        <ListItems active={location.pathname == "/payment" ? true : false}>Pagamento</ListItems>
                        <ListItems active={location.pathname == "/confirmation" ? true : false}>Confirmação</ListItems>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(Header);