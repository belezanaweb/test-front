import React, { Component } from 'react';
import { Field } from 'redux-form';
import { normalizeCardNum, normalizeCardExp, normalizeCardCvv } from '../services/normalizeFields';
import '../styles/paymentFields.scss';

class PaymentFields extends Component {

    upper = value => value && value.toUpperCase()

    render() {
        return (
            <section className="form-fields">
                <div className="fields-wrapper">
                    <Field name="cardNumber" label="Número do cartão" placeholder="____ ____ ____ ____" component={this.props.renderField} normalize={normalizeCardNum} />
                    <Field name="personName" label="Nome do titular" placeholder="Como no cartão" component={this.props.renderField} normalize={this.upper} />
                    <Field name="expire" label="Validade (mês/ano)" placeholder="__ / ____" component={this.props.renderField} normalize={normalizeCardExp} />
                    <Field name="cvv" label="CVV" placeholder="___" component={this.props.renderField} normalize={normalizeCardCvv} />
                </div>
            </section>
        )
    }
}

export default PaymentFields;