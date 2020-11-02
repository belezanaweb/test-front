import styled from 'styled-components';
import {useEffect, useState} from 'react';
import {useSetRecoilState} from 'recoil';
import {cartData} from '../../../store/cart';
import TotalTable from '../../molecules/totalTable';
import ProductsList from '../../molecules/productsList';
import ButtonCta from '../../atoms/buttons/cta';
import Container from '../../atoms/container'
const CartTemplate = ({children, handleSubmit}) => {

	return (
		<Container>
			<ProductsList  />
			<TotalTable  />
			<ButtonCta id='cart' onClick={handleSubmit}>Seguir para o pagamento</ButtonCta>
		</Container>
	)

}
export default CartTemplate

