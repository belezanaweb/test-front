import React, { Component } from "react";
import { connect } from "react-redux";
import Currency from "react-currency-formatter";
import { FaRegCheckCircle } from "react-icons/fa";
import BotaoPadrao from "../../components/botaoPadrao";
import Menu from "../../components/menu";
import api from "../../services/api";

import {
  Container,
  Produtos,
  List,
  DetalhesProdutos,
  Titulo,
  ListaTotal,
  ContainerTotal,
  Desconto,
  Total,
  Icone,
  TituloSucesso
} from "./styles";

class Confirmacao extends Component {
  state = {
    Produtos: [],
    Informacao: [],
    loading: true
  };

  async componentDidMount() {
    const response = await api.get("/5b15c4923100004a006f3c07  ");
    this.setState({
      Informacao: response.data,
      Produtos: response.data.items,
      loading: false
    });
  }

  render() {
    function DataAtual() {
      var d = new Date();
      var n = d.getMonth();
      var y = d.getFullYear();
      return <span>{n + 1 + "/" + y}</span>;
    }
    const { Tinformacao, Tprodutos, cartao, nome } = this.props;
    if (this.state.loading) {
      return <h2>Carregando...</h2>;
    } else {
      return (
        <Container>
          <Menu confirmacao={true} />

          <Produtos>
            <Icone>
              <FaRegCheckCircle />
            </Icone>
            <TituloSucesso>COMPRA EFETUADA COM SUCESSO</TituloSucesso>
            <Titulo>PAGAMENTO </Titulo>
            <List>
              <li className="pagamentoal">
                <p>{cartao}</p>
                <p>{nome}</p>
                <p>{DataAtual()}</p>
              </li>
            </List>
            <Titulo>PRODUTOS</Titulo>
            <List>
              {Tprodutos.map(resultado => (
                <li key={resultado.product.sku}>
                  <div>
                    <img
                      src={resultado.product.imageObjects[0].thumbnail}
                      alt=""
                    />
                  </div>
                  <DetalhesProdutos>
                    <p>{resultado.product.name}</p>
                    <span></span>
                  </DetalhesProdutos>
                </li>
              ))}
            </List>
          </Produtos>
          <ContainerTotal>
            <ListaTotal>
              <li>
                <span>PROTUDOS</span>
                <span>
                  <Currency quantity={Tinformacao.subTotal} currency="BRL" />
                </span>
              </li>
              <li>
                <span>FRETE</span>
                <span>
                  <Currency
                    quantity={Tinformacao.shippingTotal}
                    currency="BRL"
                  />
                </span>
              </li>
              <Desconto>
                <span>DESCONTO</span>
                <span>
                  -
                  <Currency quantity={Tinformacao.discount} currency="BRL" />
                </span>
              </Desconto>
              <Total>
                <span>TOTAL</span>
                <span>
                  <Currency quantity={Tinformacao.total} currency="BRL" />
                </span>
              </Total>
            </ListaTotal>
          </ContainerTotal>
        </Container>
      );
    }
  }
}

const mapStateToProps = state => ({
  Tprodutos: state.loja.Produtos,
  Tinformacao: state.loja.Informacao,
  cartao: state.loja.cartao,
  nome: state.loja.nome
});

export default connect(mapStateToProps)(Confirmacao);
