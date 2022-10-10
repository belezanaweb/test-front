import { useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';

import Card from 'components/Card';
import Products from 'components/Products';
import TotalPriceSummary from 'components/TotalPriceSummary';
import CartContext from 'context/CartContext';

import useStyles from './useStyles';

const Confirmation = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { confirmation } = useContext(CartContext);

  useEffect(() => {
    if (!confirmation) {
      navigate('/pagamento');
    }
  }, [confirmation, navigate]);

  return (
    <div className={classes.root}>
      <div className={classes.feedbackContainer}>
        <div className={classes.feedbackImage} />
        <div className={classes.feedbackMessage}>COMPRA EFETUADA COM SUCESSO</div>
      </div>
      <div>
        <p className={classes.title}>PAGAMENTO</p>
        <Card className={classes.card}>
          <div className="mb-1">****.****.****.{confirmation?.cardNumber.slice(-5)}</div>
          <div className="mb-1">{confirmation?.name.toUpperCase()}</div>
          <div>{confirmation?.date}</div>
        </Card>
      </div>
      <Products />
      <TotalPriceSummary />
    </div>
  );
};

export default Confirmation;
