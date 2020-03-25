import React from 'react';

import { Title, Container } from './styles';

export default function Section({ title, children, ...rest }) {
	return (
		<>
			<Title>{title}</Title>
			<Container {...rest}>{children}</Container>
		</>
	);
}
