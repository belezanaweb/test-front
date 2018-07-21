import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions/index';
import { Link } from 'react-router-dom';
import CartProducts from '../components/CartProducts';
import CartPrice from '../components/CartPrice';
import '../styles/cart.scss';

class Cart extends Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        console.log(this.props.data)
        return (
            <div className="cart">
                <h6>Produtos</h6>
                <section className="cart-products">
                    <CartProducts data={this.props.data} />  
                </section>
                <section className="cart-price">
                    <CartPrice data={this.props.data} />
                </section>
                <Link className="advance-btn" to='/payment'>Seguir para pagamento</Link>
            </div>
        ) 
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchData }, dispatch)
} 

const mapStateToProps = (state) => ({
    data: state.fetchedData.items
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
