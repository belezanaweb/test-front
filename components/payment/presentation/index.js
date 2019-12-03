import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

import InputMask from 'react-input-mask';
import { Checkout } from '../../products/presentation/checkout';

class PaymentForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			card: '',
			name: '',
			cardExpiration: '',
			cvv: '',
			nameValid: false,
			cvvValid: false,
			cardExpirationValid: false,
			cardValid: false,
			formValid: false
		};

		this.handleUserInput = this.handleUserInput.bind(this);
	}

	handleUserInput(e) {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({ [name]: value }, () => {
			this.validateField(name, value);
		});
	}

	validateField(fieldName, value) {
		const validator = fieldName + 'Valid';
		if (value.length === 0) {
			this.setState({ [validator]: false }, this.validateForm);
		} else {
			this.setState({ [validator]: true }, this.validateForm);
		}
	}

	validateForm() {
		const isValid =
			this.state.nameValid &&
			this.state.cvvValid &&
			this.state.cardExpirationValid ** this.state.cardValid;
		this.setState({
			formValid: isValid
		});
	}
	render() {
		const { state, handleUserInput, props } = this;

		return (
			<>
				<h3 className="paymentTitle">CARTÃO DE CRÉDITO</h3>

				<div className="paymentContainer">
					<form>
						<div className="formGroup">
							<label htmlFor="card">
								Número do cartão de crédito
							</label>
							<InputMask
								placeholder="____.____.____.____"
								mask="9999.9999.9999.9999"
								type="text"
								className="formControl"
								name="card"
								value={state.card}
								onChange={event => handleUserInput(event)}
							/>
						</div>
						<div className="formGroup">
							<label htmlFor="name">Nome</label>
							<input
								type="text"
								placeholder="Como no cartão"
								className="formControl"
								name="name"
								value={state.name}
								onChange={event => handleUserInput(event)}
							/>
						</div>
						<div className="formGroup">
							<label htmlFor="cardExpiration">Validade</label>
							<InputMask
								mask="99/9999"
								placeholder="__/____"
								type="text"
								className="formControl"
								name="cardExpiration"
								value={state.cardExpiration}
								onChange={event => handleUserInput(event)}
							/>
						</div>
						<div className="formGroup">
							<label htmlFor="cvv">CVV</label>
							<InputMask
								mask="999"
								type="text"
								className="formControl"
								name="cvv"
								value={state.cvv}
								onChange={event => handleUserInput(event)}
							/>
						</div>
					</form>
				</div>
				<Checkout
					{...props.products}
					router={props.router}
					fetchPath={props.fetchPath}
					mods={true}
				/>

				<button
					onClick={() => {
						props.fetchPayment({
							name: state.name.toUpperCase(),
							card: state.card,
							cardExpiration: state.cardExpiration,
							cvv: state.name
						});
						props.router.push('/success');
						props.fetchPath('/success');
					}}
					className="paymentButton"
					disabled={!state.formValid}
				>
					FINALIZAR O PEDIDO
				</button>
			</>
		);
	}
}

export { PaymentForm };
