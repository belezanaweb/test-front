import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConfirmationValues from '../components/ConfirmationValues';
import CartProducts from '../components/CartProducts';
import CartPrice from '../components/CartPrice';
import '../styles/confirmation.scss';
import Icon from 'svg-react-loader?name=Icon!../icons/success.svg';
//import Svg from '../icons/success.svg';

//const SVG = require('../icons/success.svg')

class Confirmation extends Component {
    render() {
        return (
            <div className="confirmation">
                <Icon className="success-icon"/>
                <h2 className="success-title">Compra efetuada com sucesso</h2>
                <h6>Pagamento</h6>
                <ConfirmationValues cardValues={this.props.cardValues}/>
                <h6>Produtos</h6>
                <CartProducts data={this.props.data} />  
                <CartPrice data={this.props.data} />
            </div>
        ) 
    }
}

const mapStateToProps = (state) => ({
    cardValues: state.form.PaymentForm.values,
    data: state.fetchedData.items,
})

export default connect(mapStateToProps)(Confirmation);