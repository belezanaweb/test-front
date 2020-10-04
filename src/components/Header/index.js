import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {Container, SpanCart, SpanPayment, SpanSuccess} from './styles';

function Header(props) {
    const history = useHistory();

    useEffect(() => {
    }, []);

    const goToCart = () => {
        history.push("/cart")
    }
    const goToPayment = () => {
        history.push("/payment")
    }
    const goToSuccess = () => {
        history.push("/success")
    }
    return (
        <Container>
            <SpanCart active={props.activeCart} onClick={goToCart} >sacola</SpanCart>
            <SpanPayment active={props.activePayment} onClick={goToPayment}>pagamento</SpanPayment>
            <SpanSuccess active={props.activeSuccess} onClick={goToSuccess}>confirmação</SpanSuccess>
        </Container>
    );
}
export default Header;