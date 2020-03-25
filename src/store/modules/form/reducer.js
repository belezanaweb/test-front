export default function form(
	state = {
		inputs: {},
		valid: false
	},
	action
) {
	switch (action.type) {
		case 'SET_INPUT_STATUS':
			const { id, valid } = action.input;
			const newInputs = {
				...state.inputs,
				[id]: valid
			};

			const formValid = !Object.values(newInputs).includes(false);
			return {
				inputs: newInputs,
				valid: formValid
			};
		default:
			return state;
	}
}
