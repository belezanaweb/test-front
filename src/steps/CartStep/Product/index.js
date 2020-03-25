import React from 'react';

import parseMoney from '../../../utils/parseMoney';
import { Container, Image, Group, Name, Price } from './styles';

export default function Product({ name, priceSpecification, imageObjects }) {
	const { price } = priceSpecification;
	const { medium } = imageObjects[0];

	return (
		<Container>
			<Image src={medium} />
			<Group>
				<Name>{name}</Name>
				<Price>{parseMoney(price)}</Price>
			</Group>
		</Container>
	);
}
