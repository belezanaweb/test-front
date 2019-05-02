import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';
import Card from '../components/Card';
import CardResume from '../components/CardResume';
import Link from '../components/Link';
import { updateCreditCardUser } from '../store/actions';

import { Main, Aside, Container } from './styles';
import {
  ContainerForm,
  Label,
  Input,
  DataCard,
  Complement,
  ErrorText,
} from './payment-styles';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);

    this.state = {
      form: {
        name: '',
        number: '',
        valid: '',
        cvv: ''
      },
      showsErrorMessage: {
        name: false,
        number: false,
        valid: false,
        cvv: false
      }
    }
  }

  handleChange(e) {
    const input = e.target;
    const form = this.state.form;
    form[input.name] = input.value;

    this.setState({ form });
  }

  renderErrorNumberCard() {
    if (!this.state.showsErrorMessage.number) {
      return null;
    }

    return (
      <ErrorText>Formato inválido do número</ErrorText>
    );
  }

  renderErrorNameCard() {
    if (!this.state.showsErrorMessage.name) {
      return null;
    }

    return (
      <ErrorText>Nome do titular do cartão é obrigatório</ErrorText>
    );
  }

  renderErrorValidCard() {
    if (!this.state.showsErrorMessage.valid) {
      return null;
    }

    return (
      <ErrorText>Validade do cartão no formato inválido</ErrorText>
    );
  }

  renderErrorCvvCard() {
    if (!this.state.showsErrorMessage.cvv) {
      return null;
    }

    return (
      <ErrorText>Formato inválido do CVV</ErrorText>
    );
  }

  validateForm() {
    const { form, showsErrorMessage } = this.state;

    showsErrorMessage.number = form.number.length < 1 ? true : false;
    showsErrorMessage.cvv = form.cvv.length < 1 ? true : false;
    showsErrorMessage.name = form.name.length < 1 ? true : false;
    showsErrorMessage.valid = form.valid.length < 1 ? true : false;

    this.setState({ showsErrorMessage });
    return showsErrorMessage;
  }

  checkAllFieldsValid(formFields) {
    return !Object.keys(formFields)
      .map(x => formFields[x])
      .some(field => field);
  }

  onSubmit() {
    const fieldsErrors = this.validateForm();
    const allFieldsValid = this.checkAllFieldsValid(fieldsErrors);

    if (!allFieldsValid) {
      return;
    }

    const creditCardData = {
      name: this.state.form.name,
      valid: this.state.form.valid,
      number: this.state.form.number,
    };
    this.props.updateCreditCardUser(creditCardData);

    this.props.history.push('/sucesso');
  }

  formCreditCart() {
    return (
      <ContainerForm>
        <form noValidate>
          <DataCard>
            <Label>
              <p>Número do cartão:</p>
              <Input type="number" name="number" value={this.state.form.number} onChange={this.handleChange} />
              {this.renderErrorNumberCard()}
            </Label>

            <Label>
              <p>Nome do Titular:</p>
              <Input type="text" name="name" value={this.state.form.name} onChange={this.handleChange} placeholder="Como no cartão" />
              {this.renderErrorNameCard()}
            </Label>
          </DataCard>

          <Complement>
            <Label>
              <p>Validade (mês/ano):</p>
              <Input type="number" name="valid" value={this.state.form.valid} onChange={this.handleChange} />
              {this.renderErrorValidCard()}
            </Label>

            <Label>
              <p>CVV:</p>
              <Input type="number" name="cvv" value={this.state.form.cvv} onChange={this.handleChange} />
              {this.renderErrorCvvCard()}
            </Label>
          </Complement>
        </form>
      </ContainerForm>
    );
  }

  render() {
    return (
      <div>
        <Header page="payment" />

        <Container>
          <Main>
            <Card title="CARTÃO DE CRÉDITO">
              {this.formCreditCart()}
            </Card>
          </Main>

          <Aside>
            <CardResume resume={this.props.resume} />

            <Link
              text="Finalizar o pedido"
              actionLink={this.onSubmit}
            />
          </Aside>
        </Container>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateCreditCardUser }, dispatch);
}

function mapStateToProps(state) {
  return {
    resume: state.bag.resume
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
