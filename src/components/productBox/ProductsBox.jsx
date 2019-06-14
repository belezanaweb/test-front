import React from 'react';
import { css } from 'aphrodite/no-important';
import PropTypes from 'prop-types';

import ImageLazyLoader from '../../common/imageLazyLoader/ImageLazyLoader';
import normalizePrice from '../../utils/normalizePrice';
import styles from './styles';

const ProductsBox = (props) => {

  const { items } = props;

  return (
    <div className={css(styles.container)}>
      <div className={css(styles.title)}>
      PRODUTOS
      </div>
      <div className={css(styles.content)}>
        {
          items.map((item) => {

            const {
              sku,
              name,
              imageObjects,
              priceSpecification,
            } = item.product;

            return (
              <div
                className={css(styles.itemContainer)}
                key={sku}
              >
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
            );

          })

        }
      </div>
    </div>
  );

};

ProductsBox.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ProductsBox;
