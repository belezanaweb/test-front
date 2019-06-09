import React, { Component } from 'react';

import { Container, Nav, Item} from '../header/style';
import {Link} from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Nav>
          <Item active={this.props.activePage === "shopping-cart"}>
            <Link to={`/`}>sacola</Link>
          </Item>
          <Item active={this.props.activePage === "payment"}>
            <Link to={`/payment`}>pagamento</Link>
          </Item>
          <Item active={this.props.activePage === "success"}>
            <Link to={`/success`}>confirmação</Link>
          </Item>
        </Nav>
      </Container>
    );
  }
}
