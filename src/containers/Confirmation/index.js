import React, { useEffect } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import Card from '../../components/Card';
import CardProduct from '../../components/CardProduct';
import CardTotalShipping from '../../components/CardTotalShipping';
import sucess from './success.png';
import { routes } from "../Router";
import { setCurrentPage } from '../../actions/menu';
import { push } from 'connected-react-router';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EEE;
    height: 720px;
`
const PaymentDate = styled.div`
    height: 68px;
    width: 310px;

`
const Data = styled.div`
    color: #000;
    font-family: "Helvetica Neue";
    line-height: 17px;
    padding-top: 0.5vh;
`
const Img = styled.img`
    height: 67.57px;
    width: 266.27px;
    padding-top: 2vh;
    padding-bottom: 1vh;
`

const ConfirmationShippingPage = (props) => {

    useEffect(() => {
        if (props.currentPage === routes.root) {
            props.goToCart()
        }
    })

    return (
        <Container>
            <Img src={sucess}/>
            <Card title="PAGAMENTO">
                <PaymentDate>
                    <Data>
                        ****.****.****.{props.payment && props.payment.numberCard && props.payment.numberCard.substring(15)} 
                    </Data>
                    <Data>
                        {props.payment && props.payment.nameCardholder && props.payment.nameCardholder.toUpperCase()} 
                    </Data>
                    <Data>
                        {props.payment && props.payment.validity} 
                    </Data>
                </PaymentDate>
            </Card>
            <CardProduct products={props.cart.items} height="40%"/>
            <CardTotalShipping />
        </Container>
    )
} 

const mapStateToProps = state => {
    return {
        payment: state.cart.payment,
        cart: state.cart.cart,
        currentPage: state.menu
    }
}

const mapDispatchToProps = dispatch => ({
    goToCart: () => dispatch(push(routes.root))
})
  

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationShippingPage)