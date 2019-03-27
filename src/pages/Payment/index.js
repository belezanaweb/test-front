import React, { PureComponent } from "react";
import { setPage } from '../../redux/pages/actions';
import { connect } from 'react-redux';
import { Container } from './styles';
import Form from '../../components/Form/';
import Total from '../../components/Total/';
import Button from '../../components/Button/';

class Payment extends PureComponent {

  constructor(props) {
    super(props);
    this.state={
      disabled: true
    }
  }

  componentDidMount (){
    this.props.setPage('payment');
  }

  render(){
    return(
      <Container>
        <Form disabled={(disabled)=>{this.setState({disabled})}}/>
        <Total />
        <Button
          text={'Finalizar o pedido'}
          onClick={()=>{window.location.replace('/confirmation')}}
          disabled={this.state.disabled}
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
)(Payment);
