import styled from 'styled-components';
import {useEffect, useState} from 'react';
import {useSetRecoilState} from 'recoil';
import {userData} from '../../../store/cart'
import Container from '../../atoms/container';
import ButtonCta from '../../atoms/buttons/cta';
import TotalTable from '../../molecules/totalTable';
import CardPayment from '../../molecules/cardPayment'
import validation from '../../../helpers/validation'



const PaymentTemplate = ({children, handleSubmit}) => {

	const setUserData = useSetRecoilState(userData)
	//Test if forms are valid on Submit button;
	const handleFormSubmit = e =>{
		e.preventDefault();
		const crediCardNumber = document.getElementById('nbCC')
		const cardName = document.getElementById('name')
		const cardDate = document.getElementById('date')
		const ccvCard = document.getElementById('ccv')
		

		var id;
		var val;
		var parent;
		var isValid = [];
	

		if(!!crediCardNumber){
			id = crediCardNumber.id
			val =crediCardNumber.value
			parent = crediCardNumber.parentElement


			isValid.push(validation.inputs(id, val, parent))
		}
		if(!!cardName){
			id = cardName.id
			val =cardName.value
			parent = cardName.parentElement
		
			isValid.push(validation.inputs(id, val, parent))
		}
		if(!!cardDate){
			id = cardDate.id
			val =cardDate.value
			parent = cardDate.parentElement
			isValid.push(validation.inputs(id, val, parent))
		}
		if(!!ccvCard){
			id = ccvCard.id
			val =ccvCard.value
			parent = ccvCard.parentElement
			isValid.push(validation.inputs(id, val, parent))
		}
		if(!isValid.includes(false)){
			handleSubmit(e)
			setUserData({nome:  cardName.value, numero: crediCardNumber.value.slice(crediCardNumber.value.length - 5),validade: cardDate.value})
		}
		
	}
	
	return (
		<Container>
         <div className='skel_CardPayment'></div>
            <CardPayment/>
            <TotalTable />
            <ButtonCta id='pay' onClick={(e)=>handleFormSubmit(e)}>Finalizar o Pedido</ButtonCta> 
		</Container>
	)
}

export default PaymentTemplate
