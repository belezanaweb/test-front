import styled from 'styled-components';
import {useEffect} from 'react'
const Cards = ({items, loading}) => {

	useEffect(()=>{},[])
	if(!!loading){
		return(
			<div>...load cards</div>
		)
	}else if(items?.length){
		return(
			<CardsList>
				{
					items.map((item,i)=>{
						const {imageObjects,priceSpecification,name} = item.product
						return(
							<li key={i}>
								<a href='/' target='_blank'>
									<img width='65' height='65' src={ imageObjects[0].small } />
									<span>
										<p>{name}</p>
										<b>{priceSpecification.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</b>
									</span>
								</a>
							</li>
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
	background: #fff;
	padding: 10px;
	box-sizing: border-box;
	box-shadow: 0 1px 5px rgba(0,0,29,0.22);
	border-radius: 3px;
	li{
		border:solid 1px #eee;
		border-radius:3px;
		min-height:90px;
	    display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom:10px;
		&:last-child{
			margin-bottom:0;
		}

		a{
			display: flex;
			flex-flow: row;
			width: 100%;
			height: 65px;
			margin: 10px;
			box-sizing:border-box;
			text-decoration:none;

			img{
				margin-right:11px;
			}
			span{
				color: #212122;
				display: flex;
				flex-flow: row wrap;
				align-content: space-between;
				align-items: flex-start;
				p{
					font-size: 13px;
					line-height: 16px;
					width:100%;
					overflow: hidden;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					margin:0;

				}
				b{
					width:100%;
					font-size: 14px;
					font-weight: 700;
					line-height: 17px;
					text-align: right;
				}
			}

		}
	}
`;
