import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const Success = props => (
	<>
		<div className="successContainer">
			<div className="checkContainer">
				<span className="successCheck">✓</span>
			</div>
			<h3 className="success">COMPRA EFETUADA COM SUCESSO</h3>
		</div>
	</>
);

export { Success };
