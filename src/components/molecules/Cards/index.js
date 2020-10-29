import styled from 'styled-components';

const Cards = ({items}) => {
	console.log('items', items)
	if(items?.length){
		return(
			<CardsList>
				{
					items.map((item,i)=>{
						return(
							<li key={i}>{item.product.name}</li>
						)
					})
				}
			</CardsList>
		)
	}else{
		return(
			<div>Nenhum item na sacola</div>
		)
	}
}


export default Cards

const CardsList = styled.ul`
	border:solid red;
	background:#fff;
`;
