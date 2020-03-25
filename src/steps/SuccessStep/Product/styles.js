import styled from 'styled-components';

export const Container = styled.div`
	border: 1px solid #eee;
	border-radius: 3px;
	display: grid;
	grid-template-columns: 42px 1fr;
	padding: 0.5rem;
`;

export const Image = styled.img`
	display: block;
	height: 42px;
	margin: auto;
	width: 42px;
`;

export const Name = styled.h5`
	font-size: 0.825rem;
	font-weight: normal;
	margin: 0px;
	margin-left: 0.75rem;
`;
