import React, { PureComponent } from "react";
import { Container } from './styles';

export default class Button extends PureComponent {

  constructor(props) {
    super(props);
    }

  render(){
    return(
      <Container>
        <button onClick={this.props.onClick} disabled={this.props.disabled}>
          {this.props.text}
        </button>
      </Container>
    )
  }
}
