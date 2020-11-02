
import Cards from '../cards'
import { useEffect } from 'react';

import {useRecoilValue} from 'recoil';
import {cartData} from '../../../store/cart'

const ProductsList = ({children, loading}) => {
	const {items} = useRecoilValue(cartData)
	return (
		<section >
			<h2>PRODUTOS</h2>
			 <Cards loading={loading} items={items}/>
		</section>
	)
}

export default ProductsList
