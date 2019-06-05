import React, { Component } from 'react';

import { Container, Caption } from './styles';

export default class Section extends Component {
  caption = this.props.caption;

  render() {
    return(
        <Container className={this.props.className}>
            <Caption>{this.caption}</Caption>
            {this.props.children}
        </Container>
    );
  }
}
