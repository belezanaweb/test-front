import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import CartContext from '../../contexts/CartContext';
import Header from '../../components/Header';
import Section from '../../components/Section';
import Total from '../../components/Total';
import Button from '../../components/Button';
import ProductList from '../../components/ProductList';
import { ContainerContent } from '../../App';

function Cart() {
    const cartContext = useContext(CartContext);
    const history = useHistory();
    const setCart = cartDetails => {
        cartContext.dispatch({ type: "SET_CART", cart: cartDetails });
    };

    async function getCartProducts() {
        try {
            axios
                .get("http://www.mocky.io/v2/5b15c4923100004a006f3c07")
                .then(res => {
                    setCart(res.data)
                });
        } catch{
            alert('unable to load products, try again later.')
        }
    };

    useEffect(() => {
        getCartProducts()
    }, []);

    const goToPayment = () => {
        history.push("/payment")
    }
    return (
        <>
            <Header activeCart={true} />
            <ContainerContent>
                <Section title={'produtos'} component={<ProductList />}></Section>
                <Total />
                <Button text={"seguir para o pagamento"} buttonAction={goToPayment}></Button>
            </ContainerContent>
        </>
    );
}
export default Cart;