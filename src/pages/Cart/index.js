import React, { PureComponent } from "react";
import { setPage } from '../../redux/pages/actions';
import { connect } from 'react-redux';
import { Container } from './styles';
import Products from '../../components/Products/';
import Total from '../../components/Total/';
import Button from '../../components/Button/';

class Cart extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount (){
    this.props.setPage('cart');
  }

  render(){
    return(
      <Container>
        <Products titulo={'Produtos'} price={true}/>
        <Total />
        <Button
          text={'Seguir para o pagamento'}
          onClick={()=>{window.location.replace('/payment')}}
        />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  page: state.pageReducer.page
});

export default connect(
  mapStateToProps,
  { setPage }
)(Cart);
