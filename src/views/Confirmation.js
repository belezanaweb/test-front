import React, { Component } from 'react';

import { connect } from 'react-redux';

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
                    <nav>
                        <ul>
                            <div>Sacola</div>
                            <div>Pagamento</div>
                            <div className="active">Confirmação</div>
                        </ul>
                    </nav>

                    <div>
                        COMPRA EFETUADA COM SUCESSO
                    </div>

                    <div>
                        <h1>Pagamento</h1>
                    </div>

                    <div className="form-payment">

                        <div>{this.props.card.number}</div>
                        <div>{this.props.card.name}</div>
                        <div>{this.props.card.validate}</div>

                    </div>

                    <div>
                        <h1>Produtos</h1>
                    </div>
                    <div className="product-list">
                        {this.renderProductList()}
                    </div>

                    <div className="resume">
                        <div className="resume-specification">
                            <label>Produtos</label>
                            <div className="currency">
                                {this.props.subTotal}
                            </div>
                        </div>
                        <div className="resume-specification">
                            <label>Frete</label>
                            <div className="currency">
                                {this.props.shippingTotal}
                            </div>
                        </div>
                        <div className="resume-specification">
                            <label>Desconto</label>
                            <div className="currency">
                                {this.props.discount}
                            </div>
                        </div>
                        <div className="resume-specification">
                            <label>Total</label>
                            <div className="currency">
                                {this.props.total}
                            </div>
                        </div>
                    </div>

                    <div className="resume">
                        <div className="resume-specification">
                            <label>Produtos</label>
                            <div className="currency">
                                {this.props.subTotal}
                            </div>
                        </div>
                        <div className="resume-specification">
                            <label>Frete</label>
                            <div className="currency">
                                {this.props.shippingTotal}
                            </div>
                        </div>
                        <div className="resume-specification">
                            <label>Desconto</label>
                            <div className="currency">
                                {this.props.discount}
                            </div>
                        </div>
                        <div className="resume-specification">
                            <label>Total</label>
                            <div className="currency">
                                {this.props.total}
                            </div>
                        </div>
                    </div>

                </div>
            </main>

        )
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