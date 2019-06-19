import * as Yup from "yup";

export function getInitialValues(inputs) {
	const initialValues = {};

	inputs.forEach(field => {
		initialValues[field.name] = field.value;
	});

	return initialValues;
}

export function getValidationSchemas(inputs) {
	const initialValues = {};

	inputs.forEach(field => {
		initialValues[field.name] = field.schema;
	});

	return Yup.object().shape({ ...initialValues });
}