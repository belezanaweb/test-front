import React from 'react';
import { imageThumbHelper, formatLocaleCurrency } from '../helpers';
import PropTypes from 'prop-types';
import style from './style.scss';

const ProductItem = props => (
	<>
		<div className="productItemContainer">
			<div className="productContent">
				<img src={imageThumbHelper(props.imageObjects)}></img>
				<div className="productTextContent">
					<p className="productText">{props.name}</p>
					{!props.mods && (
						<p className="productPrice">
							{formatLocaleCurrency(props.price)}
						</p>
					)}
				</div>
			</div>
		</div>
	</>
);

export { ProductItem };
