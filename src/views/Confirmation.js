import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import ProductResume from './components/ProductResume';
/** -----------------------------------------------
 * This class provide the Confirmation view
 * 
 * 
 * Objective
 * - ..

 */
class Confirmation extends Component {

    constructor(props) {
        super(props);

        this.renderProductList = this.renderProductList.bind(this);
    }

    render() {

        return (
            <main>
                <div className="container">
                    <nav className="nav-products">
                        <Link to="/" className="col-xs-4">Sacola</Link>
                        <Link to="/payment" className="col-xs-4">Pagamento</Link>
                        <Link to="/confirmation" className="active col-xs-4">Confirmação</Link>
                        <div style={{ clear: 'both' }} />
                    </nav>

                    <div className="confirmation-box">
                        <i className="fa fa-check-circle-o confirmation-icon" aria-hidden="true"></i>
                        <div className="confirmation-label">Compra efetuada com sucesso</div>
                    </div>
                    
                    <div>
                        <h1 className="page-heading">Pagamento</h1>
                    </div>


                    <div className="form-payment">

                        <div>****.****.****.{this.props.card.number.substr(-4)}</div>
                        <div>{this.props.card.name}</div>
                        <div>{this.props.card.validate}</div>

                    </div>

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
                        <div style={{ clear: 'both' }} />
                    </div>

                </div>
            </main>

        )
    }

    
    formatCurrency(num) {
        if (num) {
            var num = num.toFixed(2).split('.');
            num[0] = "R$ " + num[0].split(/(?=(?:...)*$)/).join('.');
            return num[0] + ',' + num[1];
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

    const card = state.PaymentReducer.card;
    console.log('card', card);

    return {
        discount,
        id,
        items,
        subTotal,
        shippingTotal,
        total,
        loading_cart,
        card
    }
}


//use conector redux to decorate component with variables and methods
export default connect(mapStateToProps, {

})(Confirmation);