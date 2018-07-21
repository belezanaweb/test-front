import React from 'react';
import styled from 'styled-components';

const Heading = styled.header`
    background: #FFF;
    box-sizing: border-box;
    box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
    height: 50px;
    width: 100%;
`

const Nav = styled.nav`
    height: 100%;
    width: 100%;
`

const UnorderedList = styled.ul`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: space-around;
    width: 100%;
`

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
console.log(window.location)
const Header = () => (
    <Heading>
        <Nav>
            <UnorderedList>
                <ListItems active="active">Sacola</ListItems>
                <ListItems>Pagamento</ListItems>
                <ListItems>Confirmação</ListItems>
            </UnorderedList>
        </Nav>
    </Heading>
)

export default Header;