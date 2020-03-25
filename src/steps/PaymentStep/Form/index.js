import React from 'react';

import Input from './Input';
import { Container, Group } from './styles';

import { CardNumber, Name, Expiration, Cvv } from './validators';

export default function Form() {
	return (
		<Container>
			<Group>
				<label htmlFor="number">Número do cartão:</label>
				<Input
					id="number"
					mask="9999.9999.9999.9999"
					placeholder="____.____.____.____"
					validator={CardNumber}
				/>
			</Group>
			<Group>
				<label htmlFor="name">Nome do Titular:</label>
				<Input id="name" placeholder="Como no cartão" validator={Name} />
			</Group>
			<Group container>
				<Group mr>
					<label htmlFor="expiration">Validade (mês/ano):</label>
					<Input
						id="expiration"
						mask="99/9999"
						placeholder="__/____"
						validator={Expiration}
					/>
				</Group>

				<Group>
					<label htmlFor="cvv">CVV:</label>
					<Input id="cvv" mask="999" placeholder="___" validator={Cvv} />
				</Group>
			</Group>
		</Container>
	);
}
