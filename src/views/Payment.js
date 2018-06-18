import React, { Component } from 'react';

import { connect } from 'react-redux';


/** -----------------------------------------------
 * This class provide the Payment view
 * 
 * 
 * Objective
 * - ..

 */
class Payment extends Component {


    constructor(props) {
        super(props);

    }

    render() {

        return (
            <main>
                <div className="container">
                    <nav>
                        <ul>
                            <div>Sacola</div>
                            <div>Pagamento</div>
                            <div>Confirmação</div>
                        </ul>
                    </nav>

                    <div>
                        <h1>Cartão de Crédito</h1>
                    </div>

                    <div className="form-payment">

                        <div class="form-group">
                            <label htmlFor="card-number">Número do Cartão:</label>
                            <input type="text" class="form-control"
                             id="card-number" placeholder="____.____.____.____" />

                        </div>

                        <div class="form-group">
                            <label htmlFor="card-name">Nome do Titular:</label>
                            <input type="text" class="form-control" id="card-name" placeholder="Como no cartão" />

                        </div>

                        <div class="form-group">
                            <label htmlFor="card-validate">Validade (mês/ano):</label>
                            <input type="text" class="form-control" id="card-validate" placeholder="__/____" />

                        </div>

                        <div class="form-group">
                            <label fohtmlForr="card-cvv">Cvv</label>
                            <input type="text" class="form-control" id="card-cvv" placeholder="___" />

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

                    <div className="btn">Finalizar o pedido</div>
                </div>
            </main>
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

})(Payment);