export default function Products(value) {
    const formatter = new Intl.NumberFormat([], {
        style: 'currency',
        currency: 'BRL'
    })
    return formatter.format(value)
}
