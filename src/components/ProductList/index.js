import React, { useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import CartContext from '../../contexts/CartContext'
import ProductCard from '../ProductCard'
import { Container, ContentContainer } from './styles';

function ProductList(props) {
    const history = useHistory();
    const cartContext = useContext(CartContext);

    useEffect(() => {
        if(!cartContext.cart.items){
            history.push("/cart")
        }
    }, [cartContext.cart.items, history]);

    return (
        <Container>
            <ContentContainer>
                {cartContext.cart.items && cartContext.cart.items.map((item) => {
                    return (
                        <ProductCard key={item.product.name} product={item.product} themeType={props.themeType}/>
                    )
                })}
            </ContentContainer>
        </Container>
    );
}
export default ProductList;