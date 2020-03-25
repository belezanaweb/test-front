import styled, { css } from 'styled-components';

export const Container = styled.form`
	display: grid;
	grid-gap: 0.375rem;

	label {
		color: #ccc;
		display: block;
		font-size: 0.75rem;
		margin-bottom: 0.375rem;
	}
`;

const grid = css`
	display: grid;
	grid-template-columns: 55.3% 44.7%;
`;

export const Group = styled.div`
	${props => props.container && grid};
	margin-right: ${props => (props.mr ? '1.25rem' : '0px')};
`;
