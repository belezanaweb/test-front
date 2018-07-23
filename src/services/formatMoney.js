export default function formatReal(number) {
    number = number + ''
    if (number.indexOf('.') > -1) {
        const splitted = number.split('.')
        if (splitted[1].length == 1) {
            return parseFloat(number + '0').toFixed(2)
        }
    } else {
        return parseFloat(number + '.00').toFixed(2)
    }		
}
