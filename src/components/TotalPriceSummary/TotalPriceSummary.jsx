import TransparentCard from 'components/TransparentCard';
import CartContext from 'context/CartContext';
import { useMemo } from 'react';
import { useContext } from 'react';
import useStyles from './useStyles';

const TotalPriceSummary = () => {
  const classes = useStyles();
  const { cart } = useContext(CartContext);
  const totalPrice = useMemo(() => {
    if (!cart) {
      return 0;
    }

    return cart.subTotal + cart.shippingTotal - cart.discount;
  }, [cart]);

  return (
    <TransparentCard>
      <div>
        <div className={classes.labeledValue}>
          <span>PRODUTOS</span>
          <span>
            {cart?.subTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
        <div className={classes.labeledValue}>
          <span>FRETE</span>
          <span>
            {cart?.shippingTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
        <div className={classes.labeledValue}>
          <span>DESCONTO</span>
          <span>
            - {cart?.discount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
        <div className={classes.labeledValue}>
          <span>TOTAL</span>
          <span>
            {totalPrice.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL'
            })}
          </span>
        </div>
      </div>
    </TransparentCard>
  );
};

export default TotalPriceSummary;
