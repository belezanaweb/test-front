import Products from 'components/Products';
import TotalPriceSummary from 'components/TotalPriceSummary/TotalPriceSummary';

import useStyles from './useStyles';

const Cart = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Products />
      <TotalPriceSummary />
    </div>
  );
};

export default Cart;
