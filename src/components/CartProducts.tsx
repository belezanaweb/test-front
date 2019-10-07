import * as React from 'react';
import { createJssStyle } from '../helper/styler';
import { Card } from './Card';
import { IProduct } from '../service/interfaces/IProduct';
import { CartItem } from './CartItem';
// ---------------------------------------------------------------------
// --- STYLE -----------------------------------------------------------
// ---------------------------------------------------------------------
const { classes } = createJssStyle(_ => ({}));
// ---------------------------------------------------------------------
// --- COMPONENT -------------------------------------------------------
// ---------------------------------------------------------------------
export class CartProducts extends React.Component<IProps> {
  render() {
    const { items } = this.props;
    return (
      <Card>
        {items.map((item, index) => (
          <CartItem
            key={index}
            name={item.product.name}
            originalPrice={item.product.priceSpecification.originalPrice}
            thumbnail={item.product.imageObjects[0].thumbnail}
          />
        ))}
      </Card>
    );
  }
}

interface IProps {
  items: IProduct[];
}
