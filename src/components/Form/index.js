import React, { PureComponent } from "react";
import { Container } from './styles';
import { setNumero, setTitular, setValidade, setCvv } from '../../redux/form/actions';
import { connect } from 'react-redux';

class Form extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      numero: false,
      titular: false,
      validade: false,
      cvv: false,
    };
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  }

  componentDidUpdate(){
    let numero = this.state.numero;
    let titular = this.state.titular;
    let validade = this.state.validade;
    let cvv = this.state.cvv;

    if(!numero && !titular && !validade && !cvv){
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
        if(this.props.form.numero.length < 16 && !regNumero.test(this.props.form.numero)){
          erro = true;
          break;
        }else{
          erro = false;
          break;
        }

      case 'titular':
        if(this.props.form.titular.length < 3){
          erro = true;
          break;
        }else{
          erro = false;
          break;
        }

      case 'validade':
        let regValidade = /\d{2}[\/]\d{4}/;
        if(regValidade.test(this.props.form.validade)){
          erro = false;
          break;
        }else{
          erro = true;
          break;
        }

      case 'cvv':
        let regCvv = /\d{3}/;
        if(regCvv.test(this.props.form.cvv)){
          erro = false;
          break;
        }else{
          erro = true;
          break;
        }

      default:
        break;
    }
    this.setState({[name]: erro});

  }

  render(){
    return(
      <Container className={this.props.className}>
        <h1>Cartão de crédito</h1>

        <form>
          <div className="row">
            <div className="col">
              <label>Número do cartão:</label>
              <input
                value={this.props.form.numero}
                placeholder={'____.____.____.____'}
                onChange={(e)=>{this.props.setNumero(e.target.value)}}
                onBlur={this.validate('numero')}
                className={ this.state.numero ? 'erro' : undefined }
              />
              <p className="erro">{ this.state.numero && 'Invalid Field' }</p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label>Nome do Titular:</label>
              <input
                value={this.props.form.titular}
                placeholder={'Como no cartão'}
                onChange={(e)=>{this.props.setTitular(e.target.value)}}
                onBlur={this.validate('titular')}
                className={ this.state.titular ? 'erro' : undefined }
              />
              <p className="erro">{ this.state.titular && 'Invalid Field'}</p>
            </div>
          </div>

          <div className="row">
            <div className="col w-160">
              <label>Validade (mês/ano):</label>
              <input
                value={this.props.form.validade}
                placeholder={'__/____'}
                onChange={(e)=>{this.props.setValidade(e.target.value)}}
                onBlur={this.validate('validade')}
                className={ this.state.validade? 'erro' : undefined }
              />
              <p className="erro">{ this.state.validade && 'Invalid Field'}</p>
            </div>
            <div className="col w-145">
              <label>CVV:</label>
              <input
                value={this.props.form.cvv}
                placeholder={'___'}
                onChange={(e)=>{this.props.setCvv(e.target.value)}}
                onBlur={this.validate('cvv')}
                className={ this.state.cvv ? 'erro' : undefined }
              />
              <p className="erro">{ this.state.cvv && 'Invalid Field'}</p>
            </div>
          </div>

        </form>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  form: state.formReducer
});

export default connect(
  mapStateToProps,
  { setNumero, setTitular, setValidade, setCvv }
)(Form);
