import React from 'react';
import style from './style.scss';

const Loading = () => (
	<>
		<div className="loadContainer">
			<div className="lds-ellipsis">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	</>
);

export { Loading };
