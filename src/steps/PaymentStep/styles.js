import styled, { css } from 'styled-components';

export const Form = styled.form`
	display: grid;
	grid-gap: 0.375rem;

	label {
		color: #ccc;
		display: block;
		font-size: 0.75rem;
		margin-bottom: 0.375rem;
	}

	input {
		border: 1px solid #e7e7e7;
		border-radius: 3px;
		font-size: 1rem;
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
