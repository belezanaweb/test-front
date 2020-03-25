import styled from 'styled-components';

export const Container = styled.button`
	background: #ff7800;
	border: none;
	border-bottom: 4px solid #d45a00;
	border-radius: 3px;
	color: #fff;
	font-size: 1.25rem;
	font-weight: bold;
	padding: 1.15rem 0.25rem;
	text-align: center;
	text-transform: uppercase;
	transition: background 0.2s ease;
	width: 100%;

	&:hover,
	&:focus {
		background: #d45a00;
	}
`;
