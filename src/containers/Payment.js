import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

const Input = styled.input`
    border: 1px solid #ddd;
    padding-left: 5px;
    width: 300px;
    transition: 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) all;

    &.error {
        border-left: 8px solid #D0021B;
    }

    &.pass {
        border-left: 8px solid #7ED321;
    }

    &:focus {
        border-left: 8px solid #449CFA;
    }
`

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderField = (field) => {
        console.log('what is field', field)
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
            <div>
                <label>{label}:</label>
                <Input className={inputState()} placeholder={field.placeholder} {...field.input} />
            </div>
        )
    }

    onSubmit = (values) => {
        console.log('values', values)
        this.props.history.push('/confirmation')
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field name="cardNumber" label="Número do cartão" placeholder="____ ____ ____ ____" component={this.renderField} />
                <Field name="personName" label="Nome do titular" placeholder="Como no cartão" component={this.renderField} />
                <Field name="expire" label="Validade" placeholder="__ / ____" component={this.renderField} />
                <Field name="cvv" label="CVV" placeholder="___" component={this.renderField} />
                <button type="submit">Finalizar Pedido</button>
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