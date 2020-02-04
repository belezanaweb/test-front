import React, { Component } from "react";

import { Container } from "./styles";

export default class menu extends Component {
  render() {
    function Sacolaf(v) {
      if (v) {
        return <li className="active">SACOLA</li>;
      } else {
        return <li>SACOLA</li>;
      }
    }

    function PagamentoF(v) {
      if (v) {
        return <li className="active">PAGAMENTO</li>;
      } else {
        return <li>PAGAMENTO</li>;
      }
    }

    function ConfirmacaoF(v) {
      if (v) {
        return <li className="active">CONFIRMAÇÃO</li>;
      } else {
        return <li>CONFIRMAÇÃO</li>;
      }
    }

    return (
      <Container>
        <ul>
          {Sacolaf(this.props.sacola)}
          {PagamentoF(this.props.pagamento)}
          {ConfirmacaoF(this.props.confirmacao)}
        </ul>
      </Container>
    );
  }
}
