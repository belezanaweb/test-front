import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Container, Button} from './style';

export default class ActionButton extends Component {
  render() {
    return (
      <Container>
        <Link className={!this.props.enable ? 'disable-link': ''} to={`/${this.props.routeTo}`}>
          <Button type={this.props.type} disabled={!this.props.enable}>
            {this.props.content}
          </Button>
        </Link>
      </Container>
    )
  }
}
