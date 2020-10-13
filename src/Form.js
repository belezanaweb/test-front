import React from 'react';
import Input from './Input';
import { useNavigate } from 'react-router-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    let navigate = useNavigate();
    navigate('/confirmacao');
    event.preventDefault();
  }

  render() {
    return (
      <div className="cont">
        <form
          onSubmit={this.handleSubmit}
          id="form-cartao"
          action="/confirmacao"
        >
          <Input
            id="nrCartao"
            placeholder="____.____.____.____"
            name="nrCartao"
            label="Número do cartão: "
            value={this.state.value}
            onChange={this.handleChange}
            required
          />
          <Input
            id="nomeTitular"
            placeholder="Como no cartão"
            name="nomeTitular"
            label="Nome do do Titular: "
            required
          />
          <Input
            id="validade"
            placeholder="__/____"
            name="validade"
            label="Validade (mês/ano): "
            required
          />
          <Input id="cvv" name="cvv" placeholder="___" label="CVV: " required />
        </form>
      </div>
    );
  }
}

export default Form;
