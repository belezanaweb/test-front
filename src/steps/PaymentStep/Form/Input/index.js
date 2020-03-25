import React, { useState, useRef, useCallback } from 'react';
import { connect } from 'react-redux';

import { Container } from './styles';

function Input({ id, validator, mask, placeholder, dispatch }) {
	const ref = useRef();
	const [error, setError] = useState(false);
	const handleBlur = useCallback(() => {
		const value = ref.current.getInputValue();
		const valid = validator(value);
		setError(!valid);
		dispatch({
			type: 'SET_INPUT_STATUS',
			input: {
				id,
				valid
			}
		});
	}, [dispatch, id, validator]);

	return (
		<Container
			mask={mask}
			id={id}
			placeholder={placeholder}
			error={error ? 1 : 0}
			ref={ref}
			onBlur={handleBlur}
		/>
	);
}

export default connect()(Input);
