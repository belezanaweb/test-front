import styled from 'styled-components';
import ButtonCta from '../../atoms/buttons/cta';
import {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import {cartData} from '../../../store/cart'
import Cards from '../../molecules/Cards'
const CartContainer = ({children}) => {
	const [data, setData] = useRecoilState(cartData);
	const [loading, setLoading] = useState(true)
	const fetchData = async () => {
		const urlApi = 'http://www.mocky.io/v2/5b15c4923100004a006f3c07'
		await fetch(urlApi)
		.then(function(res) {
			return res.json();
		}).then(function(data) {
			//data do recoil state to maintain persistence of data
			console.log(data);
			setData(data)
			setLoading(false)
		});

	}

	useEffect(()=>{
		fetchData()
	},[])

	return (
		<Container>
			<section >
				<h2>PRODUTOS</h2>
				{!loading && <Cards items={data.items}/>}
			</section>
			<ButtonCta>Seguir para o pagamento</ButtonCta>
		</Container>
	)

}
export default CartContainer

const Container = styled.div`
	display: flex;
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    padding: 9px;
	flex-flow: row wrap;
	h2{
		color: #999;
		font-family: "Helvetica Neue";
		font-size: 14px;
		font-weight: 700;
		line-height: 17px;
		margin-bottom:5px;
	}
	section{

	}
`;
