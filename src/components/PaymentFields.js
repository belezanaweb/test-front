import React, { Component } from 'react';
import { Field } from 'redux-form';
import '../styles/paymentFields.scss';

class PaymentFields extends Component {
    render() {
        return (
            <div className="fields-wrapper">
                <Field name="cardNumber" label="Número do cartão" placeholder="____ ____ ____ ____" component={this.props.renderField} />
                <Field name="personName" label="Nome do titular" placeholder="Como no cartão" component={this.props.renderField} />
                <Field name="expire" label="Validade (mês/ano)" placeholder="__ / ____" component={this.props.renderField} />
                <Field name="cvv" label="CVV" placeholder="___" component={this.props.renderField} />
            </div>
        )
    }
}

export default PaymentFields;