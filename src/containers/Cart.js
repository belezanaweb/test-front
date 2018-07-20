import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../actions/index';
import { Link } from 'react-router-dom';

class Cart extends Component {

    componentDidMount() {
        this.props.fetchData()
    }

    renderProducts = () => {
        const { data } = this.props;
        return data.items.map(item => (
            <article id={item.product.sku}>
                <div>
                    <img src={item.product.imageObjects[0].thumbnail} alt={item.product.name} />
                </div>
                <div>
                    <h3>{item.product.name}</h3>
                    <h4>{item.product.priceSpecification.price}</h4>
                </div>
            </article>
        ))
    }

    renderPrice = () => {
        const { data: { discount, shippingTotal, subTotal, total } } = this.props;
        const totalPriceArr = [subTotal, shippingTotal, discount, total];
        const totalTitles = ["produtos", "frete", "desconto", "total"];

        return totalPriceArr.map((info, index) => (
            <div>
                <p>{totalTitles[index]}</p>
                <span></span>
                <p>{info}</p>
            </div>
        ))
    }   

    render() {
        console.log(this.props.data)
        return (
            <main>
                <h6></h6>
                <section>
                    {this.renderProducts()}
                </section>
                <section>
                    {this.renderPrice()}
                </section>
                <Link to='/payment'>proseguir </Link>
            </main>
        ) 
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchData }, dispatch)
} 

const mapStateToProps = (state) => ({
    data: state.fetchedData.items,
    loading: state.fetchedData.loading,
    error: state.fetchedData.error
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
