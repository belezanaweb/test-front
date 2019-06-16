import React, { PureComponent, Fragment } from 'react';
import { css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import Cart from '../cart/Cart';
import ImageLazyLoader from '../imageLazyLoader/ImageLazyLoader';
import normalizePrice from '../../../utils/normalizePrice';

import loadProductsMock from './loadProducts.mock.json';

import styles from './styles';
import loading from '../../../assets/images/loading.gif';

class ProductsBox extends PureComponent {

  isRedirect = false;

  isLoading = {};

  isDeleting = {}

  clickedBuy = async (sku) => {

    this.isLoading[sku] = true;
    this.forceUpdate();

    await Cart.add(sku);
    this.isRedirect = '/sacola';
    this.forceUpdate();

  };

  clickedDelete = async (sku) => {

    this.isLoading[sku] = true;
    this.forceUpdate();

    await Cart.delete(sku);
    this.forceUpdate();

  };

  render() {

    if (this.isRedirect) return (<Redirect to={{ pathname: '/sacola' }} />);

    const sharedCart = Cart.shared();
    const cartSkus = [];

    const { isHome } = this.props;
    const sharedObjProducts = isHome ? loadProductsMock : sharedCart;
    const { items } = sharedObjProducts;

    if (isHome && sharedCart.items) {

      for (let i = 0; i < sharedCart.items.length; i += 1) {

        const item = sharedCart.items[i];
        const { sku } = item.product || item;
        cartSkus.push(sku);

      }

    }

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

              if (isHome && cartSkus.indexOf(sku) !== -1) return null;

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
                      <div>
                        <img
                          src={loading}
                          alt=""
                          style={{ visibility: this.isLoading[sku] ? 'visible' : 'hidden' }}
                        />
                      </div>
                      <div
                        className={css(styles.buyButton)}
                        onClick={() => this.clickedBuy(sku)}
                        role="presentation"
                      >
                        Compre
                      </div>
                    </div>
                  )}
                  { /* !isHome && (
                    <div className={css(styles.buyIt)}>
                      <div>
                        <img
                          src={loading}
                          alt=""
                          style={{ visibility: this.isDeleting[sku] ? 'visible' : 'hidden' }}
                        />
                      </div>
                      <div
                        className={css(styles.buyButton)}
                        onClick={() => this.clickedDelete(sku)}
                        role="presentation"
                      >
                        Retire da sacola
                      </div>
                    </div>
                  ) */ }
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
