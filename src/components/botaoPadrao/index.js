import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Botao } from "./styles";

export default class BotaoPadrao extends Component {
  render() {
    return (
      <Container>
        <p>
          <Link to={this.props.link}>{this.props.texto}</Link>
        </p>
      </Container>
    );
  }
}
