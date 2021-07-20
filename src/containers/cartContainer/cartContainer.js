import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CartList } from '../../commons/cartList';
import { Title } from '../../commons/title';
import { PriceSummary } from '../../commons/priceSummary';
import { Button } from '../../commons/button';
import './cartContainer.css';

const component = ({ products }) => {
  return (
    <div className="cart">
      <Title text="PRODUTOS" />
      <CartList items={products.items} />
      <PriceSummary
        subTotal={products.subTotal}
        shippingTotal={products.shippingTotal}
        discount={products.discount}
        total={products.total}
      />
      <Link to="/payment">
        <Button text="SEGUIR PARA O PAGAMENTO" />
      </Link>
    </div>
  );
};

const CartContainer = connect((state) => ({ products: state.products }))(component);

export { CartContainer };
