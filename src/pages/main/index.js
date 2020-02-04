import React, { Component } from "react";
import { connect } from "react-redux";
import Currency from "react-currency-formatter";
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
  Total
} from "./style";

class Main extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    const response = await api.get("/5b15c4923100004a006f3c07  ");
    this.setState({
      loading: false
    });
    dispatch({
      type: "BUSCARPRODUTOS",
      Informacao: response.data,
      Produtos: response.data.items
    });
  }

  render() {
    const { Tinformacao, Tprodutos } = this.props;
    if (this.state.loading) {
      return <h2>Carregando...</h2>;
    } else {
      return (
        <Container>
          <Menu sacola={true} />

          <Produtos>
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
                    <span>
                      <Currency
                        quantity={resultado.product.priceSpecification.price}
                        currency="BRL"
                      />
                    </span>
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
            <BotaoPadrao
              texto={"SEGUIR PARA O PAGAMENTO"}
              link={"/pagamento"}
            />
          </ContainerTotal>
        </Container>
      );
    }
  }
}

const mapStateToProps = state => ({
  Tprodutos: state.loja.Produtos,
  Tinformacao: state.loja.Informacao
});

export default connect(mapStateToProps)(Main);
