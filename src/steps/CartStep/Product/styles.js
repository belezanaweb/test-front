import styled from 'styled-components';

export const Container = styled.div`
	border: 1px solid #eee;
	border-radius: 3px;
	display: grid;
	grid-template-columns: 65px 1fr;
	padding: 0.5rem;
`;

export const Image = styled.img`
	height: 65px;
	width: 65px;
`;

export const Name = styled.h4`
	font-size: 0.825rem;
	font-weight: normal;
	margin: 0px;
	margin-bottom: 0.5rem;
`;

export const Price = styled.h5`
	font-size: 0.875rem;
	font-weight: bold;
	margin: 0px;
	text-align: right;
`;

export const Group = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 0.75rem;
`;
