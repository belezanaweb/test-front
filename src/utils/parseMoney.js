const formatter = new Intl.NumberFormat('pt-BR', {
	style: 'currency',
	currency: 'BRL'
});

export default function(number) {
	return formatter.format(number);
}
