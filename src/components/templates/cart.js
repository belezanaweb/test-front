import styled from 'styled-components';
import ButtonCta from '../atoms/buttons/cta';
import {useEffect, useState} from 'react';
import {useSetRecoilState} from 'recoil';
import {cartData} from '../../store/cart'
import TotalTable from '../organism/totalTable';
import ProductsList from '../organism/productsList';

const CartTemplate = ({children}) => {
	const setData= useSetRecoilState(cartData);
	const [loading, setLoading] = useState(true)

	const fetchData = async () => {
		const urlApi = 'http://www.mocky.io/v2/5b15c4923100004a006f3c07'
		await fetch(urlApi)
		.then(function(res) {
			return res.json();
		}).then(function(data) {
			//data do recoil state to maintain persistence of data
			setData(data)
			setLoading(false)
		});

	}

	useEffect(()=>{
		fetchData()
	},[])

	return (
		<Container>
			<ProductsList loading={loading} />
			<TotalTable loading={loading} />
			<ButtonCta>Seguir para o pagamento</ButtonCta>
		</Container>
	)

}
export default CartTemplate

const Container = styled.div`
	display: flex;
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    padding: 9px;
	flex-flow: row wrap;
	color: #212122;

	h2{
		color: #999;
		font-family: "Helvetica Neue";
		font-size: 14px;
		font-weight: 700;
		line-height: 17px;
		margin-bottom:5px;
	}
	section{
		margin-bottom:20px;
		ul{
			width: 100%;
			&.totalTable{
				border-radius: 3px;
  				border: 1px solid #CCC;
				display: flex;
    			flex-flow: row wrap;
				padding:10px;
				  li{
					font-size: 14px;
					line-height: 17px;
					width:100%;
					text-transform:uppercase;
					display:flex;
					justify-content:space-between;
					margin-bottom:10px;
					&.feat{
						color: ${({ theme }) => theme.colors.primary};
						margin-bottom:0;
					}
					&.total{
						font-weight:700;
						margin-bottom:0;
						margin-top:15px;
					}
				  }
			}
		}

	}
`;
