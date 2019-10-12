import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import { Title, CartPage, ProductContainer } from './style'

class Cart extends Component {
    render() {
        return (
            <CartPage>
                <Header></Header>
                <Title>Produtos</Title>
                <ProductContainer>
                    <div className='product'>
                    </div>
                </ProductContainer>
            </CartPage>
        )
    }
}

export default Cart