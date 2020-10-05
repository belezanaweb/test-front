import React from 'react';
import {Container, SpanCart, SpanPayment, SpanSuccess} from './styles';

function Header(props) {
    return (
        <Container>
            <SpanCart active={props.activeCart}>sacola</SpanCart>
            <SpanPayment active={props.activePayment}>pagamento</SpanPayment>
            <SpanSuccess active={props.activeSuccess}>confirmação</SpanSuccess>
        </Container>
    );
}
export default Header;