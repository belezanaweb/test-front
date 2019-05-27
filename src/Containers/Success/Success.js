import React from 'react';
import Auxiliary from '../../Hoc/Auxiliary/Auxiliary';
import Content from '../../Components/Content/Content';
import classes from './Success.module.scss';
import Total from '../../Components/Total/Total';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Item from '../Cart/Item/Item';
import moment from 'moment';
import 'moment/locale/pt-br';

let Success = (props) => {

  const { items, shippingTotal, subTotal, total, discount } = props.cart;


  return (
    <Auxiliary>
      <h2>Pagamento</h2>
      <Content>
        {
          props.user.cardNumber ?
            <Auxiliary>
              <div className={classes.Row}>
                {`****.****.****.${props.user.cardNumber.split('.')[3]}`}
              </div>

              <div className={classes.Row}>
                {props.user.name}
              </div>

              <div className={classes.Row}>
                {moment().format('L')}
              </div>
            </Auxiliary>
          : <div><small>Pagamento não efetuado, retorne a página de pagamento</small></div>
        }
        
      </Content>
      <h2>Produtos</h2>

      <Content>
        {items.map((item, index) =>
          <Item key={index}
            price={item.product.priceSpecification.price}
            name={item.product.name}
            smallImage={item.product.imageObjects["0"].small} />)}
      </Content>

      <Total
        shippingTotal={shippingTotal}
        subTotal={subTotal}
        total={total}
        discount={discount} />
    </Auxiliary>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
  user: state.user
});

export default connect(mapStateToProps, null)(Success);