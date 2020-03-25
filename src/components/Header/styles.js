import styled from 'styled-components';

export const Wrapper = styled.header`
	background-color: #fff;
	box-shadow: 0px 1px 4px rgba(0, 0, 29, 0.22);
`;

export const Container = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin: auto;
	max-width: 576px;
	padding: 0.75rem 1.25rem;
`;

export const StepLabel = styled.h6`
	color: ${props => (props.current ? '#FF7800' : '#CCC')};
	font-size: 0.875rem;
	font-weight: bold;
	margin: 0px;
	text-transform: uppercase;
`;
