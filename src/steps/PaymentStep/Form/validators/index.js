export const CardNumber = value => {
	const size = value.replace(/\D+/g, '').length;
	return size === 16;
};

export const Name = value => {
	const size = value.length;
	return size > 10;
};

export const Expiration = value => {
	const size = value.replace(/\D+/g, '').length;

	if (size !== 6) {
		return false;
	}

	const monthYear = value.split('/').map(value => Number(value));
	if (monthYear[0] < 1 || monthYear[0] > 12) {
		return false;
	}
	if (monthYear[1] < 1970 || monthYear[1] > 2100) {
		return false;
	}

	return true;
};

export const Cvv = value => {
	const size = value.replace(/\D+/g, '').length;
	return size === 3;
};
