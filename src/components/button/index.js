import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Container, Button} from './style';

export default class ActionButton extends Component {
  render() {
    return (
      <Container>
        <Link to={`/${this.props.routeTo}`}>
          <Button>
            {this.props.content}
          </Button>
        </Link>
      </Container>
    )
  }
}
