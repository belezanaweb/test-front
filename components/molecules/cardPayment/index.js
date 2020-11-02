
import Inputs from '../../atoms/inputs'
import { useEffect,useState } from 'react';
import styled from 'styled-components';
const CardPayment = ({children, isValid}) => {


	return (
		<section >
			<h2>Cartão de Crédito</h2>
            <Formulario id='credit'>
                <fieldset>
                    <label>Número do Cartão:</label>
                    <Inputs required withMask={true} id='nbCC' type='text' />
                </fieldset>
                <fieldset>
                    <label>Nome do Titular:</label>
                    <Inputs required id='name' type='text' placeholder='Como no cartão' />
                </fieldset>
                <fieldset className='half'>
                    <label>Validade:</label>
                    <Inputs required  id='date' withMask={true} type='date' placeholder='--/----' />
                </fieldset>
                <fieldset className='half'>
                     <label>CVV:</label>
                    <Inputs required id='ccv'  withMask={true} type='number' placeholder='---'/>
                </fieldset>
                {children}
            </Formulario>
		</section>
	)
}

export default CardPayment


const Formulario = styled.form`
    background:#fff;
    height: 279px;
    width:100%;
    display:flex;
    padding:10px;
    box-sizing:border-box;
    flex-flow:row wrap;
    fieldset{
        border:none;
        margin:0;
        padding:0;
        margin-bottom:25px;
        width:100%;
        position:relative;
        &.error{
            label{
                &:after{
                    content:'Campo inválido';
                    display: flex;
                    color: red;
                    position: absolute;
                    bottom: -17px;
                    font-weight: 500;
                    font-size: 12px;
                    
                }
            }
            input{
                border:solid 1px red;
            }
        }
        &.half{
            width:48%;
            &:last-child{
                margin-left:4%;
            }
        }
        label{
            color: #CCC;
            font-size: 12px;
            font-weight: 700;
            line-height: 14px;
        }
        input{
            box-sizing: border-box;
            height: 45px;
            width: 100%;
            min-width:100%;
            margin:0;
            border-radius: 3px;
            background-color: #FFF;
            background:#fff;
            border: 1px solid #E7E7E7;
            box-shadow: inset 0 1px 2px 0 rgba(0,0,0,0.2);
            padding-left:13px;
            color: #212121;
            font-size: 16px;
            line-height: 19px;
            &:focus{
                border: 1px solid #A43287;
                outline:none;

            }
           
        }
      
    }
`;