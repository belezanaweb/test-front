import React from 'react';

import { Container } from './styles';

export default function Button({ text, onClick }) {
	return <Container onClick={onClick}>{text}</Container>;
}
