import React, { Component } from 'react';

import { Container, Item, Figure, Description } from './styles';

export default class Block extends Component {
  render() {
    return(
        <Container className={this.props.className?this.props.className:""}>
          {this.props.children}
        </Container>
    );
  }
}

export const ListItem = Item;
export const ListFigure = Figure;
export const ListDescription = Description;