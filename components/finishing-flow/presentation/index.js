import React from 'react';
import { Success } from './success';
import PropTypes from 'prop-types';
import style from './style.scss';
import { cardOcultNumber } from './helper';
const FinishingFlow = props => (
	<>
		<Success />
		<h3 className="finishingFlowTitle">PAGAMENTO</h3>
		<div className="finishingFlowContainer">
			<p>{'****.****.****.' + cardOcultNumber(props.payInfo.card)}</p>
			<p>{props.payInfo.name}</p>
			<p>{props.payInfo.cardExpiration}</p>
		</div>
	</>
);

export { FinishingFlow };
