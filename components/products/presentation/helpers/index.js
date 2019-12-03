export const imageThumbHelper = (image = []) => {
	return image[0].medium;
};

export const formatLocaleCurrency = (value = 0) => {
	return new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	}).format(value);
};
