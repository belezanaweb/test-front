import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchCart } from '../actions/CartActions';

import { Link } from 'react-router-dom';


import ProductResume from './components/ProductResume';
/** -----------------------------------------------
 * This class provide the cart view
 * 
 * 
 * Objective
 * - ..

 */
class Cart extends Component {

    constructor(props) {
        super(props);

        this.renderProductList = this.renderProductList.bind(this);
    }

    componentWillMount() {

        this.props.fetchCart();
    }

    componentWillReceiveProps(nextProps) {

    }

    formatCurrency(num) {
        if (num) {
            var num = num.toFixed(2).split('.');
            num[0] = "R$ " + num[0].split(/(?=(?:...)*$)/).join('.');            
            return num[0]+','+num[1];
        }
    }

    render() {

        return (
            <main>
                <div className="container">
                    <nav className="nav-products">
                        <Link to="/" className="active col-xs-4">Sacola</Link>
                        <a className="col-xs-4">Pagamento</a>
                        <a className="col-xs-4">Confirmação</a>
                        <div style={{ clear: 'both'}} />
                    </nav>

                    <div>
                        <h1 className="page-heading">Produtos</h1>
                    </div>

                    <div className="product-list">
                        {this.renderProductList()}
                    </div>

                    <div className="resume">
                        <div className="resume-specification">
                            <label>Produtos</label>
                            <div className="currency">
                                {this.formatCurrency(this.props.subTotal)}
                            </div>
                        </div>
                        <div className="resume-specification">
                            <label>Frete</label>
                            <div className="currency">
                            {this.formatCurrency(this.props.shippingTotal)}
                            </div>
                        </div>
                        <div className="resume-specification prod-discount">
                            <label>Desconto</label>
                            <div className="currency">
                            {this.formatCurrency(this.props.discount)}
                            </div>
                        </div>
                        <div className="resume-specification prod-total">
                            <label>Total</label>
                            <div className="currency">
                            {this.formatCurrency(this.props.total)}
                            </div>
                        </div>
                        <div style={{ clear: 'both'}} />
                    </div>

                    <div className="button">
                        {this.renderBtn()}
                    </div>
                </div>
            </main>

        )
    }

    renderBtn() {
        if( this.props.loading_cart) {
            return (
                <div className="btn-prod-disabled">SEGUIR PARA O PAGAMENTO</div>                
            )
        } else {
            return(
                <Link to="/payment" className="btn-prod">SEGUIR PARA O PAGAMENTO</Link>
            )
        }
    }


    renderProductList() {

        return this.props.items.map((item, i) =>
            <ProductResume key={i} product={item.product} />
        )
    }

}

// Decorate the component with reducer attributes
const mapStateToProps = state => {

    const discount = state.CartReducer.discount;
    const id = state.CartReducer.id;
    const items = state.CartReducer.items;
    const shippingTotal = state.CartReducer.shippingTotal;
    const subTotal = state.CartReducer.subTotal;
    const total = state.CartReducer.total;
    const loading_cart = state.CartReducer.loading_cart;

    return {
        discount,
        id,
        items,
        subTotal,
        shippingTotal,
        total,
        loading_cart
    }
}

//use conector redux to decorate component with variables and methods
export default connect(mapStateToProps, {
    fetchCart,
})(Cart);