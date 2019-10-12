import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import './Cart.scss'

class Cart extends Component {
    render() {
        return (
            <div className='Cart'>
                <Header></Header>
                <h1>Produtos</h1>
                <div className='products-container'>
                    <div className='product'>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart