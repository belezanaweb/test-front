import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PaymentFields from '../components/PaymentFields';
import CartPrice from '../components/CartPrice';
import '../styles/payment.scss';
import styled from 'styled-components';

const Input = styled.input`
    transition: 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) all;
    box-sizing: border-box;
    box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);

    &.error {
        border: 1px solid #F30;	    
    }

    &.pass {
        border: 1px solid #59E035;	
    }

    &:focus {
        border: 1px solid #A43287;
        outline: none;
    }
`

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderField = (field) => {
        const { meta: { touched, error }, input: { value }, label } = field;

        const inputState = () => {
            if (error) {
                return 'error'
            } else if (touched && value) {
                return 'pass'
            } else {
                return ''
            }
        }
        
        return (
            <div className="input-field__wrapper">
                <label>{label}:</label>
                <Input className={`input-field ${inputState()}`} placeholder={field.placeholder} {...field.input} />
            </div>
        )
    }

    onSubmit = (values) => {
        this.props.history.push('/confirmation')
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)} className="form">
                <h6>Cartão de crédito</h6>
                <PaymentFields renderField={this.renderField} />
                <CartPrice data={this.props.data} />
                <button className="advance-btn" type="submit">Finalizar Pedido</button>
            </form>
        )
    }
}

const validate = (values) => {
    const errors = {}
    if (!values.cardNumber) {
        errors.cardNumber = "Enter a card number!"
    }
    if (!values.personName) {
        errors.personName = "Enter a person name!"
    }
    if (!values.expire) {
        errors.expire = "Enter a expire date!"
    }
    if (!values.cvv) {
        errors.cvv = "Enter a cvv!"
    }

    return errors
} 

const mapStateToProps = (state) => ({
    data: state.fetchedData.items,
    loading: state.fetchedData.loading,
    error: state.fetchedData.error
})

Payment = connect(mapStateToProps)(Payment);

export default reduxForm({
    validate,
    form: 'PaymentForm',
    destroyOnUnmount: false
})(Payment);