import React from 'react';

import { Container, Image, Name } from './styles';

export default function Product({ name, imageObjects }) {
	const { medium } = imageObjects[0];

	return (
		<Container>
			<Image src={medium} />
			<Name>{name}</Name>
		</Container>
	);
}
