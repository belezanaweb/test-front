import Button from 'components/Button';
import Products from 'components/Products';
import TotalPriceSummary from 'components/TotalPriceSummary';
import { useNavigate } from 'react-router-dom';

import useStyles from './useStyles';

const Cart = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <Products />
      <TotalPriceSummary />
      <Button onClick={() => navigate('/pagamento')}>SEGUIR PARA O PAGAMENTO</Button>
    </div>
  );
};

export default Cart;
