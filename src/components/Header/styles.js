import styled from 'styled-components';

export const Container = styled.header`
	align-items: center;
	background-color: #fff;
	box-shadow: 0px 1px 4px rgba(0, 0, 29, 0.22);
	display: flex;
	justify-content: space-between;
	padding: 0.75rem 1.25rem;
`;

export const StepLabel = styled.h6`
	color: ${props => (props.current ? '#FF7800' : '#CCC')};
	font-size: 0.875rem;
	font-weight: bold;
	margin: 0px;
	text-transform: uppercase;
`;
