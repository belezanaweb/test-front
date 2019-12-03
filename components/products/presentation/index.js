import React from 'react';
import PropTypes from 'prop-types';
import { ProductItem } from './product-item';
import style from './style.scss';

const Products = props => (
	<>
		<h3 className="productsTitle">PRODUTOS</h3>

		<div className="productsContainer">
			{props.products.map(
				(
					{
						product: {
							imageObjects,
							name,
							sku,
							priceSpecification: { price }
						}
					},
					index
				) => (
					<ProductItem
						imageObjects={imageObjects}
						name={name}
						price={price}
						key={sku}
						mods={props.mods}
					/>
				)
			)}
		</div>
	</>
);

export { Products };
