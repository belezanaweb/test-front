import React, { PureComponent, Fragment } from "react";
import { setPage } from '../../redux/pages/actions';
// import { setValido } from '../../redux/form/actions';
import { connect } from 'react-redux';
import { Container } from './styles';
import Products from '../../components/Products/';
import Total from '../../components/Total/';
import CHECK from '../../assets/img/check.png';

class Confirmation extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount (){
    this.props.setPage('confirmation');
  }

  render(){
    return(
      <Container>
        {
          this.props.form.numero != '' &&
          this.props.form.titular != '' &&
          this.props.form.numero != '' &&

        <Fragment>
          <div className="banner-info">
            <div className="ico"><img src={CHECK} /></div>
            <p>Compra efetuada com sucesso</p>
          </div>

          <div className="dados-pagamento">
            <h1>Pagamento</h1>
            <div className="cartao">
              <p className="cartao-numero">{this.props.form.numero}</p>
              <p className="cartao-titular">{this.props.form.titular}</p>
              <p className="cartao-validade">{this.props.form.validade}</p>
            </div>
          </div>
        </Fragment>
        }

        <Products titulo={'Produtos'} preco={false}/>
        <Total />

      </Container>
    )
  }
}

const mapStateToProps = state => ({
  page: state.pageReducer.page, form: state.formReducer
});

export default connect(
  mapStateToProps,
  { setPage }
)(Confirmation);
