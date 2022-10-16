export function inputFormatCreditCardNumber(number: string): string {
    return number
        .replace(/[^0-9]/g, '')
        .match(/.{1,4}/g)
        ?.join('.')
        .substring(0, 19) || '';
}

export function inputFormatValidDate(date: string): string {
    return date
        .replace(/[^0-9]/g, '')
        .match(/\b(?=\w)(\d.{0,1})|(\d.{0,3})/g)
        ?.join('/')
        .substring(0, 7) ?? '';
}

export function inputFormatCvv(cvv: string): string {
    return cvv.replace(/[^0-9]/g, '').substring(0, 3) ?? ''
} 

export function anonimizateCreditCardNumber(number: string): string {
    return '****.****.****.' + number.slice(-4);
}