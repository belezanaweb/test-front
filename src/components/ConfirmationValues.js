import React, { Component } from 'react';
import '../styles/Confirmation/confirmationValues.scss';

class ConfirmationValues extends Component {
    render() {
        const { cardValues } = this.props;
        return (
            <section className="confirmation-infos">
                <div className="confirmation-values">
                    <h4>{cardValues.cardNumber.replace(/.(?=.{4})/g, '*')}</h4>
                    <h4>{cardValues.personName}</h4>
                    <h4>{cardValues.expire}</h4>
                </div>
            </section>
        )
    }
}

export default ConfirmationValues;