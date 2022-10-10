import { useContext } from 'react';
import Card from 'components/Card';
import CartContext from 'context/CartContext';

import useStyles from './useStyles';

const Products = () => {
  const classes = useStyles();
  const { cart } = useContext(CartContext);

  return (
    <div>
      <p className={classes.title}>PRODUTOS</p>
      <Card className={classes.card}>
        {cart?.items.map((item) => (
          <div key={item.product.sku} className={classes.productContainer}>
            <img
              className={classes.productImage}
              src={item.product.imageObjects[0].small}
              alt={`Imagem referente ao produto ${item.product.name}`}
            />
            <div className={classes.productInfo}>
              <div className={classes.productName}>{item.product.name}</div>
              <div className={classes.productPrice}>
                {item.product.priceSpecification.originalPrice.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default Products;
