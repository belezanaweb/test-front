import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Botao } from "./styles";

export default class BotaoSubmit extends Component {
  render() {
    return <Botao type="submit"> SEGUIR PARA O PAGAMENTO </Botao>;
  }
}
