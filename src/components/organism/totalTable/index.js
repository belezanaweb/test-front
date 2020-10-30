import { useEffect } from 'react';
import {useRecoilValue} from 'recoil';
import {cartData} from '../../../store/cart'

const TotalTable = ({loading}) => {
	const {subTotal, shippingTotal, discount,total, id} = useRecoilValue(cartData)
	useEffect(()=>{},[])

	return (
		<section>
			<ul className='totalTable'>
				{!!loading && <li>...loading</li>}
				{!!id &&
					<>
						<li>Produtos <span>{subTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</span></li>
						<li>Frete  <span>{shippingTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</span></li>
						{!!discount && <li className='feat'>Desconto <span> - {discount.toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</span></li>}
						<li className='total'>Total  <span>{total.toLocaleString('pt-BR', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</span></li>
					</>
				}
			</ul>
		</section>
	)

}

export default TotalTable
