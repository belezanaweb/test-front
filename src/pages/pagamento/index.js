import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import Currency from "react-currency-formatter";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import BotaoPadrao from "../../components/botaoPadrao";
import BotaoSubmit from "../../components/submit";
import Menu from "../../components/menu";
import dadoscartao from "../../store/modules/loja/actions";

import {
  Container,
  Infopagamento,
  Produtos,
  Titulo,
  ContainerTotal,
  ListaTotal,
  Desconto,
  Total,
  Cardinfo,
  InforCartao,
  TitutloCartao
} from "./style";

const schema = Yup.object().shape({
  cartao: Yup.number()
    .min(15, "No minimo 16 digitos")
    .required("Insira o numero o cartão correto"),
  nome: Yup.string().required("Insira o nome do cartao"),
  validade: Yup.string().required("Insira a data"),
  cvv: Yup.string()
    .min(3)
    .max(3)
    .required("Insira o CVV corretamente")
});

class Pagamento extends Component {
  state = {
    Produtos: [],
    Informacao: [],
    loading: false
  };

  componentDidUpdate() {
    const { done } = this.props;
    if (done == 1) {
      this.props.history.push("/confirmacao");
    }
  }

  render() {
    const { dispatch } = this.props;
    function handlesubmit(data) {
      const { cartao, nome, validade, cvv } = data;
      const done = 1;
      //dispatch(dadoscartao(cartao, nome, validade, cvv));
      dispatch({
        type: "DADOSCARTAO",
        cartao,
        nome,
        validade,
        cvv,
        done
      });
    }

    const { Tinformacao, Tprodutos, cvv, done } = this.props;

    if (this.state.loading) {
      return <h2>Carregando...</h2>;
    } else {
      return (
        <Container>
          <Menu pagamento={true} />
          <Form schema={schema} onSubmit={handlesubmit}>
            <Produtos>
              <Titulo>CARTÃO DE CREDITO - {done}</Titulo>
              <Infopagamento>
                <InforCartao>
                  <TitutloCartao>Número do cartão</TitutloCartao>
                  <Input
                    name="cartao"
                    placeholder="_ _ _ _ . _ _ _ _ . _ _ _ _ . _ _ _ _"
                    mask="9999.9999.9999.9999"
                  />
                  <TitutloCartao>Nome do Titular</TitutloCartao>
                  <Input name="nome" placeholder="Como no cartão" />
                  <Cardinfo>
                    <div>
                      <TitutloCartao>Validade (mês/ano):</TitutloCartao>
                      <Input name="validade" placeholder="_ _/_ _ _ _" />
                    </div>
                    <div>
                      <TitutloCartao>CVV:</TitutloCartao>
                      <Input name="cvv" placeholder="_ _ _" />
                    </div>
                  </Cardinfo>
                </InforCartao>
              </Infopagamento>
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
            <BotaoSubmit type="submit"> ENVIAR </BotaoSubmit>
          </Form>
        </Container>
      );
    }
  }
}

const mapStateToProps = state => ({
  Tprodutos: state.loja.Produtos,
  Tinformacao: state.loja.Informacao,
  done: state.loja.done
});

export default connect(mapStateToProps)(Pagamento);
