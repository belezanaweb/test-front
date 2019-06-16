import React, { PureComponent, Fragment } from 'react';
import { css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Cart from '../cart/Cart';
import ImageLazyLoader from '../imageLazyLoader/ImageLazyLoader';
import normalizePrice from '../../../utils/normalizePrice';

import loadProductsMock from './loadProducts.mock.json';

import styles from './styles';

class ProductsBox extends PureComponent {

  isRedirect = false;

  clickedBuy = async (sku) => {

    await Cart.add(sku);
    this.isRedirect = '/sacola';
    this.forceUpdate();

  };

  render() {

    if (this.isRedirect) return (<Redirect to={{ pathname: '/sacola' }} />);

    const { isHome } = this.props;
    const sharedObjProducts = isHome ? loadProductsMock : Cart.shared();
    const { items } = sharedObjProducts;

    return (
      <div className={css(styles.container)}>
        <div className={css(styles.title)}>
          { isHome ? 'ESCOLHA UM PRODUTO' : 'PRODUTOS' }
        </div>
        <div className={css(styles.content)}>
          {
            items.map((item) => {

              const {
                sku,
                name,
                imageObjects,
                priceSpecification,
              } = item.product || item;

              return (
                <Fragment key={sku}>
                  <div className={css(styles.itemContainer)}>
                    <div className={css(styles.itemContent)}>
                      <div className={css(styles.photoDiv)}>
                        <ImageLazyLoader
                          src={imageObjects[0].small}
                          width="64"
                          height="64"
                        />
                      </div>
                      <div className={css(styles.namePriceDiv)}>
                        <div className={css(styles.productName)}>
                          {name}
                        </div>
                        <div className={css(styles.price)}>
                          {normalizePrice(priceSpecification.price)}
                        </div>
                      </div>
                    </div>
                  </div>
                  {isHome && (
                    <div className={css(styles.buyIt)}>
                      <div
                        className={css(styles.buyButton)}
                        onClick={() => this.clickedBuy(sku)}
                        role="presentation"
                      >
                        Compre
                      </div>
                    </div>
                  )}
                </Fragment>
              );

            })

          }
        </div>
      </div>
    );

  }

}

ProductsBox.propTypes = {
  isHome: PropTypes.bool,
};

ProductsBox.defaultProps = {
  isHome: false,
};

export default ProductsBox;
