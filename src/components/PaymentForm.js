import React, { Component } from "react";
import { Container } from './styles';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {      
      numeroValido: false,
      titularValido: false,
      validadeValido: false,
      cvvValido: false,
    };
  }

  validateForm() {
    let numeroValido = this.state.numeroValido;
    let titularValido = this.state.titularValido;
    let validadeValido = this.state.validadeValido;
    let cvvValido = this.state.cvvValido;
    
    if(!numeroValido && !titularValido && !validadeValido && !cvvValido){
      this.props.disabled(false);
    }else{
      this.props.disabled(true);
    }
  }

  validate = name => event => {
    let erro = false;
    switch (name) {
      case 'numero':
        let regNumero = /\d{4}.\d{4}.\d{4}.\d{4}/;
        if(this.props.numero.length < 16 && !regNumero.test(this.props.numero)){
          erro = true;
          break;
        }else{
          erro = false;
          break;
        }
      case 'titular':
        if(this.props.titular.length < 3){
          erro = true;
          break;
        }else{
          erro = false;          
          break;
        }
      case 'validade':
        let regValidade = /\d{2}[/]\d{4}/;
        if(regValidade.test(this.props.validade)){
          erro = false;
          break;
        }else{
          erro = true;
          break;
        }
      case 'cvv':
        let regCvv = /\d{3}/;
        if(regCvv.test(this.props.cvv)){
          erro = false;
          break;
        }else{
          erro = true;
          break;
        }
      default:
        break;
    }
    this.setState({[name + 'Valido']: erro}, this.validateForm());
    
  }

  render(){
    return(
      <Container>
        <form>
          <div className="row">
            <div className="col">
              <label>Número do cartão:</label>
              <input
                name='numero'
                maxLength='19'
                value={this.props.numero}
                placeholder={'____.____.____.____'}
                onChange={this.props.handleChange}
                onBlur={this.validate('numero')}
                className={ this.state.numeroValido ? 'erro' : undefined }
              />
              <p className="erro">{ this.state.numeroValido && 'Invalid Field' }</p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label>Nome do Titular:</label>
              <input
                name='titular'
                maxLength='50'
                value={this.props.titular}
                placeholder={'Como no cartão'}
                onChange={this.props.handleChange}
                onBlur={this.validate('titular')}
                className={ this.state.titularValido ? 'erro' : undefined }
              />
              <p className="erro">{ this.state.titularValido && 'Invalid Field'}</p>
            </div>
          </div>

          <div className="row">
            <div className="col w-160">
              <label>Validade (mês/ano):</label>
              <input
                name='validade'
                maxLength='7'
                value={this.props.validade}
                placeholder={'__/____'}
                onChange={this.props.handleChange}
                onBlur={this.validate('validade')}
                className={ this.state.validadeValido? 'erro' : undefined }
              />
              <p className="erro">{ this.state.validadeValido && 'Invalid Field'}</p>
            </div>
            <div className="col w-145">
              <label>CVV:</label>
              <input
                name='cvv'
                type='text'
                maxLength='4'
                value={this.props.cvv}
                placeholder={'___'}
                onChange={this.props.handleChange}
                onBlur={this.validate('cvv')}
                className={ this.state.cvvValido ? 'erro' : undefined }
              />
              <p className="erro">{ this.state.cvvValido && 'Invalid Field'}</p>
            </div>
          </div>

        </form>
      </Container>
    )
  }
}

export default Form