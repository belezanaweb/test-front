import styled from 'styled-components';

export const Container = styled.section`
	border: 1px solid #ccc;
	border-radius: 3px;
	display: grid;
	grid-gap: 0.5rem;
	margin: 1.25rem 0px;
	padding: 0.875rem;
	text-transform: uppercase;
`;

export const Group = styled.div`
	color: ${props => (props.discount ? '#FF7800' : '#212122')};
	display: flex;
	font-size: 0.875rem;
	justify-content: space-between;
`;
