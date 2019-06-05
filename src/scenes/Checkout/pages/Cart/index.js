import React, { Component } from 'react';
import Section from '../../components/Section';
import CartBox from '../../components/CartBox';
import Block, {ListItem, ListFigure, ListDescription} from '../../components/Block';

export default class Cart extends Component {
  render() {
    return(
      <Section caption="Produtos">
        <Block className="cart">
          <CartBox/>
        </Block>
      </Section>
    );
  }
}
