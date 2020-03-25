import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const Container = styled(InputMask)`
	border: 1px solid ${props => (props.error ? '#FF7800 !important' : '#e7e7e7')};
	border-radius: 3px;
	font-size: 1rem;
	letter-spacing: 1px;
	padding: 0.75rem;
	transition: border-color 0.2s ease;
	width: 100%;

	&::placeholder {
		color: #e0e7ee;
		letter-spacing: 1px;
	}

	&:hover,
	&:focus {
		border-color: #a43287;
	}
`;
