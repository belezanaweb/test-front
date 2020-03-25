import styled from 'styled-components';

export const Shape = styled.div`
	align-items: center;
	border: 2px solid #ff7800;
	border-radius: 50%;
	display: flex;
	height: 40px;
	justify-content: center;
	margin: auto;
	width: 40px;
`;

export const Title = styled.h2`
	color: #ff7800;
	font-size: 0.875rem;
	font-weight: bold;
	margin: 0.75rem 0px 1.25rem 0px;
	text-align: center;
	text-transform: uppercase;
`;

export const Payment = styled.div`
	display: grid;
	font-size: 0.875rem;
	text-transform: uppercase;
`;

export const Products = styled.div`
	display: grid;
	grid-gap: 1rem;
`;
